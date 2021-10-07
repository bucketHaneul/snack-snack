"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styled["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  width: 300px;\n  height: 50px;\n  border-radius: 4px;\n  background-color: #333;\n  color: #fff;\n  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;\n  z-index: 100;\n  position: absolute;\n  bottom: 16px;\n  left: 50%;\n  transform: translateX(-50%);\n\n  ", ";\n\n  @keyframes fade {\n    0% {\n      opacity: 0;\n      bottom: 0;\n    }\n    25% {\n      opacity: 1;\n      bottom: 16px;\n    }\n    50% {\n      opacity: 1;\n      bottom: 16px;\n    }\n    100% {\n      opacity: 0;\n      bottom: 0;\n    }\n  }\n  @-webkit-keyframes fade {\n    0% {\n      opacity: 0;\n      bottom: 0;\n    }\n    25% {\n      opacity: 1;\n      bottom: 16px;\n    }\n    50% {\n      opacity: 1;\n      bottom: 16px;\n    }\n    100% {\n      opacity: 0;\n      bottom: 0;\n    }\n  }\n\n  animation: fade 3s;\n  -webkit-animation: fade 3s;\n"])), function (_ref) {
  var styles = _ref.styles;
  return styles && styles;
});

exports.Container = Container;