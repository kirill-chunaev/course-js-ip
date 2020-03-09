// 'use strict';
let menu = document.querySelector('.menu'),
menuItem = document.querySelectorAll('.menu-item'),
title = document.getElementById('title'),
column = document.querySelectorAll('.column'),
prompt = document.getElementById('prompt');

menu.insertBefore(menuItem[2],menuItem[1]);
console.log(menuItem);

let menuItemForties = document.createElement('li');
menuItemForties.classList.add('menu-item');
menu.appendChild(menuItemForties);
menuItemForties.textContent = 'Пятый пункт';

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';


// let newTitle = document.createTextNode = 'Мы продаем только подлинную технику Apple';
title.textContent = 'Мы продаем только подлинную технику Apple';

let adv = document.querySelector('.adv');
column[1].removeChild(adv);

// let ext = prompt("Как вы относитесь к технике Apple?");
// prompt.textContent = promptTxt;

var promo = window.prompt("Как вы относитесь к технике Apple?", '');
prompt.textContent = promo;