"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LemonButton = LemonButton;

var _styles = require("./styles");

var _styledComponents = require("styled-components");

var _theme = require("./theme");

var _icon = require("./icon");

var _excluded = ["color", "children", "icon"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LemonButton(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      children = _ref.children,
      icon = _ref.icon,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = {
    primary: _theme.primary,
    secondary: _theme.secondary
  };
  return /*#__PURE__*/React.createElement(_styledComponents.ThemeProvider, {
    theme: theme[color]
  }, /*#__PURE__*/React.createElement(_styles.StyledButton, props, icon && children ? /*#__PURE__*/React.createElement(_styles.ChildrenIconWrapper, null, children, (0, _icon.SetIcon)(icon)) : children));
}