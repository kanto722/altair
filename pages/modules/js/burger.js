let headerBurger = document.querySelector('.header-burger');
let headerBlock = document.querySelector('.header-block');
let back = document.querySelector('body');

headerBurger.onclick = function(){
    headerBurger.classList.toggle('active');
    headerBlock.classList.toggle('active');
    back.classList.toggle('lock');
}
