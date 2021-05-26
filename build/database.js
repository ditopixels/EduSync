"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = require("./config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect(_config.config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(function (db) {
  return console.log('Mongodb is connected to', db.connection.host);
})["catch"](function (e) {
  return console.log(e);
});