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

var Overview = (0, _radium2.default)(_class = function (_Component) {
  _inherits(Overview, _Component);

  function Overview(props) {
    _classCallCheck(this, Overview);

    var _this = _possibleConstructorReturn(this, (Overview.__proto__ || Object.getPrototypeOf(Overview)).call(this, props));

    _this.state = {
      overviewWidth: document.documentElement.clientWidth
    };
    _this.resizeHandler = _this.resizeHandler.bind(_this);
    return _this;
  }

  _createClass(Overview, [{
    key: "_slideClicked",
    value: function _slideClicked(index) {
      this.context.history.replace("/" + this._getHash(index));
    }
  }, {
    key: "_getHash",
    value: function _getHash(slide) {
      var hash = slide;
      if ("id" in this.props.slides[slide].props) {
        hash = this.props.slides[slide].props.id;
      }
      return hash;
    }
  }, {
    key: "_renderSlides",
    value: function _renderSlides() {
      var _this2 = this;

      var slide = this.props.slide;
      var screen = this.state.overviewWidth;
      return this.props.slides.map(function (child, index) {
        var style = {
          position: "relative",
          width: screen / 3,
          height: screen / 3 * 0.7,
          float: "left",
          opacity: index === slide ? 1 : 0.5,
          cursor: "pointer",
          ":hover": {
            opacity: 1
          }
        };
        var el = (0, _react.cloneElement)(child, {
          key: index,
          slideIndex: index,
          export: _this2.props.route.params.indexOf("export") !== -1,
          print: _this2.props.route.params.indexOf("print") !== -1,
          transition: [],
          transitionDuration: 0,
          appearOff: true
        });
        return _react2.default.createElement(
          "div",
          { key: index, style: [style], onClick: _this2._slideClicked.bind(_this2, index) },
          el
        );
      });
    }
  }, {
    key: "resizeHandler",
    value: function resizeHandler() {
      this.setState({
        overviewWidth: this.refs.overview.clientWidth
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resizeHandler();
      window.addEventListener("resize", this.resizeHandler);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.resizeHandler);
    }
  }, {
    key: "render",
    value: function render() {
      var styles = {
        overview: {
          height: "100%",
          width: "100%",
          overflow: "scroll"
        }
      };
      return _react2.default.createElement(
        "div",
        { className: "spectacle-overview", ref: "overview", style: [styles.overview] },
        this._renderSlides()
      );
    }
  }]);

  return Overview;
}(_react.Component)) || _class;

exports.default = Overview;


Overview.propTypes = {
  route: _react.PropTypes.object,
  slides: _react.PropTypes.array,
  slide: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};

Overview.contextTypes = {
  styles: _react.PropTypes.object,
  history: _react.PropTypes.object
};