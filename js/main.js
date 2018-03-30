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
  navMenu.style.visibility = 'visible';
  navMenu.classList.add('horizTranslateOn');
  navMenu.classList.remove('horizTranslateOff');
  btnOpen.style.display = 'none';
}

function closeMenu(){
  var navMenu = document.querySelector('.nav');
  navMenu.style.visibility = 'hidden';
  btnOpen.style.display = 'block';
  navMenu.classList.remove('horizTranslateOn');
  navMenu.classList.add('horizTranslateOff');

}

function hiddenItemNav(){
var navItem = document.querySelector('.nav');
  navItem.style.visibility = 'hidden';
}
window.addEventListener('load', hiddenItemNav);
