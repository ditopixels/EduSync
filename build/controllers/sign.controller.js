"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validationRegister = exports.renderRegister = exports.validationLogin = exports.renderLogin = void 0;

var _Users = _interopRequireDefault(require("../models/Users.js"));

var _School = _interopRequireDefault(require("../models/School.js"));

var _connectFlash = _interopRequireDefault(require("connect-flash"));

var _passport = _interopRequireDefault(require("passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var renderLogin = function renderLogin(req, res) {
  return res.render('sign/login', {
    title: "GikEdu - Inicia sesión",
    contentHeader: {
      partial: function partial() {
        return 'button';
      },
      args: {
        label: 'a',
        "class": 'button-ghost',
        url: '/',
        value: 'Regresar'
      }
    }
  });
};

exports.renderLogin = renderLogin;

var validationLogin = _passport["default"].authenticate('local', {
  successRedirect: '/App',
  failureRedirect: '/signin',
  failureFlash: true
});

exports.validationLogin = validationLogin;

var renderRegister = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", res.render('sign/register', {
              title: "GikEdu - Registro",
              contentHeader: {
                partial: function partial() {
                  return 'button';
                },
                args: {
                  label: 'a',
                  "class": 'button-ghost',
                  url: '/',
                  value: 'Regresar'
                }
              }
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function renderRegister(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.renderRegister = renderRegister;

var validationRegister = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, name, code, username, password, confirm_password, email, errors, emailUser, isCode, newSchool, newUser;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, code = _req$body.code, username = _req$body.username, password = _req$body.password, confirm_password = _req$body.confirm_password, email = _req$body.email;
            errors = [];

            if (password != confirm_password) {
              errors.push({
                text: 'Las contraseñas no coinciden'
              });
            }

            if (!password.length > 0) {
              errors.push({
                text: 'El campo esta vacio'
              });
            }

            if (password <= 4) {
              errors.push({
                text: 'La contraseña es corta, digite una mas larga'
              });
            }

            console.log(req.body);
            console.log(errors);

            if (!errors.length) {
              _context2.next = 11;
              break;
            }

            res.render('sign/register', {
              errors: errors,
              username: username,
              email: email,
              password: password,
              confirm_password: confirm_password
            });
            _context2.next = 28;
            break;

          case 11:
            _context2.next = 13;
            return _Users["default"].findOne({
              email: email
            });

          case 13:
            emailUser = _context2.sent;
            _context2.next = 16;
            return _School["default"].findOne({
              code: code
            });

          case 16:
            isCode = _context2.sent;

            if (isCode) {
              req.flash('error_msg', 'El codigo ingresado ya esta registrado, por favor digite otro');
              res.redirect('/signup');
            }

            if (emailUser) {
              req.flash('error_msg', 'El correo ya esta en uso');
              res.redirect('/signup');
            }

            newSchool = new _School["default"]({
              name: name,
              code: code
            });
            _context2.next = 22;
            return newSchool.save();

          case 22:
            newUser = new _Users["default"]({
              username: username,
              password: password,
              email: email,
              school: newSchool._id,
              rol: 'admin'
            });
            _context2.next = 25;
            return newUser.encryptPassword(password);

          case 25:
            newUser.password = _context2.sent;
            _context2.next = 28;
            return newUser.save(function (err, user) {
              res.redirect('/signin');
            });

          case 28:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function validationRegister(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.validationRegister = validationRegister;