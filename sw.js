const CACHE_NAME = 'nak-makan-apa-v2';
const urlsToCache = [
  './',
  './index.html',
  './add.html',
  './list.html',
  './review.html',
  './room.html',
  './view.html',
  './icon.svg',
  './manifest.json'
];

self.addEventListener('install', event => {
  self.skipWaiting(); // Force activate new service worker instantly
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName); // Delete v1 cache
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // NETWORK FIRST, Fallback to Cache
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // If we got a valid response, cache it for offline use
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));
        }
        return response;
      })
      .catch(() => {
        // If offline, return the cached version
        return caches.match(event.request);
      })
  );
});
