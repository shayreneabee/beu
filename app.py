import json
import hashlib
import math
import os
import secrets
import sqlite3
import time
from pathlib import Path

from flask import Flask, jsonify, request, send_from_directory, session
from werkzeug.utils import secure_filename
from werkzeug.security import check_password_hash, generate_password_hash


BASE_DIR = Path(__file__).resolve().parent
INSTANCE_DIR = Path(os.getenv("INSTANCE_DIR", BASE_DIR / "instance"))
DB_PATH = Path(os.getenv("DATABASE_PATH", INSTANCE_DIR / "beu.sqlite"))
UPLOAD_DIR = Path(os.getenv("UPLOAD_DIR", INSTANCE_DIR / "uploads"))
PHOTO_DIR = UPLOAD_DIR / "photos"
ALLOWED_IMAGE_EXTENSIONS = {"png", "jpg", "jpeg", "gif", "webp"}

app = Flask(__name__, static_folder=None)
app.secret_key = os.getenv("SECRET_KEY", "dev-beu-change-me")
AUTH_PROVIDER = os.getenv("BRENT_AUTH_PROVIDER", "local")
PLACES_PROVIDER = os.getenv("BEU_PLACES_PROVIDER", "curated").lower()


def db():
    INSTANCE_DIR.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    PHOTO_DIR.mkdir(parents=True, exist_ok=True)
    with db() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT NOT NULL UNIQUE,
                password_hash TEXT NOT NULL,
                display_name TEXT NOT NULL,
                brent_account_id TEXT DEFAULT '',
                auth_provider TEXT DEFAULT 'local',
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
        existing_columns = {
            row["name"] for row in conn.execute("PRAGMA table_info(users)").fetchall()
        }
        for column, definition in {
            "brent_account_id": "TEXT DEFAULT ''",
            "auth_provider": "TEXT DEFAULT 'local'",
        }.items():
            if column not in existing_columns:
                conn.execute(f"ALTER TABLE users ADD COLUMN {column} {definition}")


def brent_account_id(email):
    normalized = (email or "").strip().lower()
    digest = hashlib.sha256(normalized.encode("utf-8")).hexdigest()[:24]
    return f"brent-local-{digest}"


def public_user(user):
    if not user:
        return None
    return {
        "id": user["id"],
        "email": user["email"],
        "displayName": user["display_name"],
        "brentAccountId": user["brent_account_id"] or brent_account_id(user["email"]),
        "authProvider": user["auth_provider"] or AUTH_PROVIDER,
    }


def default_community(user):
    display_name = user["display_name"] if user else "BEU Member"
    return {
        "currentUser": {
            "id": f"user-{user['id']}" if user else "guest",
            "email": user["email"] if user else "",
            "brentAccountId": user["brent_account_id"] or brent_account_id(user["email"]) if user else "",
            "authProvider": user["auth_provider"] or AUTH_PROVIDER if user else "",
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


def allowed_file(filename, allowed):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in allowed


def save_photo(file_storage):
    if not file_storage or not file_storage.filename:
        raise ValueError("Choose a profile picture to upload.")
    if not allowed_file(file_storage.filename, ALLOWED_IMAGE_EXTENSIONS):
        raise ValueError("Profile pictures must be PNG, JPG, JPEG, GIF, or WEBP.")
    original = secure_filename(file_storage.filename)
    ext = original.rsplit(".", 1)[1].lower()
    filename = f"profile-{secrets.token_hex(12)}.{ext}"
    file_storage.save(PHOTO_DIR / filename)
    return f"/uploads/photos/{filename}"


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
    data["currentUser"]["brentAccountId"] = user["brent_account_id"] or brent_account_id(user["email"])
    data["currentUser"]["authProvider"] = user["auth_provider"] or AUTH_PROVIDER
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
        "user": public_user(user),
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
                """
                INSERT INTO users (email, password_hash, display_name, brent_account_id, auth_provider, created_at)
                VALUES (?, ?, ?, ?, ?, ?)
                """,
                (email, generate_password_hash(password), display_name, brent_account_id(email), AUTH_PROVIDER, int(time.time())),
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
    return jsonify({"user": public_user(user), "community": community})


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
    with db() as conn:
        conn.execute(
            "UPDATE users SET brent_account_id = COALESCE(NULLIF(brent_account_id, ''), ?), auth_provider = COALESCE(NULLIF(auth_provider, ''), ?) WHERE id = ?",
            (brent_account_id(user["email"]), AUTH_PROVIDER, user["id"]),
        )
    return jsonify({"user": public_user(user), "community": get_community(user)})


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
    current["brentAccountId"] = user["brent_account_id"] or brent_account_id(user["email"])
    current["authProvider"] = user["auth_provider"] or AUTH_PROVIDER
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


@app.post("/api/beu/profile-photo")
def api_profile_photo():
    user = current_user()
    if not user:
        return jsonify({"error": "Please log in before uploading a BEU profile picture."}), 401
    try:
        avatar_url = save_photo(request.files.get("photo"))
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 400

    community = get_community(user)
    community.setdefault("currentUser", {})
    community["currentUser"]["avatar"] = avatar_url
    with db() as conn:
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
    return jsonify({"ok": True, "avatar": avatar_url, "community": community})


def haversine_miles(lat1, lng1, lat2, lng2):
    earth_radius_miles = 3958.8
    d_lat = math.radians(lat2 - lat1)
    d_lng = math.radians(lng2 - lng1)
    a = (
        math.sin(d_lat / 2) ** 2
        + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(d_lng / 2) ** 2
    )
    return earth_radius_miles * 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))


def load_beu_database():
    with (BASE_DIR / "data" / "beu-listings.json").open("r", encoding="utf-8") as handle:
        return json.load(handle)


@app.get("/api/beu/nearby")
def api_nearby():
    try:
        lat = float(request.args.get("lat", ""))
        lng = float(request.args.get("lng", ""))
    except ValueError:
        return jsonify({"error": "Latitude and longitude are required."}), 400

    radius = min(max(float(request.args.get("radius", "25")), 1), 100)
    database = load_beu_database()
    listings = []
    for listing in database.get("listings", []):
        distance = haversine_miles(lat, lng, float(listing["lat"]), float(listing["lng"]))
        if distance <= radius:
            listings.append({**listing, "distanceMiles": round(distance, 2), "source": "curated"})
    listings.sort(key=lambda item: (not item.get("verified", False), item["distanceMiles"], item["name"]))

    provider_note = "Using curated BEU data. Set BEU_PLACES_PROVIDER and server-side API keys later to add live places."
    if PLACES_PROVIDER != "curated":
        provider_note = f"{PLACES_PROVIDER} provider hook is configured server-side, but live provider calls are not enabled until verification rules are approved."

    return jsonify({
        "provider": PLACES_PROVIDER,
        "providerReady": bool(os.getenv("GOOGLE_PLACES_API_KEY") or os.getenv("FOURSQUARE_API_KEY") or os.getenv("YELP_API_KEY")),
        "message": provider_note,
        "listings": listings,
    })


@app.get("/uploads/<path:path>")
def uploaded_file(path):
    return send_from_directory(UPLOAD_DIR, path)


@app.get("/")
def index():
    return send_from_directory(BASE_DIR, "index.html")


@app.get("/<path:path>")
def assets(path):
    return send_from_directory(BASE_DIR, path)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", "5000")))
