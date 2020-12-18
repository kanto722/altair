const slider1 = document.querySelector('.swiper-container1');
const slider2 = document.querySelector('.swiper-container2'); 



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
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {
      delay: 1000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
    lazy: {
      loadPrevNext: true,
    }
  })

