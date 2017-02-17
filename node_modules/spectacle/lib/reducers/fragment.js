"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = require("redux-actions");

var reducer = (0, _reduxActions.handleActions)({
  ADD_FRAGMENT: function ADD_FRAGMENT(state, action) {
    var _action$payload = action.payload;
    var id = _action$payload.id;
    var slide = _action$payload.slide;

    var s = Object.assign({}, state);
    s.fragments[slide] = s.fragments[slide] || {};
    s.fragments[slide][id] = action.payload;
    return s;
  },
  UPDATE_FRAGMENT: function UPDATE_FRAGMENT(state, action) {
    var fragment = action.payload.fragment;

    var s = Object.assign({}, state);
    s.fragments[fragment.slide][fragment.id].visible = action.payload.visible;
    return s;
  }
}, { fragments: {} });

exports.default = reducer;