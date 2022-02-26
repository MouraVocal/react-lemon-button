"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButton = exports.ChildrenIconWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledButton = _styledComponents["default"].button.withConfig({
  displayName: "styles__StyledButton",
  componentId: "sc-129lk57-0"
})(["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');&:hover{background-color:", ";}&:active{background-color:", ";}&:disabled{background-color:", ";color:", ";}font-family:'Inter',sans-serif;font-size:1rem;min-width:311px;width:100%;height:56px;background-color:", ";color:", ";border:none;"], function (props) {
  return props.theme.hoverBackgroundColor;
}, function (props) {
  return props.theme.activeBackgroundColor;
}, function (props) {
  return props.theme.disabledBackgroundColor;
}, function (props) {
  return props.theme.disabledTextColor;
}, function (props) {
  return props.theme.backgroundColor;
}, function (props) {
  return props.theme.textColor;
});

exports.StyledButton = StyledButton;

var ChildrenIconWrapper = _styledComponents["default"].div.withConfig({
  displayName: "styles__ChildrenIconWrapper",
  componentId: "sc-129lk57-1"
})(["display:flex;flex-direction:row;justify-content:space-between;padding:0 16px;"]);

exports.ChildrenIconWrapper = ChildrenIconWrapper;