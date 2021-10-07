"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Red = exports.Default = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Snackbar = _interopRequireDefault(require("./Snackbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Snackbar',
  component: _Snackbar["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_Snackbar["default"], args);
};

var Default = Template.bind({});
exports.Default = Default;
var Red = Template.bind({});
exports.Red = Red;
Default.args = {
  children: '스낵바 메세지'
};
Red.args = {
  children: '빨간 스낵바 메세지',
  styles: {
    backgroundColor: 'red'
  }
};