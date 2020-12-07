const slider1 = document.querySelector('.swiper-container1');
const slider2 = document.querySelector('.swiper-container2'); 
const slider3 = document.querySelector('.swiper-container3');

let mySwiper1 = new Swiper(slider1, {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
    lazy: {
      loadPrevNext: true,
    },
  })

  let mySwiper2 = new Swiper(slider2, {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
    lazy: {
      loadPrevNext: true,
    },
    pagination: {
        el: '.swiper-pagination',
        type:'bullets',
        clickable: true,
    },
  })

  let mySwiper3 = new Swiper(slider3, {
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {
      delay: 1500,
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
    lazy: {
      loadPrevNext: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      670: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
  })