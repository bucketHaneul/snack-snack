"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Snackbar = require("./Snackbar.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Snackbar = function Snackbar(_ref) {
  var children = _ref.children,
      styles = _ref.styles;
  return /*#__PURE__*/_react["default"].createElement(_Snackbar.Container, {
    styles: styles
  }, children);
};

Snackbar.propTypes = {
  children: _propTypes["default"].string.isRequired,
  styles: _propTypes["default"].object
};
Snackbar.defaultProps = {
  styles: {}
};
var _default = Snackbar;
exports["default"] = _default;