"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderDocs=exports.renderHome=void 0;var _config=require("../config.js"),rol="student",renderHome=function(a,b){b.render("user/home",{title:"GikEdu",contentHeader:{partial:function partial(){return"button"},args:{label:"a",value:"Inicia Sesi\xF3n",class:"button",url:"/signin"}},contentOptions:{partial:function partial(){return"rol/".concat(rol)}},host:_config.host})};exports.renderHome=renderHome;var renderDocs=function(a,b){return b.render("user/docs",{host:_config.host})};exports.renderDocs=renderDocs;