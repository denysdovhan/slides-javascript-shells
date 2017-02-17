"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _base = require("../utils/base");

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var format = function format(str) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

var CodePane = (0, _radium2.default)(_class = function (_Component) {
  _inherits(CodePane, _Component);

  function CodePane() {
    _classCallCheck(this, CodePane);

    return _possibleConstructorReturn(this, (CodePane.__proto__ || Object.getPrototypeOf(CodePane)).apply(this, arguments));
  }

  _createClass(CodePane, [{
    key: "createMarkup",
    value: function createMarkup() {
      var _props = this.props;
      var source = _props.source;
      var children = _props.children;

      var code = (0, _lodash.isUndefined)(source) || source === "" ? children : source;
      return {
        __html: format(code)
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      return window.Prism && window.Prism.highlightAll();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "pre",
        { className: this.props.className, style: [this.context.styles.components.codePane.pre, _base.getStyles.call(this), this.props.style] },
        _react2.default.createElement("code", {
          className: "language-" + this.props.lang,
          style: this.context.styles.components.codePane.code,
          dangerouslySetInnerHTML: this.createMarkup()
        })
      );
    }
  }]);

  return CodePane;
}(_react.Component)) || _class;

exports.default = CodePane;


CodePane.contextTypes = {
  styles: _react.PropTypes.object
};

CodePane.propTypes = {
  lang: _react.PropTypes.string,
  source: _react.PropTypes.string,
  style: _react.PropTypes.object,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string
};

CodePane.defaultProps = {
  lang: "markup",
  source: ""
};