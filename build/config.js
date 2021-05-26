"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.helpershbs = void 0;
var configDB = {
  MONGODB_HOST: process.env.MONGODB_HOST || "localhost",
  MONGODB_DATABASE: process.env.MONGODB_DB || "a"
};
var helpershbs = {
  ifEquals: function ifEquals(arg1, arg2, options) {
    return arg1 == arg2 ? options.fn(this) : options.inverse(this);
  }
};
exports.helpershbs = helpershbs;
var config = {
  PORT: process.env.PORT || 4000,
  MONGODB_URI: "mongodb://".concat(configDB.MONGODB_HOST, "/").concat(configDB.MONGODB_DATABASE)
};
exports.config = config;