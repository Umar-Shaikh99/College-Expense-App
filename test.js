"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reactNative = require("react-native");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

// import './globals.css';

var App = function App() {
  return _react2["default"].createElement(
    _reactNative.View,
    { className: "bg-red-500 flex-1 justify-center items-center" },
    _react2["default"].createElement(
      _reactNative.Text,
      { style: { color: 'red', fontSize: 24, fontWeight: 'bold' } },
      "Hello, Umar Shaikh!"
    )
  );
};

exports["default"] = App;
module.exports = exports["default"];
