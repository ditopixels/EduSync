"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Navigator;
var d = document;

function Navigator() {
  var $navigator = d.querySelector('.navegator');
  var $btnNavigator = d.getElementById('btn-menu');
  var $dropdown = d.querySelectorAll('.navegator .dropdown');
  $dropdown.forEach(function (el) {
    var $categorie = el.querySelector('.categorie');
    var $subCategories = el.querySelector('.sub-categories');
    var $subCategoriesLi = $subCategories.querySelectorAll('li');
    $categorie.addEventListener('click', function () {
      $subCategories.classList.toggle("active-".concat($subCategoriesLi.length));
      $subCategories.previousElementSibling.classList.toggle('activeArrow');
    });
    $subCategoriesLi.forEach(function (el) {
      if (el.children[0].classList.value.includes('active')) {
        $subCategories.classList.add("active-".concat($subCategoriesLi.length));
        $subCategories.previousElementSibling.classList.add('activeArrow');
      }
    });
  });

  $btnNavigator.onclick = function () {
    $navigator.classList.toggle('active');
  };
}