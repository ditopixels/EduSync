"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _dashboardController = require("../controllers/dashboard.controller.js");

var _auth = require("../helpers/auth.js");

var router = (0, _express.Router)();
router.get('/App', _auth.isAuth, _dashboardController.renderDashboard);
router.get('/App/inicio', function (req, res) {
  return res.redirect('/App');
});
router.get('/App/biblioteca', _auth.isAuth, _dashboardController.renderDashboard);
router.get('/App/documentos', _auth.isAuth, _dashboardController.renderDashboard);
router.get('/App/pagina', _auth.isAuth, _dashboardController.renderDashboard);
router.get('/App/configuracion', _auth.isAuth, _dashboardController.renderDashboard);
router.get('/App/miembros', _auth.isAuth, _dashboardController.renderDashboard);
var _default = router;
exports["default"] = _default;