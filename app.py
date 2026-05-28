import json
import os
import sqlite3
import time
from pathlib import Path

from flask import Flask, jsonify, request, send_from_directory, session
from werkzeug.security import check_password_hash, generate_password_hash


BASE_DIR = Path(__file__).resolve().parent
INSTANCE_DIR = Path(os.getenv("INSTANCE_DIR", BASE_DIR / "instance"))
DB_PATH = Path(os.getenv("DATABASE_PATH", INSTANCE_DIR / "beu.sqlite"))

app = Flask(__name__, static_folder=None)
app.secret_key = os.getenv("SECRET_KEY", "dev-beu-change-me")


def db():
    INSTANCE_DIR.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    with db() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT NOT NULL UNIQUE,
                password_hash TEXT NOT NULL,
                display_name TEXT NOT NULL,
                created_at INTEGER NOT NULL
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS beu_profiles (
                user_id INTEGER PRIMARY KEY,
                community_json TEXT NOT NULL,
                updated_at INTEGER NOT NULL,
                FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
            )
            """
        )


def default_community(user):
    display_name = user["display_name"] if user else "BEU Member"
    return {
        "currentUser": {
            "id": f"user-{user['id']}" if user else "guest",
            "email": user["email"] if user else "",
            "avatar": "assets/beu-logo.jpg",
            "displayName": display_name,
            "homeCity": "",
            "homeCountry": "",
            "bio": "",
            "favoriteCategories": [],
            "badges": ["BEU Member"] if user else [],
            "verifiedUser": False,
        },
        "reviews": [],
        "recommendations": [],
        "savedPlaces": [],
        "reports": [],
    }


def current_user():
    user_id = session.get("user_id")
    if not user_id:
        return None
    with db() as conn:
        return conn.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone()


def get_community(user):
    if not user:
        return default_community(None)
    with db() as conn:
        row = conn.execute(
            "SELECT community_json FROM beu_profiles WHERE user_id = ?",
            (user["id"],),
        ).fetchone()
        if row:
            data = json.loads(row["community_json"])
        else:
            data = default_community(user)
            conn.execute(
                "INSERT INTO beu_profiles (user_id, community_json, updated_at) VALUES (?, ?, ?)",
                (user["id"], json.dumps(data), int(time.time())),
            )
    data.setdefault("currentUser", {})
    data["currentUser"]["id"] = f"user-{user['id']}"
    data["currentUser"]["email"] = user["email"]
    data["currentUser"].setdefault("displayName", user["display_name"])
    return data


@app.before_request
def ensure_database():
    init_db()


@app.get("/api/beu/session")
def api_session():
    user = current_user()
    return jsonify({
        "authenticated": bool(user),
        "user": {"id": user["id"], "email": user["email"], "displayName": user["display_name"]} if user else None,
    })


@app.post("/api/beu/signup")
def api_signup():
    payload = request.get_json(silent=True) or {}
    email = (payload.get("email") or "").strip().lower()
    password = payload.get("password") or ""
    display_name = (payload.get("displayName") or "").strip() or "BEU Member"
    if not email or len(password) < 8:
        return jsonify({"error": "Email and an 8-character password are required."}), 400

    with db() as conn:
        try:
            cursor = conn.execute(
                "INSERT INTO users (email, password_hash, display_name, created_at) VALUES (?, ?, ?, ?)",
                (email, generate_password_hash(password), display_name, int(time.time())),
            )
        except sqlite3.IntegrityError:
            return jsonify({"error": "That email already has a BEU account."}), 409
        session.clear()
        session["user_id"] = cursor.lastrowid
        user = conn.execute("SELECT * FROM users WHERE id = ?", (cursor.lastrowid,)).fetchone()
        community = default_community(user)
        conn.execute(
            "INSERT INTO beu_profiles (user_id, community_json, updated_at) VALUES (?, ?, ?)",
            (user["id"], json.dumps(community), int(time.time())),
        )
    return jsonify({"user": {"email": email, "displayName": display_name}, "community": community})


@app.post("/api/beu/login")
def api_login():
    payload = request.get_json(silent=True) or {}
    email = (payload.get("email") or "").strip().lower()
    password = payload.get("password") or ""
    with db() as conn:
        user = conn.execute("SELECT * FROM users WHERE email = ?", (email,)).fetchone()
    if not user or not check_password_hash(user["password_hash"], password):
        return jsonify({"error": "Email or password did not match."}), 401
    session.clear()
    session["user_id"] = user["id"]
    return jsonify({"user": {"email": user["email"], "displayName": user["display_name"]}, "community": get_community(user)})


@app.post("/api/beu/logout")
def api_logout():
    session.clear()
    return jsonify({"ok": True, "community": default_community(None)})


@app.get("/api/beu/community")
def api_get_community():
    user = current_user()
    return jsonify({"authenticated": bool(user), "community": get_community(user)})


@app.post("/api/beu/community")
def api_save_community():
    user = current_user()
    if not user:
        return jsonify({"error": "Please log in to save your BEU profile."}), 401
    community = request.get_json(silent=True) or {}
    current = community.setdefault("currentUser", {})
    display_name = (current.get("displayName") or user["display_name"] or "BEU Member").strip()
    current["id"] = f"user-{user['id']}"
    current["email"] = user["email"]
    with db() as conn:
        conn.execute("UPDATE users SET display_name = ? WHERE id = ?", (display_name, user["id"]))
        conn.execute(
            """
            INSERT INTO beu_profiles (user_id, community_json, updated_at)
            VALUES (?, ?, ?)
            ON CONFLICT(user_id) DO UPDATE SET
              community_json = excluded.community_json,
              updated_at = excluded.updated_at
            """,
            (user["id"], json.dumps(community), int(time.time())),
        )
    return jsonify({"ok": True, "community": community})


@app.get("/")
def index():
    return send_from_directory(BASE_DIR, "index.html")


@app.get("/<path:path>")
def assets(path):
    return send_from_directory(BASE_DIR, path)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", "5000")))
