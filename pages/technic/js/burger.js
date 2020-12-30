let headerBurger = document.querySelector('.header-burger');
let headerBlock = document.querySelector('.header-block');
let back = document.querySelector('body');

headerBurger.onclick = function(){
    headerBurger.classList.toggle('active');
    headerBlock.classList.toggle('active');
    back.classList.toggle('lock');
}


// Отложенная загрузка карты
var YaMapsShown = false;

$(window).scroll(function () {
  var offset = $('.content__maps').offset().top;
  if (!YaMapsShown) {
    if ($(window).scrollTop() + $(window).height() > offset - 600) {
      showYaMaps();
      YaMapsShown = true;
    }
  }
});

function showYaMaps() {
   var script = document.createElement("script");
   script.type = "text/javascript";
   script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A36a185c1c90b97dc6b21f77694df4fac833d8723c84c8ead2991cfe0a14f0b33&amp;width=100%25&amp;height=577&amp;lang=ru_RU&amp;scroll=true";

   document.getElementById("maps").appendChild(script);
 };
// КОНЕЦ Отложенная загрузка карты