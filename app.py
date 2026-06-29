import json
import hashlib
import base64
import hmac
import json
import math
import os
import secrets
import sqlite3
import time
from pathlib import Path
from urllib.parse import urlencode

from flask import Flask, jsonify, redirect, request, send_from_directory, session
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
app.config.update(
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE=os.getenv("SESSION_COOKIE_SAMESITE", "Lax"),
    SESSION_COOKIE_SECURE=os.getenv("SESSION_COOKIE_SECURE", "1").strip().lower() in {"1", "true", "yes", "on"},
)
AUTH_PROVIDER = os.getenv("BRENT_AUTH_PROVIDER", "local")
PLACES_PROVIDER = os.getenv("BEU_PLACES_PROVIDER", "curated").lower()
OWNER_AUTH_PROVIDER = os.getenv("BRENT_OWNER_AUTH_PROVIDER", "brent-core")
OWNER_INITIAL_PASSWORD = os.getenv("BRENT_OWNER_INITIAL_PASSWORD", "")
GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID", "")
GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET", "")
APPLE_CLIENT_ID = os.getenv("APPLE_CLIENT_ID", "")
APPLE_TEAM_ID = os.getenv("APPLE_TEAM_ID", "")
APPLE_KEY_ID = os.getenv("APPLE_KEY_ID", "")
APPLE_PRIVATE_KEY = os.getenv("APPLE_PRIVATE_KEY", "")
FACEBOOK_CLIENT_ID = os.getenv("FACEBOOK_CLIENT_ID", "")
FACEBOOK_CLIENT_SECRET = os.getenv("FACEBOOK_CLIENT_SECRET", "")
SSO_SHARED_SECRET = os.getenv("SSO_SHARED_SECRET", "dev-sso-change-me")
BRENT_SSO_URL = os.getenv("BRENT_SSO_URL", "https://www.brentandco.org/sso/start")
BEU_URL = os.getenv("BEU_URL", "https://beutravel.org/")
FOUNDER_PROFILES = [
    {
        "email": os.getenv("BRENT_OWNER_EMAIL", "shalanda.brent@gmail.com").strip().lower(),
        "full_name": os.getenv("BRENT_OWNER_FULL_NAME", "Shalanda Brent"),
        "display_name": os.getenv("BRENT_OWNER_DISPLAY_NAME", "Shay"),
    },
]
REMOVED_FOUNDER_ACCOUNT_IDS = {
    "brent-local-5d8164cc79cd29c886ce672de9ce801e5583e968504d3390524812cc204b37be",
}
REMOVED_FOUNDER_EMAILS = {
    email.strip().lower()
    for email in os.getenv("BRENT_REMOVED_FOUNDER_EMAILS", "").split(",")
    if email.strip()
}


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
                full_name TEXT DEFAULT '',
                display_name TEXT NOT NULL,
                username TEXT DEFAULT '',
                avatar_url TEXT DEFAULT '',
                bio TEXT DEFAULT '',
                city TEXT DEFAULT '',
                state TEXT DEFAULT '',
                country TEXT DEFAULT '',
                brent_account_id TEXT DEFAULT '',
                provider TEXT DEFAULT 'local',
                provider_id TEXT DEFAULT '',
                auth_provider TEXT DEFAULT 'local',
                authentication_provider TEXT DEFAULT 'local',
                profile_photo TEXT DEFAULT '',
                is_admin INTEGER DEFAULT 0,
                is_founder INTEGER DEFAULT 0,
                is_verified INTEGER DEFAULT 0,
                created_at INTEGER NOT NULL,
                last_login_at INTEGER DEFAULT 0,
                updated_at INTEGER DEFAULT 0
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
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS travel_profiles (
                user_id INTEGER PRIMARY KEY,
                travel_interests TEXT DEFAULT '',
                preferences_json TEXT DEFAULT '{}',
                created_at INTEGER NOT NULL,
                updated_at INTEGER NOT NULL,
                FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
            )
            """
        )
        existing_columns = {
            row["name"] for row in conn.execute("PRAGMA table_info(users)").fetchall()
        }
        for column, definition in {
            "full_name": "TEXT DEFAULT ''",
            "username": "TEXT DEFAULT ''",
            "avatar_url": "TEXT DEFAULT ''",
            "bio": "TEXT DEFAULT ''",
            "city": "TEXT DEFAULT ''",
            "state": "TEXT DEFAULT ''",
            "country": "TEXT DEFAULT ''",
            "brent_account_id": "TEXT DEFAULT ''",
            "provider": "TEXT DEFAULT 'local'",
            "provider_id": "TEXT DEFAULT ''",
            "auth_provider": "TEXT DEFAULT 'local'",
            "authentication_provider": "TEXT DEFAULT 'local'",
            "profile_photo": "TEXT DEFAULT ''",
            "is_admin": "INTEGER DEFAULT 0",
            "is_founder": "INTEGER DEFAULT 0",
            "is_verified": "INTEGER DEFAULT 0",
            "last_login_at": "INTEGER DEFAULT 0",
            "updated_at": "INTEGER DEFAULT 0",
        }.items():
            if column not in existing_columns:
                conn.execute(f"ALTER TABLE users ADD COLUMN {column} {definition}")


def brent_account_id(email):
    normalized = (email or "").strip().lower()
    digest = hashlib.sha256(normalized.encode("utf-8")).hexdigest()[:24]
    return f"brent-local-{digest}"


def sso_b64decode(value):
    padding = "=" * (-len(value) % 4)
    return base64.urlsafe_b64decode((value + padding).encode("utf-8"))


def verify_sso_token(token):
    try:
        body, signature = token.split(".", 1)
        expected = hmac.new(
            SSO_SHARED_SECRET.encode("utf-8"),
            body.encode("utf-8"),
            hashlib.sha256,
        ).digest()
        if not hmac.compare_digest(sso_b64decode(signature), expected):
            return None
        payload = json.loads(sso_b64decode(body).decode("utf-8"))
    except (ValueError, json.JSONDecodeError, TypeError):
        return None
    if payload.get("aud") != "beu" or int(payload.get("exp", 0)) < int(time.time()):
        return None
    return payload


def ensure_travel_profile(conn, user_id):
    now = int(time.time())
    conn.execute(
        """
        INSERT OR IGNORE INTO travel_profiles (user_id, created_at, updated_at)
        VALUES (?, ?, ?)
        """,
        (user_id, now, now),
    )


def upsert_sso_user(payload):
    email = (payload.get("email") or "").strip().lower()
    if not email:
        raise ValueError("Brent SSO did not include an email address.")
    display_name = (payload.get("display_name") or "").strip() or email.split("@")[0]
    profile_photo = (payload.get("profile_photo") or "").strip()
    provider = (payload.get("authentication_provider") or "brent-sso").strip()
    now = int(time.time())
    with db() as conn:
        row = conn.execute("SELECT * FROM users WHERE lower(email) = lower(?)", (email,)).fetchone()
        if row:
            conn.execute(
                """
                UPDATE users
                SET full_name = COALESCE(NULLIF(full_name, ''), ?),
                    display_name = COALESCE(NULLIF(display_name, ''), ?),
                    avatar_url = COALESCE(NULLIF(avatar_url, ''), ?),
                    profile_photo = COALESCE(NULLIF(profile_photo, ''), ?),
                    brent_account_id = COALESCE(NULLIF(brent_account_id, ''), ?),
                    provider = ?, auth_provider = ?, authentication_provider = ?,
                    is_admin = MAX(is_admin, ?), is_founder = MAX(is_founder, ?),
                    is_verified = MAX(is_verified, ?),
                    last_login_at = ?, updated_at = ?
                WHERE id = ?
                """,
                (
                    display_name,
                    display_name,
                    profile_photo,
                    profile_photo,
                    payload.get("sub") or brent_account_id(email),
                    provider,
                    provider,
                    provider,
                    1 if payload.get("is_admin") else 0,
                    1 if payload.get("is_founder") else 0,
                    1 if payload.get("is_founder") else 0,
                    now,
                    now,
                    row["id"],
                ),
            )
            user_id = row["id"]
        else:
            cursor = conn.execute(
                """
                INSERT INTO users (
                    email, password_hash, full_name, display_name, avatar_url, profile_photo,
                    brent_account_id, provider, auth_provider, authentication_provider,
                    is_admin, is_founder, is_verified, created_at, last_login_at, updated_at
                )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    email,
                    generate_password_hash(secrets.token_urlsafe(32)),
                    display_name,
                    display_name,
                    profile_photo,
                    profile_photo,
                    payload.get("sub") or brent_account_id(email),
                    provider,
                    provider,
                    provider,
                    1 if payload.get("is_admin") else 0,
                    1 if payload.get("is_founder") else 0,
                    1 if payload.get("is_founder") else 0,
                    now,
                    now,
                    now,
                ),
            )
            user_id = cursor.lastrowid
        ensure_travel_profile(conn, user_id)
        community = default_community(conn.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone())
        conn.execute(
            "INSERT OR IGNORE INTO beu_profiles (user_id, community_json, updated_at) VALUES (?, ?, ?)",
            (user_id, json.dumps(community), now),
        )
        return conn.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone()


