"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _createHashHistory = require("history/lib/createHashHistory");

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

var _default = require("../themes/default");

var _default2 = _interopRequireDefault(_default);

var _context = require("./context");

var _context2 = _interopRequireDefault(_context);

var _actions = require("../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var history = (0, _createHashHistory2.default)();

var Controller = (_temp = _class = function (_Component) {
  _inherits(Controller, _Component);

  function Controller(props) {
    _classCallCheck(this, Controller);

    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this, props));

    _this.state = {
      print: false
    };
    _this.history = props.history || history;
    return _this;
  }

  _createClass(Controller, [{
    key: "_updateRoute",
    value: function _updateRoute(location) {
      var _this2 = this;

      this.setState({
        print: location.search.indexOf("print") !== -1
      }, function () {
        _this2.props.store.dispatch((0, _actions.updateRoute)(location));
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.unlisten = this.history.listen(this._updateRoute.bind(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unlisten();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props !== nextProps || this.state !== nextState;
    }
  }, {
    key: "render",
    value: function render() {
      var styles = this.props.theme ? this.props.theme : (0, _default2.default)();
      return _react2.default.createElement(
        _context2.default,
        {
          store: this.props.store,
          history: this.history,
          styles: this.state.print ? styles.print : styles.screen
        },
        this.props.children
      );
    }
  }]);

  return Controller;
}(_react.Component), _class.propTypes = {
  theme: _react.PropTypes.object,
  children: _react.PropTypes.node,
  store: _react.PropTypes.object,
  history: _react.PropTypes.object
}, _temp);
exports.default = Controller;