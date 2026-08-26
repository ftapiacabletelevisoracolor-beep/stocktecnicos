// Service worker mínimo — solo existe para que el navegador considere esta
// página "instalable". No cachea nada todavía (siempre trae la versión
// más nueva de internet), así no hay riesgo de que alguien vea stock viejo
// por un caché desactualizado.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
