const CACHE_NAME = "design-review-quiz-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon.svg",
  "./assets/preview.png",
  "./assets/q1-solidworks-vertical-text.png",
  "./assets/q2-text-curve-blank-space.png",
  "./assets/q3-cad-data-unconfirmed.png",
  "./assets/q4-surface-finish-direction.png",
  "./assets/q5-lug-stud-spacer.png",
  "./assets/bakelite-structure.svg",
  "./assets/bakelite-types.svg",
  "./assets/bakelite-drawing-caution.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
