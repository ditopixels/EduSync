"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=password;var d=document;function password(){var a=d.querySelectorAll("input[type=\"password\"]");a.forEach(function(a){var b=1,c=a.nextElementSibling.nextElementSibling;c.addEventListener("click",function(){b?(console.log(b),c.setAttribute("class","fas fa-eye-slash eye"),a.setAttribute("type","text"),b=0):(c.setAttribute("class","fas fa-eye eye"),a.setAttribute("type","password"),b=1)})})}/*let cout = 0;

eye.addEventListener('click', (e) => {


})*/