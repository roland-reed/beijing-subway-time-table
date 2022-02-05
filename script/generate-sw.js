const path = require('path');
const fs = require('fs');

const SW_PATH = path.join(__dirname, 'sw.js');
const SW_DEST_PATH = path.join(__dirname, '..', 'public', 'sw.js');
const __ASSETS__ = '__ASSETS__';
const BUILD_ID = '__BUILD_ID__';

function toArray(obj) {
  if (typeof obj === 'string') {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(toArray);
  }

  return Object.values(obj).map(toArray);
}

module.exports = function (assets) {
  // const buildID = fs.readFileSync(path.join(__dirname, '..', '.next', 'BUILD_ID'), 'utf8');
  const buildID = Math.random().toString().slice(2, 10);
  const swContent = fs.readFileSync(SW_PATH, 'utf8');
  const assetsArray = toArray(assets)
    .flat(Infinity)
    .map(path.normalize)
    .filter((url) => url.includes('/static'));

  fs.writeFileSync(SW_DEST_PATH, swContent.replace(__ASSETS__, JSON.stringify(assetsArray)).replace(BUILD_ID, buildID));
};
