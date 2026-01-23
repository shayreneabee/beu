import type { Section } from "@/types/section";

type Featured = {
  name: string;
  description: string;
  stats: { events: string; followers: string; rating: string };
  upcomingEvents: string[];
};

type CityData = Record<Section, Featured>;

const fallback: CityData = {
  promoter: {
    name: "Featured Promoter",
    description: "Promoter spotlight coming soon for this city.",
    stats: { events: "—", followers: "—", rating: "—" },
    upcomingEvents: ["No highlights yet"],
  },
  place: {
    name: "Featured Place",
    description: "Place spotlight coming soon for this city.",
    stats: { events: "—", followers: "—", rating: "—" },
    upcomingEvents: ["No highlights yet"],
  },
  cuisine: {
    name: "Featured Cuisine",
    description: "Cuisine spotlight coming soon for this city.",
    stats: { events: "—", followers: "—", rating: "—" },
    upcomingEvents: ["No highlights yet"],
  },
  events: {
    name: "What’s Happening Now",
    description: "Live events coming soon for this city.",
    stats: { events: "—", followers: "—", rating: "—" },
    upcomingEvents: ["No highlights yet"],
  },
};

const data: Record<string, CityData> = {
  paris: {
    promoter: {
      name: "DJ Amina",
      description: "Curating diaspora nights that feel like home—Afrobeats, R&B, amapiano, and community warmth.",
      stats: { events: "4 events", followers: "12.3k", rating: "4.9" },
      upcomingEvents: ["Diaspora Night • Friday", "Brunch & Bounce • Sunday", "Open Mic • Next Wed"],
    },
    place: {
      name: "La Maison Culture",
      description: "A cozy creative space for panels, art, music, and Black-owned pop-ups.",
      stats: { events: "8 monthly", followers: "7.1k", rating: "4.8" },
      upcomingEvents: ["Gallery Night • Sat", "Wellness Circle • Tue", "Film Screening • Thu"],
    },
    cuisine: {
      name: "Soul & Spice",
      description: "A modern soul kitchen with West African influence—bold flavors, soft vibes.",
      stats: { events: "3 pop-ups", followers: "5.4k", rating: "4.7" },
      upcomingEvents: ["Chef’s Tasting • Fri", "Sunday Plates • Sun", "Dessert Bar • Wed"],
    },
    events: {
      name: "What’s Happening Now",
      description: "Live picks near you—music, art, networking, wellness, and family-friendly hangs.",
      stats: { events: "12 nearby", followers: "Live", rating: "Updated" },
      upcomingEvents: ["Afrobeats Night • Tonight", "Art Pop-up • Tomorrow", "Meet & Greet • This Week"],
    },
  },

  london: {
    promoter: {
      name: "Kulture Curator Kai",
      description: "The plug for lounges, rooftops, and grown energy.",
      stats: { events: "6 events", followers: "21k", rating: "4.9" },
      upcomingEvents: ["Rooftop Vibes • Sat", "R&B Night • Thu", "Day Party • Sun"],
    },
    place: {
      name: "The Black Bookstore Café",
      description: "Books, espresso, and community conversations.",
      stats: { events: "10 monthly", followers: "9.2k", rating: "4.8" },
      upcomingEvents: ["Author Talk • Fri", "Chess & Chill • Sun", "Poetry Night • Wed"],
    },
    cuisine: {
      name: "Caribbean Corner",
      description: "Jerk, curry, plantain—and the auntie energy you didn’t know you needed.",
      stats: { events: "5 specials", followers: "13k", rating: "4.7" },
      upcomingEvents: ["Jerk Night • Fri", "Lunch Special • Mon", "Rum Cake Pop-up • Sat"],
    },
    events: {
      name: "What’s Happening Now",
      description: "Live picks around you—tap in, show up, connect.",
      stats: { events: "18 nearby", followers: "Live", rating: "Updated" },
      upcomingEvents: ["Open Mic • Tonight", "Networking Mixer • Thu", "Art Walk • Sat"],
    },
  },

  berlin: fallback,
  amsterdam: fallback,
};

export function getLocationData(cityId: string): CityData {
  return data[cityId] ?? fallback;
}




export type LiveEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  vibe: "music" | "art" | "wellness" | "networking";
  free: boolean;
};

export const liveEventsByCity: Record<string, LiveEvent[]> = {
  paris: [
    {
      id: "1",
      title: "Afrobeats Night",
      date: "Tonight",
      time: "9:00 PM",
      location: "La Bellevilloise",
      vibe: "music",
      free: false,
    },
    {
      id: "2",
      title: "Black Creatives Mixer",
      date: "Tomorrow",
      time: "7:00 PM",
      location: "Le Consulat",
      vibe: "networking",
      free: true,
    },
    {
      id: "3",
      title: "Sound Bath + Meditation",
      date: "Saturday",
      time: "11:00 AM",
      location: "Canal Saint-Martin",
      vibe: "wellness",
      free: true,
    },
  ],
};

