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

var Controls = (0, _radium2.default)(_class = function (_Component) {
  _inherits(Controls, _Component);

  function Controls() {
    _classCallCheck(this, Controls);

    return _possibleConstructorReturn(this, (Controls.__proto__ || Object.getPrototypeOf(Controls)).apply(this, arguments));
  }

  _createClass(Controls, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        this.props.currentSlide !== 0 && _react2.default.createElement(
          "button",
          {
            type: "button",
            key: "prev",
            onClick: this.props.onPrev,
            style: this.context.styles.controls.prev
          },
          _react2.default.createElement(
            "svg",
            {
              key: "prevIcon",
              style: this.context.styles.controls.prevIcon,
              width: "32px",
              height: "32px",
              viewBox: "0 0 512 828.586"
            },
            _react2.default.createElement("path", { d: "M512,97.707L414.293,0L0,414.293l414.293,414.293L512,730.88L195.414,414.293L512,97.707z" })
          )
        ),
        this.props.currentSlide < this.props.totalSlides - 1 && _react2.default.createElement(
          "button",
          {
            type: "button",
            key: "next",
            onClick: this.props.onNext,
            style: this.context.styles.controls.next
          },
          _react2.default.createElement(
            "svg",
            {
              key: "nextIcon",
              style: this.context.styles.controls.nextIcon,
              width: "32px",
              height: "32px",
              viewBox: "0 0 512 828.586"
            },
            _react2.default.createElement("path", { d: "M97.707,0L0,97.707l316.586,316.586L0,730.88l97.707,97.706L512,414.293L97.707,0z" })
          )
        )
      );
    }
  }]);

  return Controls;
}(_react.Component)) || _class;

exports.default = Controls;


Controls.propTypes = {
  currentSlide: _react.PropTypes.number,
  totalSlides: _react.PropTypes.number,
  onNext: _react.PropTypes.func,
  onPrev: _react.PropTypes.func
};

Controls.contextTypes = {
  styles: _react.PropTypes.object
};