"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTweenState = require("react-tween-state");

var _reactTweenState2 = _interopRequireDefault(_reactTweenState);

var _base = require("../utils/base");

var _transitions = require("./transitions");

var _transitions2 = _interopRequireDefault(_transitions);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _actions = require("../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slide = _react2.default.createClass({
  displayName: "Slide",
  mixins: [_reactTweenState2.default.Mixin, _transitions2.default],
  getDefaultProps: function getDefaultProps() {
    return {
      align: "center center",
      presenterStyle: {},
      style: {},
      viewerScaleMode: false
    };
  },

  propTypes: {
    align: _react.PropTypes.string,
    className: _react.PropTypes.string,
    dispatch: _react.PropTypes.func,
    hash: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    presenterStyle: _react.PropTypes.object,
    style: _react.PropTypes.object,
    maxHeight: _react.PropTypes.number,
    maxWidth: _react.PropTypes.number,
    margin: _react.PropTypes.number,
    children: _react.PropTypes.node,
    notes: _react.PropTypes.any,
    slideIndex: _react.PropTypes.number,
    lastSlide: _react.PropTypes.number,
    export: _react.PropTypes.bool,
    print: _react.PropTypes.bool,
    viewerScaleMode: _react.PropTypes.bool
  },
  contextTypes: {
    styles: _react.PropTypes.object,
    export: _react.PropTypes.bool,
    print: _react.PropTypes.object,
    overview: _react.PropTypes.bool,
    store: _react.PropTypes.object
  },
  getInitialState: function getInitialState() {
    return {
      zoom: 1,
      contentScale: 1
    };
  },
  setZoom: function setZoom() {
    var mobile = window.matchMedia("(max-width: 628px)").matches;
    var content = this.refs.content;
    if (content) {
      var zoom = this.props.viewerScaleMode ? 1 : content.offsetWidth / 1000;

      var contentScaleY = content.parentNode.offsetHeight / 700;
      var contentScaleX = this.props.viewerScaleMode ? content.parentNode.offsetWidth / 1000 : content.parentNode.offsetWidth / 700;
      var minScale = Math.min(contentScaleY, contentScaleX);

      var contentScale = minScale < 1 ? minScale : 1;
      if (mobile && this.props.viewerScaleMode !== true) {
        contentScale = 1;
      }

      this.setState({
        zoom: zoom > 0.6 ? zoom : 0.6,
        contentScale: contentScale
      });
    }
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    this.setZoom();
    var slide = this.refs.slide;
    var frags = slide.querySelectorAll(".fragment");
    if (frags && frags.length && !this.context.overview) {
      Array.prototype.slice.call(frags, 0).forEach(function (frag, i) {
        frag.dataset.fid = i;
        return _this.props.dispatch && _this.props.dispatch((0, _actions.addFragment)({
          slide: _this.props.hash,
          id: i,
          visible: _this.props.lastSlide > _this.props.slideIndex
        }));
      });
    }
    window.addEventListener("load", this.setZoom);
    window.addEventListener("resize", this.setZoom);
  },
  componentWillUnmount: function componentWillUnmount() {
    window.removeEventListener("resize", this.setZoom);
  },
  render: function render() {
    var _props = this.props;
    var align = _props.align;
    var presenterStyle = _props.presenterStyle;
    var children = _props.children;

    var printStyles = this.props.print ? {
      backgroundColor: "white",
      backgroundImage: "none"
    } : {};
    var overViewStyles = {
      inner: {
        flexDirection: "column"
      },
      content: {
        width: "100%"
      }
    };
    var styles = {
      outer: _extends({
        position: this.props.export ? "relative" : "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        overflow: "hidden",
        backgroundColor: this.context.styles.global.body.background ? this.context.styles.global.body.background : ""
      }, this.props.style),
      inner: {
        display: "flex",
        position: "relative",
        flex: 1,
        alignItems: align ? align.split(" ")[1] : "center",
        justifyContent: align ? align.split(" ")[0] : "center"
      },
      content: {
        flex: 1,
        maxHeight: this.props.maxHeight || 700,
        maxWidth: this.props.maxWidth || 1000,
        transform: "scale(" + this.state.contentScale + ")",
        padding: this.state.zoom > 0.6 ? this.props.margin || 40 : 10
      }
    };

    document.documentElement.style.fontSize = 16 * this.state.zoom + "px";

    return _react2.default.createElement(
      "div",
      { className: "spectacle-slide",
        ref: "slide",
        style: [styles.outer, _base.getStyles.call(this), this.getTransitionStyles(), printStyles, presenterStyle]
      },
      _react2.default.createElement(
        "div",
        { style: [styles.inner, this.context.overview && overViewStyles.inner] },
        _react2.default.createElement(
          "div",
          { ref: "content",
            className: this.props.className + " spectacle-content",
            style: [styles.content, this.context.styles.components.content, this.context.overview && overViewStyles.content]
          },
          children
        )
      )
    );
  }
});

exports.default = (0, _radium2.default)(Slide);