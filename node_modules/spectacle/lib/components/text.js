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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = (0, _radium2.default)(_class = function (_Component) {
  _inherits(Text, _Component);

  function Text() {
    _classCallCheck(this, Text);

    var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this));

    _this.resize = _this.resize.bind(_this);
    _this.state = {
      scale: 1,
      height: 16
    };
    return _this;
  }

  _createClass(Text, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resize();
      window.addEventListener("load", this.resize);
      window.addEventListener("resize", this.resize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("load", this.resize);
      window.removeEventListener("resize", this.resize);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      this.resize();
    }
  }, {
    key: "resize",
    value: function resize() {
      if (this.props.fit) {
        var text = this.refs.text;
        var container = this.refs.container;
        text.style.display = "inline-block";
        var scale = container.offsetWidth / text.offsetWidth;
        var height = text.offsetHeight * scale;
        text.style.display = "block";
        this.setState({
          scale: scale,
          height: height
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var lineHeight = _props.lineHeight;
      var fit = _props.fit;
      var style = _props.style;
      var children = _props.children;

      var styles = {
        container: {
          display: "block",
          width: "100%",
          height: this.state.height
        },
        text: {
          fontSize: 16,
          display: "block",
          margin: "0",
          padding: "0",
          lineHeight: lineHeight,
          transform: "scale(" + this.state.scale + ")",
          transformOrigin: "center top"
        },
        nonFit: {
          lineHeight: lineHeight
        }
      };
      return fit ? _react2.default.createElement(
        "div",
        {
          className: this.props.className,
          ref: "container",
          style: [this.context.styles.components.text, _base.getStyles.call(this), styles.container]
        },
        _react2.default.createElement(
          "span",
          {
            ref: "text",
            style: [styles.text, style]
          },
          children
        )
      ) : _react2.default.createElement(
        "p",
        { className: this.props.className, style: [this.context.styles.components.text, _base.getStyles.call(this), styles.nonFit, style] },
        children
      );
    }
  }]);

  return Text;
}(_react.Component)) || _class;

exports.default = Text;


Text.defaultProps = {
  lineHeight: 1
};

Text.propTypes = {
  className: _react.PropTypes.string,
  fit: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  lineHeight: _react.PropTypes.number,
  style: _react.PropTypes.object
};

Text.contextTypes = {
  styles: _react.PropTypes.object
};