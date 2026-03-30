// Dummy Service Worker to silence 404 console errors.
// This is not used by the application but stops the browser from logging 404s.
self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('activate', () => {
    // Clean up or simple activation logic
});
