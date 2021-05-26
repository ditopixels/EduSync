"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noIsAuth = exports.isAuth = void 0;

var isAuth = function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  req.flash('error_msg', 'Primero inicie sesión por favor');
  res.redirect('/signin');
};

exports.isAuth = isAuth;

var noIsAuth = function noIsAuth(req, res, next) {
  if (!req.isAuthenticated()) {
    return next();
  }

  res.redirect('/app');
};

exports.noIsAuth = noIsAuth;