def official_badges(user):
    if not user:
        return []
    badges = []
    if user["is_founder"]:
        badges.extend(["Founder", "BEU", "Brent & Co"])
    elif user["is_verified"]:
        badges.append("Verified")
    return list(dict.fromkeys(badges))


def is_app_avatar(value):
    normalized = (value or "").strip().lower()
    return normalized in {"assets/logo.png", "assets/beu-logo.jpg", "assets/brent-co-logo.svg"}


def apply_user_identity(community, user):
    current = community.setdefault("currentUser", {})
    display_name = user["display_name"] or user["full_name"] or user["email"].split("@")[0]
    current_avatar = current.get("avatar", "")
    avatar_url = user["avatar_url"] or user["profile_photo"] or ("" if is_app_avatar(current_avatar) else current_avatar)
    current["id"] = f"user-{user['id']}"
    current["email"] = user["email"]
    current["brentAccountId"] = user["brent_account_id"] or brent_account_id(user["email"])
    current["authProvider"] = user["auth_provider"] or user["provider"] or AUTH_PROVIDER
    current["provider"] = user["provider"] or user["auth_provider"] or AUTH_PROVIDER
    current["providerId"] = user["provider_id"] or ""
    current["fullName"] = user["full_name"] or display_name
    current.setdefault("displayName", display_name)
    current["avatar"] = avatar_url
    current["avatarUrl"] = avatar_url
    current["isAdmin"] = bool(user["is_admin"])
    current["isFounder"] = bool(user["is_founder"])
    current["verifiedUser"] = bool(user["is_verified"])
    editable_badges = [
        badge
        for badge in current.get("badges", [])
        if badge not in {"Founder", "Verified", "Brent & Co", "Admin"}
    ]
    current["badges"] = list(dict.fromkeys([*official_badges(user), *editable_badges])) or ["BEU Member"]
    return community


