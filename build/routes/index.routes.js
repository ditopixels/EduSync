"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _indexController = require("../controllers/index.controller.js");

var router = (0, _express.Router)();
router.get('/', _indexController.renderHome);
router.get('/docs', _indexController.renderDocs);
var _default = router;
exports["default"] = _default;