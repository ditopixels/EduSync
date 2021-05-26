"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema,
    model = _mongoose["default"].model;
var schema = new Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  }
  /*
  AQUI VAN LOS OTROS CAMPOS QUE SE PUEDEN HACER DESPUES DEL REGISTRO
  */

});

var _default = model('School', schema);

exports["default"] = _default;