def seed_founder_profile():
    with db() as conn:
        for founder in FOUNDER_PROFILES:
            email = founder["email"]
            if not email:
                continue
            founder_display_name = founder.get("display_name") or email.split("@")[0]
            founder_full_name = founder.get("full_name") or founder_display_name
            existing = conn.execute(
                "SELECT * FROM users WHERE lower(email) = lower(?)",
                (email,),
            ).fetchone()
            if existing:
                conn.execute(
                    """
                    UPDATE users
                    SET full_name = ?, display_name = ?, brent_account_id = ?,
                        provider = ?, auth_provider = ?, is_admin = 1,
                        is_founder = 1, is_verified = 1, updated_at = ?
                    WHERE id = ?
                    """,
                    (
                        founder_full_name,
                        founder_display_name,
                        brent_account_id(email),
                        OWNER_AUTH_PROVIDER,
                        OWNER_AUTH_PROVIDER,
                        int(time.time()),
                        existing["id"],
                    ),
                )
                continue
            cursor = conn.execute(
                """
                INSERT INTO users (
                    email, password_hash, full_name, display_name, brent_account_id,
                    provider, auth_provider, is_admin, is_founder, is_verified,
                    created_at, updated_at
                )
                VALUES (?, ?, ?, ?, ?, ?, ?, 1, 1, 1, ?, ?)
                """,
                (
                    email,
                    generate_password_hash(OWNER_INITIAL_PASSWORD or secrets.token_urlsafe(32)),
                    founder_full_name,
                    founder_display_name,
                    brent_account_id(email),
                    OWNER_AUTH_PROVIDER,
                    OWNER_AUTH_PROVIDER,
                    int(time.time()),
                    int(time.time()),
                ),
            )
            user = conn.execute("SELECT * FROM users WHERE id = ?", (cursor.lastrowid,)).fetchone()
            conn.execute(
                "INSERT INTO beu_profiles (user_id, community_json, updated_at) VALUES (?, ?, ?)",
                (user["id"], json.dumps(default_community(user)), int(time.time())),
            )
        cleanup_removed_founders(conn)


