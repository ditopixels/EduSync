"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashboard = void 0;
var dashboard = {
  navegator: [{
    categorie: 'Inicio',
    path: '/app'
  }, {
    categorie: 'Institución',
    path: '/app',
    subCategories: [{
      subCategorie: 'Página',
      path: '/app/pagina'
    }, {
      subCategorie: 'Configuración',
      path: '/app/configuracion'
    }, {
      subCategorie: 'Miembros',
      path: '/app/miembros'
    }]
  }, {
    categorie: 'Biblioteca',
    path: '/app/biblioteca'
  }, {
    categorie: 'Documentos',
    path: '/app/documentos'
  }]
};
exports.dashboard = dashboard;