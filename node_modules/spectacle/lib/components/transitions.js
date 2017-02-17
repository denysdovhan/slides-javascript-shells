"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _reactTweenState = require("react-tween-state");

var _reactTweenState2 = _interopRequireDefault(_reactTweenState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  propTypes: {
    transition: _react.PropTypes.array,
    transitionDuration: _react.PropTypes.number
  },
  contextTypes: {
    slide: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
  },
  getDefaultProps: function getDefaultProps() {
    return {
      transition: []
    };
  },
  getInitialState: function getInitialState() {
    var transition = this.props.transition;

    var state = {
      z: 1
    };

    if (transition.indexOf("fade") !== -1) {
      state.opacity = 1;
    }

    if (transition.indexOf("zoom") !== -1) {
      state.scale = 1;
    }

    if (transition.indexOf("slide") !== -1) {
      state.left = 0;
    }

    if (transition.indexOf("spin") !== -1) {
      state.x = 0;
    }

    return state;
  },
  routerCallback: function routerCallback(cb, immediate) {
    var _this = this;

    var _props = this.props;
    var transition = _props.transition;
    var transitionDuration = _props.transitionDuration;

    if (transition.length > 0 && immediate !== true) {
      setTimeout(function () {
        return _this.isMounted() && cb();
      }, transitionDuration);
    } else {
      return this.isMounted() && cb();
    }
  },
  componentWillEnter: function componentWillEnter(cb) {
    var _this2 = this;

    var _props2 = this.props;
    var slideIndex = _props2.slideIndex;
    var lastSlide = _props2.lastSlide;
    var transition = _props2.transition;
    var transitionDuration = _props2.transitionDuration;

    var direction = slideIndex > lastSlide;

    this.setState({
      z: 1
    }, function () {

      if (transition.indexOf("fade") !== -1) {
        _this2.tweenState("opacity", {
          easing: _reactTweenState2.default.easingTypes.easeInOutQuad,
          duration: transitionDuration,
          beginValue: 0,
          endValue: 1
        });
      }

      if (transition.indexOf("zoom") !== -1) {
        _this2.tweenState("scale", {
          easing: _reactTweenState2.default.easingTypes.easeInOutQuad,
          duration: transitionDuration,
          beginValue: 0.1,
          endValue: 1
        });
      }

      if (transition.indexOf("slide") !== -1) {
        _this2.tweenState("left", {
          easing: _reactTweenState2.default.easingTypes.easeOutQuad,
          duration: transitionDuration,
          beginValue: direction ? 100 : -100,
          endValue: 0
        });
      }

      if (transition.indexOf("spin") !== -1) {
        _this2.tweenState("x", {
          easing: _reactTweenState2.default.easingTypes.easeOutQuad,
          duration: transitionDuration,
          beginValue: direction ? 90 : -90,
          endValue: 0
        });
      }
    });

    this.routerCallback(cb);
  },
  componentWillAppear: function componentWillAppear(cb) {
    var transition = this.props.transition;

    var state = {
      z: 1
    };

    if (transition.indexOf("fade") !== -1) {
      state.opacity = 1;
    }

    if (transition.indexOf("zoom") !== -1) {
      state.scale = 1;
    }

    if (transition.indexOf("slide") !== -1) {
      state.left = 0;
    }

    if (transition.indexOf("spin") !== -1) {
      state.x = 0;
    }

    this.setState(state);

    this.routerCallback(cb, true);
  },
  componentWillLeave: function componentWillLeave(cb) {
    var _this3 = this;

    var _props3 = this.props;
    var slideIndex = _props3.slideIndex;
    var transition = _props3.transition;
    var transitionDuration = _props3.transitionDuration;

    var slide = this.context.store.getState().route.slide || 0;
    var direction = slideIndex > slide;

    this.setState({
      z: ""
    }, function () {

      if (transition.indexOf("fade") !== -1) {
        _this3.tweenState("opacity", {
          easing: _reactTweenState2.default.easingTypes.easeInOutQuad,
          duration: transitionDuration,
          endValue: 0
        });
      }

      if (transition.indexOf("zoom") !== -1) {
        _this3.tweenState("scale", {
          easing: _reactTweenState2.default.easingTypes.easeInOutQuad,
          duration: transitionDuration,
          endValue: 0.1
        });
      }

      if (transition.indexOf("slide") !== -1) {
        _this3.tweenState("left", {
          easing: _reactTweenState2.default.easingTypes.easeOutQuad,
          duration: transitionDuration,
          endValue: direction ? 100 : -100
        });
      }

      if (transition.indexOf("spin") !== -1) {
        _this3.tweenState("x", {
          easing: _reactTweenState2.default.easingTypes.easeOutQuad,
          duration: transitionDuration,
          endValue: direction ? 90 : -90
        });
      }
    });

    this.routerCallback(cb);
  },
  getTransitionStyles: function getTransitionStyles() {
    var transition = this.props.transition;

    var transformValue = "";
    var styles = {
      zIndex: this.state.z
    };
    if (transition.indexOf("fade") !== -1) {
      styles = Object.assign(styles, {
        opacity: this.getTweeningValue("opacity")
      });
    }
    if (transition.indexOf("zoom") !== -1) {
      transformValue += " scale(" + this.getTweeningValue("scale") + ")";
    }
    if (transition.indexOf("slide") !== -1) {
      transformValue += " translate3d(" + this.getTweeningValue("left") + "%, 0, 0)";
    } else {
      transformValue += " translate3d(0px, 0px, 0px)";
    }
    if (transition.indexOf("spin") !== -1) {
      transformValue += " rotateY(" + this.getTweeningValue("x") + "deg)";
    }
    styles = Object.assign(styles, {
      transform: transformValue
    });
    return styles;
  }
};