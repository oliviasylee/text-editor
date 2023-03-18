const { warmStrategyCache } = require('workbox-recipes');
const { CacheFirst, StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

// Set up page cache
const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// Implement asset caching
registerRoute(
  // Register route for assets - style, script, and worke
  ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
  // Use a StaleWhileRevalidate strategy to cache and serve assets
  new StaleWhileRevalidate({
    cacheName: 'asset-cache',
    plugins: [
      // Only cache responses with a 0 or 200 status code
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);