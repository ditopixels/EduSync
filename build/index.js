"use strict";

require("./database.js");

var _app = _interopRequireDefault(require("./app.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].listen(_app["default"].get('port'), function (req, res) {
  console.log('Server on port', _app["default"].get('port'));
});