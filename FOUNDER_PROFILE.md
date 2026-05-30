# BEU Founder Profiles

BEU is an active standalone app with its own domain, branding, deployment, database path, and future app-store/PWA path. It remains connected to Brent & Co as part of the larger ecosystem, but it does not depend on Brent & Co to function.

Protected founder/admin profiles:

- Email: shalanda.brent@gmail.com
  Display name: Shay / Brent & Co Founder
- Email: jerod.l.cotton@gmail.com
  Display name: Jerod / Brent & Co Founder

For both profiles:

- Role: admin
- Founder: true
- Verified: true
- Shared account key: derived from the normalized email with the same `brent-local-<sha256>` pattern used by the active apps

Admin/founder flags must be set server-side only through protected seed code or environment-managed deployment scripts.
