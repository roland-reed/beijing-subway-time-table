const withSvgr = require('next-plugin-svgr');
const withPWA = require('next-pwa');
const cache = require('next-pwa/cache');

/** @type {import('next').NextConfig} */
module.exports = withPWA(withSvgr({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching: [
      {
        urlPattern: /\//,
        handler: 'CacheFirst',
        options: {
          cacheName: 'homepage',
          expiration: {
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
          }
        },
      },
      ...cache
    ]
  }
}));
