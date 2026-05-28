# BEU Cultural Compass

BEU is the Brent & Co. cultural compass app for global Black-owned and Black-centered discovery.

## What This Build Includes

- BEU home route as the default screen
- Flask backend for account signup, login, logout, and session-backed profile access
- SQLite persistence for BEU users and saved community/profile data
- Compass navigation for North Star, Essence, Scene, and Waypoint
- Global country/city selectors
- Location-aware sample data structure
- BEU result cards with tags, source, map links, and verified badges
- Community trust layer with profile, saved places, reviews, recommendations, reports, and admin queue patterns
- Local JSON data in `data/`
- Reusable search helpers in `services/beuSearchService.js`

## Deploy on Render

Create a Web Service:

- Repository: `shayreneabee/beu`
- Branch: `main`
- Build command: `pip install -r requirements.txt`
- Start command: `gunicorn app:app`
- Root directory: blank
- Add a persistent disk mounted at `/data`
- Set `SECRET_KEY` to a real generated secret
- Set `INSTANCE_DIR=/data/instance`
- Set `DATABASE_PATH=/data/instance/beu.sqlite`

## Local Preview

Run:

```bash
pip install -r requirements.txt
flask --app app run
```

Then open `http://127.0.0.1:5000/#beu`.

## Database Tables

- `users`: email, password hash, display name, and account creation time.
- `beu_profiles`: one saved BEU community/profile JSON document per user, including profile fields, saved places, reviews, recommendations, and reports.
