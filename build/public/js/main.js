"use strict";

var _input = _interopRequireDefault(require("./components/input.js"));

var _Navigator = _interopRequireDefault(require("./components/Navigator.js"));

var _password = _interopRequireDefault(require("./components/password.js"));

var _file = _interopRequireDefault(require("./file.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var d = document;
d.addEventListener('DOMContentLoaded', function () {
  (0, _input["default"])();
  (0, _password["default"])();
  (0, _Navigator["default"])();
  (0, _file["default"])();
});