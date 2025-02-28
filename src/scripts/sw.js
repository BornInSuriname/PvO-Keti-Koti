const CACHE_NAME = "pvoketikoti-v1";
const OFFLINE_FILES = [
    "/",
    "/index.html",
    "/styles/main.css",
    "/scripts/app.js",
    "/assets/images/logo.svg"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(OFFLINE_FILES))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
