const slider3 = document.querySelector('.swiper-container3');

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