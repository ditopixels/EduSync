"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderMiembros = exports.renderDashboard = void 0;

var _Users = _interopRequireDefault(require("../models/Users.js"));

var _School = _interopRequireDefault(require("../models/School.js"));

var _data = require("../data.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var renderDashboard = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var user, school, username, email, rol, name, code, courses, pathC, path, dataDashboard;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Users["default"].findOne({
              _id: req.user._id
            });

          case 2:
            user = _context.sent;
            _context.next = 5;
            return _School["default"].findOne({
              _id: req.user.school
            });

          case 5:
            school = _context.sent;
            username = user.username, email = user.email, rol = user.rol;
            name = school.name, code = school.code;
            courses = ["c1", "c2", "c3", "c4"];
            pathC = req.path.toLowerCase();
            path = pathC.split('/');
            dataDashboard = {
              title: "GikEdu - App",
              contentHeader: {
                partial: function partial() {
                  return 'profile';
                }
              },
              contentRol: {
                partial: function partial() {
                  if (path[2] == 'biblioteca' || path[2] == 'institucion') return "rol/".concat(path[2]);
                  if (path[2]) return "rol/".concat(user.rol, "/").concat(path[2]);
                  return "rol/".concat(user.rol, "/inicio");
                },
                args: {}
              },
              contentMembers: {
                "export": {
                  label: "button",
                  "class": "button-ghost",
                  value: "Exportar"
                },
                "import": {
                  label: "button",
                  "class": "button-ghost",
                  value: "Importar"
                },
                add: {
                  label: "button",
                  "class": "button-ghost",
                  value: "Agregar"
                }
              },
              data: {
                username: username,
                email: email,
                name: name,
                code: code,
                courses: courses,
                rol: rol
              },
              menubtn: true
            };
            dataDashboard.navegator = _data.dashboard.navegator;
            dataDashboard.navegator.forEach(function (el) {
              if (path[2] && el.categorie.toLowerCase() == path[2].toLowerCase()) {
                el["class"] = 'active';
              } else if (el.subCategories) {
                el.subCategories.forEach(function (el) {
                  if (el.subCategorie.toLowerCase() == path[2]) {
                    console.log(el);
                    el["class"] = 'active';
                  } else el["class"] = '';
                });
              } else {
                el["class"] = '';
                if (!path[2]) dataDashboard.navegator[0]["class"] = 'active';
              }
            });
            res.render('user/dashboard', dataDashboard);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function renderDashboard(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.renderDashboard = renderDashboard;

var renderMiembros = function renderMiembros(req, res) {
  res.render('members', {});
};

exports.renderMiembros = renderMiembros;