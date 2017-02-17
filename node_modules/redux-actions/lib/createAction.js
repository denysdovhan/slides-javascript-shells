'use strict';

exports.__esModule = true;
exports['default'] = createAction;
function identity(t) {
  return t;
}

function createAction(type, actionCreator, metaCreator) {
  var finalActionCreator = typeof actionCreator === 'function' ? actionCreator : identity;

  return function () {
    var action = {
      type: type,
      payload: finalActionCreator.apply(undefined, arguments)
    };

    if (typeof metaCreator === 'function') action.meta = metaCreator.apply(undefined, arguments);

    return action;
  };
}

module.exports = exports['default'];