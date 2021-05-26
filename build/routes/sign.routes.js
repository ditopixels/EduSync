"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _signController = require("../controllers/sign.controller.js");

var _auth = require("../helpers/auth.js");

var router = (0, _express.Router)();
router.get('/signin', _auth.noIsAuth, _signController.renderLogin);
router.post('/signin', _signController.validationLogin);
router.get('/signup', _signController.renderRegister);
router.post('/signup', _signController.validationRegister);
router.get('/logout', function (req, res) {
  req.logOut();
  res.redirect('/');
});
var _default = router;
exports["default"] = _default;