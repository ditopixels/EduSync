"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _morgan = _interopRequireDefault(require("morgan"));

var _passport = _interopRequireDefault(require("passport"));

var _connectFlash = _interopRequireDefault(require("connect-flash"));

var _path = _interopRequireDefault(require("path"));

var _config = require("./config.js");

require("./helpers/passport.js");

var _indexRoutes = _interopRequireDefault(require("./routes/index.routes.js"));

var _signRoutes = _interopRequireDefault(require("./routes/sign.routes.js"));

var _dashboardRoutes = _interopRequireDefault(require("./routes/dashboard.routes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Routes

/***APP***/
var app = (0, _express["default"])();
app.set('port', _config.config.PORT);
app.use((0, _morgan["default"])('dev')); // Session

app.use((0, _expressSession["default"])({
  secret: 'mysecretapp',
  resave: true,
  saveUninitialized: true
}));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session()); // Static files

app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public'))); // Set view engine - Handlebars

app.set("views", _path["default"].join(__dirname, "views"));
app.set("view engine", ".hbs");
app.engine(".hbs", (0, _expressHandlebars["default"])({
  defaultLayout: "main",
  layoutsDir: _path["default"].join(app.get("views"), "layouts"),
  partialsDir: _path["default"].join(app.get("views"), "partials"),
  extname: ".hbs",
  helpers: _config.helpershbs
})); //Middlewares

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _connectFlash["default"])());
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
}); // Routes

app.use(_indexRoutes["default"]);
app.use(_signRoutes["default"]);
app.use(_dashboardRoutes["default"]);
app.use('*', function (req, res) {
  res.render('404', {
    title: "GikEdu - page not found"
  });
});
var _default = app;
exports["default"] = _default;