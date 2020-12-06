const slider3 = document.querySelector('.swiper-container3');

  let mySwiper3 = new Swiper(slider3, {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
    lazy: {
      loadPrevNext: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,

      }
    }
  })