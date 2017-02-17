"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = require("redux-actions");

var reducer = (0, _reduxActions.handleActions)({
  UPDATE_ROUTE: function UPDATE_ROUTE(state, action) {
    return Object.assign({}, {
      slide: action.payload.pathname.replace(/\//g, ""),
      params: action.payload.search.replace("?", "").split("&")
    });
  }
}, { slide: 0, params: [] });

exports.default = reducer;