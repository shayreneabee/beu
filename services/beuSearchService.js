(function () {
  const API_PROVIDERS = {
    foursquare: {
      name: "Foursquare Places API",
      status: "planned",
      notes: "Global place discovery. Add API key server-side later; never expose secret keys in the client."
    },
    googlePlaces: {
      name: "Google Places API",
      status: "planned",
      notes: "Strong global POI coverage; use only if cost and terms fit."
    },
    yelpFusion: {
      name: "Yelp Fusion API",
      status: "planned",
      notes: "Useful where Yelp coverage is strong."
    },
    overpass: {
      name: "OpenStreetMap / Overpass",
      status: "planned",
      notes: "Open map data for amenities, heritage sites, restaurants, and cultural spaces."
    },
    events: {
      name: "Eventbrite / Ticketmaster-style APIs",
      status: "planned",
      notes: "Future source for events, festivals, calendars, and nightlife."
    }
  };

  function haversineMiles(a, b) {
    if (!a || !b) return null;
    const earthRadiusMiles = 3958.8;
    const dLat = toRad(b.lat - a.lat);
    const dLng = toRad(b.lng - a.lng);
    const lat1 = toRad(a.lat);
    const lat2 = toRad(b.lat);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
    return earthRadiusMiles * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
  }

  function toRad(value) {
    return (value * Math.PI) / 180;
  }

  function findCity(cities, query) {
    const normalized = query.toLowerCase().trim();
    return cities.find((city) => city.label.toLowerCase().includes(normalized) || city.id === normalized);
  }

  function filterListings(listings, options = {}) {
    const {
      origin,
      radiusMiles = 25,
      compass = "all",
      tag = "all",
      category = "all",
      country = "all",
      query = ""
    } = options;
    const normalizedQuery = query.toLowerCase().trim();

    return listings
      .map((listing) => ({
        ...listing,
        distanceMiles: origin ? haversineMiles(origin, listing) : null
      }))
      .filter((listing) => {
        const text = `${listing.name} ${listing.category} ${listing.description} ${listing.city} ${listing.country} ${listing.tags.join(" ")}`.toLowerCase();
        return (!origin || listing.distanceMiles <= radiusMiles)
          && (compass === "all" || listing.compass === compass)
          && (tag === "all" || listing.tags.includes(tag))
          && (category === "all" || listing.category === category)
          && (country === "all" || listing.country === country)
          && (!normalizedQuery || text.includes(normalizedQuery));
      })
      .sort((a, b) => {
        if (a.verified !== b.verified) return a.verified ? -1 : 1;
        if (a.distanceMiles == null || b.distanceMiles == null) return a.name.localeCompare(b.name);
        return a.distanceMiles - b.distanceMiles;
      });
  }

  function mapLink(listing) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${listing.name} ${listing.address} ${listing.city}`)}`;
  }

  async function searchExternalProviders() {
    return {
      status: "not-connected",
      providers: API_PROVIDERS,
      message: "External APIs are intentionally stubbed until keys, backend proxying, data terms, and verification workflow are in place."
    };
  }

  window.BEUSearchService = {
    API_PROVIDERS,
    findCity,
    filterListings,
    haversineMiles,
    mapLink,
    searchExternalProviders
  };
})();