def cleanup_removed_founders(conn):
    account_ids = {account_id for account_id in REMOVED_FOUNDER_ACCOUNT_IDS if account_id}
    account_ids.update(brent_account_id(email) for email in REMOVED_FOUNDER_EMAILS)
    if not account_ids:
        return
    placeholders = ",".join("?" for _ in account_ids)
    conn.execute(
        f"""
        UPDATE users
        SET full_name = '', display_name = 'User',
            is_admin = 0, is_founder = 0, is_verified = 0, updated_at = ?
        WHERE brent_account_id IN ({placeholders})
        """,
        (int(time.time()), *tuple(account_ids)),
    )


def public_user(user):
    if not user:
        return None
    display_name = user["display_name"] or user["full_name"] or user["email"].split("@")[0]
    initials = "".join(part[:1] for part in display_name.replace("/", " ").split()[:2]).upper() or "SB"
    avatar_url = user["avatar_url"] or user["profile_photo"] or ""
    return {
        "id": user["id"],
        "email": user["email"],
        "fullName": user["full_name"] or display_name,
        "displayName": display_name,
        "username": user["username"] or "",
        "avatarUrl": avatar_url,
        "initials": initials,
        "bio": user["bio"] or "",
        "city": user["city"] or "",
        "state": user["state"] or "",
        "country": user["country"] or "",
        "brentAccountId": user["brent_account_id"] or brent_account_id(user["email"]),
        "provider": user["provider"] or user["auth_provider"] or AUTH_PROVIDER,
        "providerId": user["provider_id"] or "",
        "authProvider": user["auth_provider"] or user["provider"] or AUTH_PROVIDER,
        "isAdmin": bool(user["is_admin"]),
        "isFounder": bool(user["is_founder"]),
        "isVerified": bool(user["is_verified"]),
        "badges": official_badges(user),
    }


