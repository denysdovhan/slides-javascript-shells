"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var startTime = function startTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours %= 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0 " + minutes : minutes;
  seconds = seconds < 10 ? "0 " + seconds : seconds;
  var strTime = hours + " : " + minutes + " : " + seconds + " " + ampm;
  return strTime;
};

var Presenter = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Presenter, _Component);

  _createClass(Presenter, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        updateNotes: this.updateNotes.bind(this)
      };
    }
  }, {
    key: "getCurrentSlide",
    value: function getCurrentSlide() {
      return this.context.store.getState().route.slide;
    }
  }, {
    key: "updateNotes",
    value: function updateNotes(newNotes) {
      var notes = Object.assign({}, this.state.notes);
      notes[this.getCurrentSlide()] = newNotes;

      this.setState({
        notes: notes
      });
    }
  }]);

  function Presenter(props) {
    _classCallCheck(this, Presenter);

    var _this = _possibleConstructorReturn(this, (Presenter.__proto__ || Object.getPrototypeOf(Presenter)).call(this));

    _this.state = {
      notes: {},
      time: startTime(new Date())
    };
    return _this;
  }

  _createClass(Presenter, [{
    key: "_renderMainSlide",
    value: function _renderMainSlide() {
      var _props = this.props;
      var slides = _props.slides;
      var slide = _props.slide;
      var hash = _props.hash;
      var lastSlide = _props.lastSlide;

      var child = slides[slide];
      var presenterStyle = {
        position: "relative"
      };
      return (0, _react.cloneElement)(child, {
        dispatch: this.props.dispatch,
        key: slide,
        hash: hash,
        export: this.props.route.params.indexOf("export") !== -1,
        print: this.props.route.params.indexOf("print") !== -1,
        slideIndex: slide,
        lastSlide: lastSlide,
        transition: [],
        transitionDuration: 0,
        presenterStyle: presenterStyle
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.time = setInterval(function () {
        _this2.setState({
          time: startTime(new Date())
        });
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.time);
    }
  }, {
    key: "_renderNextSlide",
    value: function _renderNextSlide() {
      var _props2 = this.props;
      var slides = _props2.slides;
      var slide = _props2.slide;
      var lastSlide = _props2.lastSlide;

      var presenterStyle = {
        position: "relative"
      };
      var endStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        margin: 0,
        color: "white"
      };
      var child = slides[parseInt(slide) + 1];
      return child ? (0, _react.cloneElement)(child, {
        dispatch: this.props.dispatch,
        export: this.props.route.params.indexOf("export") !== -1,
        print: this.props.route.params.indexOf("print") !== -1,
        key: slide + 1,
        hash: child.props.id || slide + 1,
        slideIndex: slide + 1,
        lastSlide: lastSlide,
        transition: [],
        transitionDuration: 0,
        presenterStyle: presenterStyle,
        appearOff: true
      }) : _react2.default.createElement(
        "h1",
        { style: [endStyle] },
        "END"
      );
    }
  }, {
    key: "_renderNotes",
    value: function _renderNotes() {
      var notes;
      var currentSlide = this.getCurrentSlide();

      if (this.state.notes[currentSlide]) {
        notes = this.state.notes[currentSlide];
      } else {
        var child = this.props.slides[this.props.slide];
        notes = child.props.notes;
      }

      if (!notes) {
        return false;
      }

      if (typeof notes === "string") {
        return _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: notes } });
      }
      return _react2.default.createElement(
        "div",
        null,
        notes
      );
    }
  }, {
    key: "render",
    value: function render() {
      var styles = {
        presenter: {
          height: "100%",
          width: "100%",
          display: "flex",
          flex: 1,
          flexDirection: "column"
        },
        header: {
          position: "absolute",
          display: "block",
          color: "white",
          width: "100%",
          height: "20%",
          textAlign: "center",
          padding: "20px 50px"
        },
        slideInfo: {
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
          float: "left",
          margin: 0,
          lineHeight: 1,
          display: "inline-block",
          fontSize: 28
        },
        clock: {
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
          float: "right",
          margin: 0,
          lineHeight: 1,
          display: "inline-block",
          fontSize: 28
        },
        preview: {
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          flex: 1
        },
        main: {
          display: "inline-block",
          width: "50%",
          height: "60%",
          border: "2px solid white",
          padding: 20,
          margin: 20,
          position: "relative"
        },
        next: {
          display: "inline-block",
          width: "40%",
          height: "50%",
          border: "2px solid white",
          padding: 20,
          margin: 20,
          position: "relative"
        },
        notes: {
          position: "absolute",
          display: "block",
          color: "white",
          width: "100%",
          height: "20%",
          bottom: "0px",
          textAlign: "left",
          padding: "20px 50px",
          columnCount: "2",
          fontSize: "0.8em"
        }
      };
      return _react2.default.createElement(
        "div",
        { className: "spectacle-presenter", style: [styles.presenter] },
        _react2.default.createElement(
          "div",
          { style: styles.header },
          _react2.default.createElement(
            "h2",
            { style: styles.slideInfo },
            "Slide ",
            this.props.slide + 1,
            " of ",
            this.props.slides.length
          ),
          _react2.default.createElement(
            "h2",
            { style: styles.clock },
            this.state.time
          )
        ),
        _react2.default.createElement(
          "div",
          { style: styles.preview },
          _react2.default.createElement(
            "div",
            { className: "spectacle-presenter-main", style: [styles.main] },
            this._renderMainSlide()
          ),
          _react2.default.createElement(
            "div",
            { className: "spectacle-presenter-next", style: [styles.next] },
            this._renderNextSlide()
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "spectacle-presenter-notes", style: [styles.notes] },
          this._renderNotes()
        )
      );
    }
  }]);

  return Presenter;
}(_react.Component), _class2.childContextTypes = {
  updateNotes: _react.PropTypes.func
}, _temp)) || _class;

exports.default = Presenter;


Presenter.propTypes = {
  dispatch: _react.PropTypes.func,
  route: _react.PropTypes.object,
  lastSlide: _react.PropTypes.number,
  hash: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  slides: _react.PropTypes.array,
  slide: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};

Presenter.contextTypes = {
  styles: _react.PropTypes.object,
  store: _react.PropTypes.object.isRequired
};