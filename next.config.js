const withSvgr = require('next-plugin-svgr');
const withPWA = require('next-pwa');
const cache = require('next-pwa/cache');

/** @type {import('next').NextConfig} */
module.exports = withPWA(
  withSvgr({
    reactStrictMode: true,
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV !== 'production',
      directoryIndex: '/',
      runtimeCaching: [
        {
          urlPattern: /^\/$/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'homepage',
            expiration: {
              maxEntries: 4,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
            },
          },
        },
        ...cache,
      ],
    },
  }),
);
