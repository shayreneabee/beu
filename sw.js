const CACHE_NAME = "brent-co-platform-v2";

const OFFLINE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./services/beuSearchService.js",
  "./data/recipes.json",
  "./data/beu-listings.json",
  "./data/beu-community.json",
  "./assets/african-food.jpeg",
  "./assets/american-food.jpeg",
  "./assets/beautiful-chicken.jpeg",
  "./assets/beu-logo.jpg",
  "./assets/brent-co-logo.svg",
  "./assets/cooking-family.jpeg",
  "./assets/find-the-beat-logo.svg",
  "./assets/find-the-beat-mockup.png",
  "./assets/fresh-bread.jpeg",
  "./assets/german-food.jpeg",
  "./assets/indian-food.jpeg",
  "./assets/ingredients.jpeg",
  "./assets/kid-friendly.jpeg",
  "./assets/logo.png",
  "./assets/pasta.jpeg",
  "./assets/recipe-book.jpeg",
  "./assets/second-chance-logo.svg",
  "./assets/second-chance-mockup.png",
  "./assets/tandoori-chicken.jpeg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(OFFLINE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  event.respondWith(
    caches.match(request).then((cached) => {
      const networkFetch = fetch(request)
        .then((response) => {
          if (response && response.ok && new URL(request.url).origin === self.location.origin) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached || caches.match("./index.html"));

      return cached || networkFetch;
    })
  );
});
