"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*eslint max-statements:0,complexity:0,no-invalid-this:0*/

var getStyles = exports.getStyles = function getStyles() {
  var _props = this.props;
  var italic = _props.italic;
  var bold = _props.bold;
  var caps = _props.caps;
  var margin = _props.margin;
  var padding = _props.padding;
  var textColor = _props.textColor;
  var textFont = _props.textFont;
  var textSize = _props.textSize;
  var textAlign = _props.textAlign;
  var bgColor = _props.bgColor;
  var bgImage = _props.bgImage;
  var bgDarken = _props.bgDarken;
  var bgSize = _props.bgSize;
  var bgPosition = _props.bgPosition;
  var bgRepeat = _props.bgRepeat;


  var styles = {};

  if (typeof italic === "boolean") {
    styles.fontStyle = italic ? "italic" : "normal";
  }
  if (typeof bold === "boolean") {
    styles.fontWeight = bold ? "bold" : "normal";
  }
  if (typeof caps === "boolean") {
    styles.textTransform = caps ? "uppercase" : "none";
  }
  if (margin) {
    styles.margin = margin;
  }
  if (padding) {
    styles.padding = padding;
  }
  if (textColor) {
    var color = "";
    if (!this.context.styles.colors.hasOwnProperty(textColor)) {
      color = textColor;
    } else {
      color = this.context.styles.colors[textColor];
    }
    styles.color = color;
  }
  if (textFont) {
    var font = "";
    if (!this.context.styles.fonts.hasOwnProperty(textFont)) {
      font = textFont;
    } else {
      font = this.context.styles.fonts[textFont];
    }
    styles.fontFamily = font;
  }
  if (textSize) {
    styles.fontSize = textSize;
  }
  if (textAlign) {
    styles.textAlign = textAlign;
  }
  if (bgColor) {
    var _color = "";
    if (!this.context.styles.colors.hasOwnProperty(bgColor)) {
      _color = bgColor;
    } else {
      _color = this.context.styles.colors[bgColor];
    }
    styles.backgroundColor = _color;
  }
  if (bgImage) {
    if (bgDarken) {
      styles.backgroundImage = "linear-gradient( rgba(0, 0, 0, " + bgDarken + "), rgba(0, 0, 0, " + bgDarken + ") ), url(" + bgImage + ")";
    } else {
      styles.backgroundImage = "url(" + bgImage + ")";
    }
    styles.backgroundSize = bgSize || "cover";
    styles.backgroundPosition = bgPosition || "center center";
    if (bgRepeat) {
      styles.backgroundRepeat = bgRepeat;
    }
  }
  return styles;
};