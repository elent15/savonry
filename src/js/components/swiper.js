// slider
new Swiper('.hero__swiper', {
  navigation: {
    nextEl: '.hero__swiper-button-next',
    prevEl: '.hero__swiper-button-prev',
  },
  keyboard: true
});

new Swiper('.new-products__swiper', {
  spaceBetween: 20,
  slidesPerView: 'auto',
  keyboard: true
});

new Swiper('.hits__swiper', {
  spaceBetween: 20,
  slidesPerView: 'auto',
  keyboard: true
});

new Swiper('.offers__swiper', {
  spaceBetween: 20,
  keyboard: true,
  breakpoints: {
    320: {
      slidesPerView: 'auto',
    },
    1231: {
      slidesPerView: 4,
    }
  }
});

const productCardSwiper = new Swiper('.product-card__swiper-gallery', {
  spaceBetween: 8,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.product-card__swiper-button-next',
    prevEl: '.product-card__swiper-button-prev',
  },
});

new Swiper('.product-card__swiper', {
  spaceBetween: 0,
  thumbs: {
    swiper: productCardSwiper,
  },
});

new Swiper('.reviews__swiper', {
  spaceBetween: 20,
  slidesPerView: 'auto',
  keyboard: true
});
