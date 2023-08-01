
import BaseHelpers from './helpers/BaseHelpers.js';


BaseHelpers.checkWebpSupport();


const burgerOpenBtn = document.getElementById('open');
const burgerClosedBtn = document.getElementById('closed');
const burgerMenuList = document.getElementById('menu');

burgerOpenBtn.addEventListener('click', () => {
  burgerOpenBtn.classList.add('hide');
  burgerClosedBtn.classList.remove('hide');
  burgerMenuList.classList.remove('hide');
});

burgerClosedBtn.addEventListener('click', () => {
  burgerOpenBtn.classList.remove('hide');
  burgerClosedBtn.classList.add('hide');
  burgerMenuList.classList.add('hide');
});
