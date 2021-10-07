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
      setSnackbarMessage = _useContext.setSnackbarMessage,
      isSnackbarOpen = _useContext.isSnackbarOpen,
      setSnackbarOpen = _useContext.setSnackbarOpen;

  var openSnackbar = function openSnackbar(newMessage) {
    setSnackbarMessage(newMessage);
    setSnackbarOpen(true);
  };

  (0, _react.useEffect)(function () {
    if (!isSnackbarOpen) return;
    var intervalId = setTimeout(function () {
      setSnackbarMessage('');
      setSnackbarOpen(false);
    }, 3000);
    return function () {
      return clearInterval(intervalId);
    };
  }, [isSnackbarOpen]);
  return {
    isSnackbarOpen: isSnackbarOpen,
    openSnackbar: openSnackbar
  };
};

var _default = useSnackbar;
exports["default"] = _default;