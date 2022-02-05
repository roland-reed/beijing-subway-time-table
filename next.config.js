const withSvgr = require('next-plugin-svgr');
// const withPWA = require('next-pwa');
// const cache = require('next-pwa/cache');
const AssetsPlugin = require('assets-webpack-plugin');
const generateSW = require('./script/generate-sw');

/** @type {import('next').NextConfig} */
module.exports = withSvgr({
  reactStrictMode: true,
  // pwa: {
  //   dest: 'public',
  //   disable: process.env.NODE_ENV !== 'production',
  //   directoryIndex: '/',
  //   runtimeCaching: [
  //     {
  //       urlPattern: /^\/$/,
  //       handler: 'StaleWhileRevalidate',
  //       options: {
  //         cacheName: 'homepage',
  //         expiration: {
  //           maxEntries: 4,
  //           maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
  //         },
  //       },
  //     },
  //     ...cache,
  //   ],
  // },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new AssetsPlugin({
          processOutput(assets) {
            generateSW(assets);
            return JSON.stringify(assets);
          },
        }),
      );
    }

    return config;
  },
});
