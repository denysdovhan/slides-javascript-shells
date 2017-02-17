"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactTweenState = require("react-tween-state");

var _reactTweenState2 = _interopRequireDefault(_reactTweenState);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Appear = _react2.default.createClass({
  displayName: "Appear",

  mixins: [_reactTweenState2.default.Mixin],
  propTypes: {
    children: _react.PropTypes.node,
    style: _react.PropTypes.object,
    route: _react.PropTypes.object
  },
  contextTypes: {
    export: _react.PropTypes.bool,
    overview: _react.PropTypes.bool,
    slide: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
  },
  getInitialState: function getInitialState() {
    return {
      active: false,
      opacity: this.props.route.params.indexOf("export") !== -1 || this.props.route.params.indexOf("overview") !== -1 ? 1 : 0
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var _this = this;

    var state = nextProps.fragment;
    var slide = this.props.route.slide;
    var fragment = (0, _reactDom.findDOMNode)(this.refs.fragment);
    var key = _lodash2.default.findKey(state.fragments[slide], {
      "id": parseInt(fragment.dataset.fid)
    });
    if (slide in state.fragments && state.fragments[slide].hasOwnProperty(key)) {
      this.setState({
        active: state.fragments[slide][key].visible
      }, function () {
        var endVal = _this.state.active ? 1 : 0;
        if (_this.props.route.params.indexOf("export") !== -1 || _this.props.route.params.indexOf("overview") !== -1) {
          endVal = 1;
        }
        _this.tweenState("opacity", {
          easing: _reactTweenState2.default.easingTypes.easeInOutQuad,
          duration: 300,
          endValue: endVal
        });
      });
    }
  },
  render: function render() {
    var styles = {
      opacity: this.getTweeningValue("opacity")
    };
    var child = _react2.default.Children.only(this.props.children);
    return _react2.default.cloneElement(child, {
      style: Object.assign({}, this.props.style, styles),
      className: "fragment",
      ref: "fragment"
    });
  }
});

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(Appear);