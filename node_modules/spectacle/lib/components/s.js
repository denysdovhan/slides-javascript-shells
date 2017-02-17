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

var S = (0, _radium2.default)(_class = function (_Component) {
  _inherits(S, _Component);

  function S() {
    _classCallCheck(this, S);

    return _possibleConstructorReturn(this, (S.__proto__ || Object.getPrototypeOf(S)).apply(this, arguments));
  }

  _createClass(S, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var type = _props.type;
      var style = _props.style;
      var children = _props.children;

      var styles = {};
      if (type.indexOf("strikethrough") !== -1) {
        styles = Object.assign(styles, { textDecoration: "line-through" });
      }
      if (type.indexOf("underline") !== -1) {
        styles = Object.assign(styles, { textDecoration: "underline" });
      }
      if (type.indexOf("bold") !== -1) {
        styles = Object.assign(styles, { fontWeight: "bold" });
      }
      if (type.indexOf("italic") !== -1) {
        styles = Object.assign(styles, { fontStyle: "italic" });
      }
      return _react2.default.createElement(
        "span",
        { className: this.props.className, style: [styles, this.context.styles.components.s[type], style] },
        children
      );
    }
  }]);

  return S;
}(_react.Component)) || _class;

exports.default = S;


S.propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  style: _react.PropTypes.object,
  type: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array])
};

S.contextTypes = {
  styles: _react.PropTypes.object
};