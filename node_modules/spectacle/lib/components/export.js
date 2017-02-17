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

var Export = (0, _radium2.default)(_class = function (_Component) {
  _inherits(Export, _Component);

  function Export() {
    _classCallCheck(this, Export);

    return _possibleConstructorReturn(this, (Export.__proto__ || Object.getPrototypeOf(Export)).apply(this, arguments));
  }

  _createClass(Export, [{
    key: "_renderSlides",
    value: function _renderSlides() {
      var _this2 = this;

      return this.props.slides.map(function (child, index) {
        return (0, _react.cloneElement)(child, {
          key: index,
          slideIndex: index,
          export: _this2.props.route.params.indexOf("export") !== -1,
          print: _this2.props.route.params.indexOf("print") !== -1,
          transition: [],
          transitionDuration: 0
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var styles = {
        export: {
          height: "100%",
          width: "100%"
        }
      };
      return _react2.default.createElement(
        "div",
        { className: "spectacle-export", style: [styles.export] },
        this._renderSlides()
      );
    }
  }]);

  return Export;
}(_react.Component)) || _class;

exports.default = Export;


Export.propTypes = {
  slides: _react.PropTypes.array,
  route: _react.PropTypes.object
};

Export.contextTypes = {
  styles: _react.PropTypes.object
};