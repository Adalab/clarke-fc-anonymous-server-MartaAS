'use strict';

//ocultar texto menu del boton
var textMenu = document.querySelector('.nav-trigger');
var textClose = document.querySelector('.nav-close');
textMenu.innerHTML = '';
textClose.innerHTML = '';

var btnOpen = document.querySelector('.nav-trigger');
var btnClose = document.querySelector('.nav-close');

btnOpen.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);

function openMenu(){
  var navMenu = document.querySelector('.nav');
  navMenu.style.display = 'block';
  btnOpen.style.display = 'none';
}

function closeMenu(){
  var navMenu = document.querySelector('.nav');
  navMenu.style.display = 'none';
  btnOpen.style.display = 'block';

}

function hiddenItemNav(){
var navItem = document.querySelector('.nav');
  navItem.style.display = 'none';
}
window.addEventListener('load', hiddenItemNav);
