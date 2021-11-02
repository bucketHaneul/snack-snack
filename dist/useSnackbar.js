"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _SnackbarContext = _interopRequireDefault(require("./SnackbarContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useSnackbar = function useSnackbar() {
  var _useContext = (0, _react.useContext)(_SnackbarContext["default"]),
      openSnackbar = _useContext.openSnackbar;

  return {
    openSnackbar: openSnackbar
  };
};

var _default = useSnackbar;
exports["default"] = _default;