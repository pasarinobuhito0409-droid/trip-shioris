const CACHE_NAME = "design-review-quiz-v12";
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
  "./assets/bakelite-drawing-caution.svg",
  "./assets/bakelite-real-visual.png",
  "./assets/bakelite-q1-real.png",
  "./assets/bakelite-q2-real.png",
  "./assets/bakelite-q3-real.png",
  "./assets/bakelite-q1-hd.png",
  "./assets/bakelite-q2-hd.png",
  "./assets/bakelite-q3-hd.png",
  "./assets/bakelite-real-photo-strip.png",
  "./assets/bakelite-q1-new-material.png",
  "./assets/bakelite-q2-new-types.png",
  "./assets/bakelite-q3-new-drawing.png",
  "./assets/q20260626-pin-delivery.png",
  "./assets/q20260626-paint-code.png",
  "./assets/q20260626-dic-g298.png",
  "./assets/q20260626-approx-color.png",
  "./assets/q20260626-visual-rule.png",
  "./assets/q20260629-receptacle-assembled-plug-attached.png",
  "./assets/q20260629-ok-ng-plug-attached.png",
  "./assets/q20260629-drawing-note-receptacle-plug.png",
  "./assets/q20260629-plug-vs-receptacle-identify.png",
  "./assets/q20260629-plug-motion-base.png",
  "./assets/q20260629-plug-motion-step2.png",
  "./assets/q20260629-plug-motion-step3.png"
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
  if (event.request.mode === "navigate" || event.request.destination === "document") {
    event.respondWith(fetch(event.request).catch(() => caches.match("./index.html")));
    return;
  }
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
