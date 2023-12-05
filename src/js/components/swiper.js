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
