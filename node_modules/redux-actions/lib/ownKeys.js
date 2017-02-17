'use strict';

exports.__esModule = true;
exports['default'] = ownKeys;

function ownKeys(object) {
  if (typeof Reflect !== 'undefined') {
    return Reflect.ownKeys(object);
  }

  var keys = Object.getOwnPropertyNames(object);

  if (typeof Object.getOwnPropertySymbols === 'function') {
    keys = keys.concat(Object.getOwnPropertySymbols(object));
  }

  return keys;
}

module.exports = exports['default'];