"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }), exports.host = exports.config = exports.helpershbs = void 0;
var configDB = { MONGODB_HOST: process.env.MONGODB_HOST || "localhost", MONGODB_DATABASE: process.env.MONGODB_DB || "a" },
    helpershbs = { ifEquals: function ifEquals(a, b, c) { return a == b ? c.fn(this) : c.inverse(this) } };
exports.helpershbs = helpershbs;
var config = { PORT: process.env.PORT || 4e3, MONGODB_URI: "mongodb+srv://edusync:PsvlSl19zkq47AzG@edusync-cluster.8v5ev.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" };
exports.config = config;
var host = "https://edusync.azurewebsites.net";
exports.host = "";