// ===== BEU Promoter Spotlight (editorial + growth) =====
export type PromoterProfile = {
  id: string;
  name: string;
  cityLabel: string;
  photo: string;
  tagline: string;
  bio: string;
  whyBeuChose: string;
  promoterQuote: string;
  stats: {
    followers: number;
    eventsHosted: number;
    rating: number; // 0-5
  };
  socials: {
    instagram?: string;
    website?: string;
  };
  upcoming: Array<{
    title: string;
    when: string;
    where: string;
  }>;
};

export const promoterProfilesByCity: Record<string, PromoterProfile> = {
  paris: {
    id: "paris-amina",
    name: "DJ Amina",
    cityLabel: "Paris",
    photo:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1400&q=80",
    tagline: "Diaspora nights that feel like home.",
    bio:
      "Amina is a curator and connector—blending Afrobeats, R&B, amapiano, and soulful classics into rooms where people actually meet each other. Her sets are warm, intentional, and rooted in community.",
    whyBeuChose:
      "BEU chose Amina because she doesn’t just throw events—she builds belonging. She consistently centers safety, joy, and cultural pride while elevating local artists and Black-owned vendors.",
    promoterQuote:
      "“My goal is simple: you should leave with a new friend, a new favorite song, and a reminder that you’re not alone.”",
    stats: { followers: 12340, eventsHosted: 48, rating: 4.9 },
    socials: { instagram: "@dj.aminaparis", website: "aminapresents.com" },
    upcoming: [
      { title: "Diaspora Night", when: "Tonight • 9:00 PM", where: "La Bellevilloise" },
      { title: "Brunch & Bounce", when: "Sunday • 1:00 PM", where: "Canal Saint-Martin" },
      { title: "Open Mic Afterglow", when: "Next Wed • 8:00 PM", where: "Le Consulat" },
    ],
  },

  london: {
    id: "london-kai",
    name: "Kulture Curator Kai",
    cityLabel: "London",
    photo:
      "https://images.unsplash.com/photo-1520975693415-35a8f9c37e3b?auto=format&fit=crop&w=1400&q=80",
    tagline: "Grown vibes. Rooftops. Real connection.",
    bio:
      "Kai is known for bringing people together across music, nightlife, and community mixers. His events feel elevated—like you’re stepping into a scene that was made for you.",
    whyBeuChose:
      "BEU chose Kai for consistency and care. His events spotlight Black creatives, keep the energy welcoming, and create space for networking without the awkwardness.",
    promoterQuote:
      "“The vibe matters—but the people matter more. I’m building rooms where we can recognize each other.”",
    stats: { followers: 21050, eventsHosted: 62, rating: 4.8 },
    socials: { instagram: "@kulturekai", website: "kulturekai.co" },
    upcoming: [
      { title: "Rooftop Vibes", when: "Saturday • 8:30 PM", where: "Shoreditch Roof" },
      { title: "R&B Night", when: "Thursday • 9:00 PM", where: "Soho Lounge" },
      { title: "Creators Mixer", when: "Next Tue • 7:00 PM", where: "South Bank" },
    ],
  },

  berlin: {
    id: "berlin-featured",
    name: "Featured Promoter",
    cityLabel: "Berlin",
    photo:
      "https://images.unsplash.com/photo-1520975680832-6caa3d3be9c0?auto=format&fit=crop&w=1400&q=80",
    tagline: "Spotlight coming soon.",
    bio:
      "We’re building Berlin’s promoter spotlight with care—check back soon.",
    whyBeuChose:
      "Our BEU team is curating the first Berlin selections now.",
    promoterQuote:
      "“Coming soon.”",
    stats: { followers: 0, eventsHosted: 0, rating: 0 },
    socials: {},
    upcoming: [{ title: "No highlights yet", when: "—", where: "—" }],
  },

  amsterdam: {
    id: "ams-featured",
    name: "Featured Promoter",
    cityLabel: "Amsterdam",
    photo:
      "https://images.unsplash.com/photo-1520975681228-7e2db279b109?auto=format&fit=crop&w=1400&q=80",
    tagline: "Spotlight coming soon.",
    bio:
      "We’re building Amsterdam’s promoter spotlight with care—check back soon.",
    whyBeuChose:
      "Our BEU team is curating the first Amsterdam selections now.",
    promoterQuote:
      "“Coming soon.”",
    stats: { followers: 0, eventsHosted: 0, rating: 0 },
    socials: {},
    upcoming: [{ title: "No highlights yet", when: "—", where: "—" }],
  },
};

