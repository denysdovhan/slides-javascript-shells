"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Progress = (0, _radium2.default)(_class = function (_Component) {
  _inherits(Progress, _Component);

  function Progress() {
    _classCallCheck(this, Progress);

    return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
  }

  _createClass(Progress, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var type = _props.type;
      var currentSlide = _props.currentSlide;
      var items = _props.items;

      var style = this.context.styles.progress;
      var markup = void 0;
      switch (type) {
        case "none":
          return false;
        case "pacman":
          style = style.pacman;
          markup = _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "div",
              { style: [style.pacman, this.getPointPosition(currentSlide)] },
              _react2.default.createElement("div", { style: [style.pacmanTop, this.getPacmanStyle("Top")] }),
              _react2.default.createElement("div", { style: [style.pacmanBottom, this.getPacmanStyle("Bottom")] })
            ),
            items.map(function (item, i) {
              return _react2.default.createElement("div", {
                style: [style.point, _this2.getPointStyle(i)],
                key: "presentation-progress-" + i
              });
            })
          );
          break;
        case "number":
          style = style.number;
          markup = _react2.default.createElement(
            "div",
            null,
            currentSlide + 1,
            " / ",
            items.length
          );
          break;
        case "bar":
          style = style.bar;
          markup = _react2.default.createElement("div", { style: [style.bar, this.getWidth()] });
          break;
        default:
          return false;
      }
      return _react2.default.createElement(
        "div",
        { style: [style.container] },
        markup
      );
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return {
        width: 100 * this.props.currentSlide / (this.props.items.length - 1) + "%"
      };
    }
  }, {
    key: "getPacmanStyle",
    value: function getPacmanStyle(side) {
      var animationName = "pacman" + side + "Frames" + (this.props.currentSlide % 2 ? "" : "Bis");
      return {
        animation: animationName + " 0.12s linear 10 alternate both"
      };
    }
  }, {
    key: "getPointPosition",
    value: function getPointPosition(i) {
      return {
        top: "-20px",
        left: 5 + 20 * (i - this.props.items.length / 2) + "px"
      };
    }
  }, {
    key: "getPointStyle",
    value: function getPointStyle(i) {
      var style = this.getPointPosition(i);
      if (this.props.currentSlide >= i) {
        style.opacity = 0;
      }

      return style;
    }
  }]);

  return Progress;
}(_react.Component)) || _class;

exports.default = Progress;


Progress.propTypes = {
  items: _react.PropTypes.array,
  currentSlide: _react.PropTypes.number,
  type: _react.PropTypes.oneOf(["pacman", "bar", "number", "none"])
};

Progress.contextTypes = {
  styles: _react.PropTypes.object
};