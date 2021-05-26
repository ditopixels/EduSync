"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderDocs = exports.renderHome = void 0;
var rol = 'student';

var renderHome = function renderHome(req, res) {
  res.render('user/home', {
    title: 'GikEdu',
    contentHeader: {
      partial: function partial() {
        return "button";
      },
      args: {
        label: "a",
        value: "Inicia Sesión",
        "class": "button",
        url: "/signin"
      }
    },
    contentOptions: {
      partial: function partial() {
        return "rol/".concat(rol);
      }
    }
  });
  console.log(req);
};

exports.renderHome = renderHome;

var renderDocs = function renderDocs(req, res) {
  return res.render('user/docs');
};

exports.renderDocs = renderDocs;