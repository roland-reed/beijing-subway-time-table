const withSvgr = require('next-plugin-svgr');
const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
module.exports = withPWA(withSvgr({
  reactStrictMode: true,
  pwa: {
    dest: 'public'
  }
}));
