# BEU Global Cultural Compass Strategy

BEU is designed as a location-aware cultural discovery app for Black-owned and Black-centered culture around the world.

## Phase 1: Local Prototype

- Ask for browser location permission with `navigator.geolocation`
- Allow manual city/country search
- Use sample global data from `data/beu-listings.json`
- Display result cards by compass section:
  - North Star: featured people, promoters, creators, community leaders, cultural guides
  - Essence: food, restaurants, cuisine, Black-owned dining, cultural food experiences
  - Scene: places to visit, nightlife, music, art, museums, cultural spaces
  - Waypoint: events, calendars, festivals, meetups, recurring cultural happenings
- Filter by radius, category, tag, compass section, and keyword

## Phase 2: API Connection Layer

Use `services/beuSearchService.js` as the client-side search abstraction. In production, API calls should go through a backend proxy so keys are never exposed in the browser.

Potential APIs:

- Foursquare Places API for global place and POI discovery
- Google Places API if coverage, cost, and terms fit
- Yelp Fusion API where supported
- OpenStreetMap / Overpass for open amenity and map data
- Eventbrite or Ticketmaster-style APIs for events, concerts, festivals, and nightlife

Important limitation: these APIs generally do not reliably identify Black-owned status. API-sourced places should be treated as discovery leads unless BEU verifies them.

## Phase 3: Verified BEU Database

Add backend collections/tables for:

- `listings`
- `listingSources`
- `verificationStatus`
- `userSubmissions`
- `adminReviews`
- `events`
- `people`
- `cities`
- `tags`
- `favorites`
- `savedTrips`

Suggested verification statuses:

- `beu_verified`
- `community_submitted`
- `api_sourced`
- `needs_review`
- `rejected`

## Listing Schema

```json
{
  "id": "berlin-soul-kitchen",
  "name": "Soul Kitchen Berlin",
  "compass": "essence",
  "category": "Restaurant",
  "description": "Short curated summary",
  "city": "Berlin",
  "country": "Germany",
  "address": "Kreuzberg, Berlin",
  "lat": 52.5009,
  "lng": 13.4205,
  "tags": ["Black-owned", "Diaspora culture", "Food"],
  "website": "https://real-listing-url-when-verified.org",
  "phone": "",
  "source": "BEU sample database",
  "verified": true
}
```

## Tags

Use tags to model cultural context:

- Black-owned
- Black-centered
- Diaspora culture
- Caribbean
- African
- Southern/Soul Food
- Live Music
- Art
- Nightlife
- Museum
- Heritage
- Community organization
- Food
- Event