def default_community(user):
    display_name = user["display_name"] if user else "BEU Member"
    avatar_url = (user["avatar_url"] or user["profile_photo"]) if user else ""
    return {
        "currentUser": {
            "id": f"user-{user['id']}" if user else "guest",
            "email": user["email"] if user else "",
            "brentAccountId": user["brent_account_id"] or brent_account_id(user["email"]) if user else "",
            "authProvider": user["auth_provider"] or AUTH_PROVIDER if user else "",
            "provider": user["provider"] or user["auth_provider"] or AUTH_PROVIDER if user else "",
            "providerId": user["provider_id"] if user else "",
            "avatar": avatar_url,
            "avatarUrl": avatar_url,
            "displayName": display_name,
            "homeCity": "",
            "homeCountry": "",
            "bio": "",
            "favoriteCategories": [],
            "badges": official_badges(user) or (["BEU Member"] if user else []),
            "verifiedUser": bool(user["is_verified"]) if user else False,
            "isAdmin": bool(user["is_admin"]) if user else False,
            "isFounder": bool(user["is_founder"]) if user else False,
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
    return apply_user_identity(data, user)


@app.before_request
def ensure_database():
    init_db()
    seed_founder_profile()


@app.get("/sso/login")
def sso_login():
    next_path = request.args.get("next") or "/#beu-profile"
    query = urlencode({"app": "beu", "next": next_path})
    return redirect(f"{BRENT_SSO_URL}?{query}")


@app.get("/sso/consume")
def sso_consume():
    payload = verify_sso_token(request.args.get("token", ""))
    if not payload:
        return "That Brent & Co sign-in link expired. Please try again.", 400
    user = upsert_sso_user(payload)
    session.clear()
    session["user_id"] = user["id"]
    return redirect(request.args.get("next") or "/#beu-profile")


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
                INSERT INTO users (
                    email, password_hash, full_name, display_name, brent_account_id,
                    provider, auth_provider, authentication_provider, created_at, last_login_at, updated_at
                )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    email,
                    generate_password_hash(password),
                    display_name,
                    display_name,
                    brent_account_id(email),
                    AUTH_PROVIDER,
                    AUTH_PROVIDER,
                    AUTH_PROVIDER,
                    int(time.time()),
                    int(time.time()),
                    int(time.time()),
                ),
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
        ensure_travel_profile(conn, user["id"])
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
            """
            UPDATE users
            SET brent_account_id = COALESCE(NULLIF(brent_account_id, ''), ?),
                provider = COALESCE(NULLIF(provider, ''), ?),
                auth_provider = COALESCE(NULLIF(auth_provider, ''), ?),
                authentication_provider = COALESCE(NULLIF(authentication_provider, ''), ?),
                last_login_at = ?,
                updated_at = ?
            WHERE id = ?
            """,
            (
                brent_account_id(user["email"]),
                AUTH_PROVIDER,
                AUTH_PROVIDER,
                AUTH_PROVIDER,
                int(time.time()),
                int(time.time()),
                user["id"],
            ),
        )
        ensure_travel_profile(conn, user["id"])
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
    current["authProvider"] = user["auth_provider"] or user["provider"] or AUTH_PROVIDER
    community = apply_user_identity(community, user)
    with db() as conn:
        conn.execute(
            """
            UPDATE users
            SET display_name = ?, full_name = COALESCE(NULLIF(full_name, ''), ?),
                avatar_url = ?, bio = ?, city = ?, country = ?, updated_at = ?
            WHERE id = ?
            """,
            (
                display_name,
                display_name,
                current.get("avatar") or "",
                current.get("bio") or "",
                current.get("homeCity") or "",
                current.get("homeCountry") or "",
                int(time.time()),
                user["id"],
            ),
        )
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
            "UPDATE users SET avatar_url = ?, updated_at = ? WHERE id = ?",
            (avatar_url, int(time.time()), user["id"]),
        )
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
    except (TypeError, ValueError):
        return jsonify({"error": "Latitude and longitude are required."}), 400

    if not (-90 <= lat <= 90 and -180 <= lng <= 180):
        return jsonify({"error": "Latitude or longitude is outside the valid range."}), 400

    try:
        radius = min(max(float(request.args.get("radius", "25")), 1), 100)
    except (TypeError, ValueError):
        radius = 25

    database = load_beu_database()
    listings = []
    for listing in database.get("listings", []):
        try:
            listing_lat = float(listing.get("lat"))
            listing_lng = float(listing.get("lng"))
        except (TypeError, ValueError):
            continue
        distance = haversine_miles(lat, lng, listing_lat, listing_lng)
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
        "origin": {"lat": lat, "lng": lng},
        "radiusMiles": radius,
        "count": len(listings),
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
