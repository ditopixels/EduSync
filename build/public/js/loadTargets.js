"use strict";

var d = document;
var $target = d.getElementById('targets');
d.addEventListener('DOMContentLoaded', function () {
  setInterval(function () {
    $target.innerHTML += '<li>Juan</li>';
  }, 2000);
});