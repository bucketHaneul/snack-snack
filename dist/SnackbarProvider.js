"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SnackbarContext = _interopRequireDefault(require("./SnackbarContext"));

var _useSnackbarProvider2 = _interopRequireDefault(require("./useSnackbarProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SnackbarProvider = function SnackbarProvider(_ref) {
  var children = _ref.children,
      customStyles = _ref.customStyles;

  var _useSnackbarProvider = (0, _useSnackbarProvider2["default"])(),
      Snackbar = _useSnackbarProvider.Snackbar,
      openSnackbar = _useSnackbarProvider.openSnackbar;

  var store = {
    openSnackbar: openSnackbar
  };
  return /*#__PURE__*/_react["default"].createElement(_SnackbarContext["default"].Provider, {
    value: store
  }, children, /*#__PURE__*/_react["default"].createElement(Snackbar, {
    customStyles: customStyles
  }));
};

SnackbarProvider.propTypes = {
  children: _propTypes["default"].node.isRequired,
  customStyles: _propTypes["default"].object
};
SnackbarProvider.defaultProps = {
  customStyles: {}
};
var _default = SnackbarProvider;
exports["default"] = _default;