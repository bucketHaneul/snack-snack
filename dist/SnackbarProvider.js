"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SnackbarContext = _interopRequireDefault(require("./SnackbarContext"));

var _Snackbar = _interopRequireDefault(require("./Snackbar/Snackbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SnackbarProvider = function SnackbarProvider(_ref) {
  var children = _ref.children,
      customStyles = _ref.customStyles;

  var _useState = (0, _react.useState)('원하는 메시지를 입력하세요!'),
      _useState2 = _slicedToArray(_useState, 2),
      snackbarMessage = _useState2[0],
      setSnackbarMessage = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isSnackbarOpen = _useState4[0],
      setSnackbarOpen = _useState4[1];

  var store = {
    snackbarMessage: snackbarMessage,
    setSnackbarMessage: setSnackbarMessage,
    isSnackbarOpen: isSnackbarOpen,
    setSnackbarOpen: setSnackbarOpen
  };

  var SnackbarPortal = function SnackbarPortal(_ref2) {
    var children = _ref2.children;
    return /*#__PURE__*/_reactDom["default"].createPortal(children, document.getElementById('snackbar'));
  };

  var Snackbar = function Snackbar() {
    return /*#__PURE__*/_react["default"].createElement(SnackbarPortal, null, /*#__PURE__*/_react["default"].createElement(_Snackbar["default"], {
      styles: customStyles
    }, snackbarMessage));
  };

  return /*#__PURE__*/_react["default"].createElement(_SnackbarContext["default"].Provider, {
    value: store
  }, children, isSnackbarOpen && /*#__PURE__*/_react["default"].createElement(Snackbar, null));
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