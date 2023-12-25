// accordion
const accordion = () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
    accordion.addEventListener('click', (el) => {
      const self = el.currentTarget;
      const trigger = self.querySelector('.accordion__trigger');
      const content = self.querySelector('.accordion__content');

      if (self.classList.contains('accordion')) {
        self.classList.toggle('accordion--active');
      }

      if (self.classList.contains('accordion--active')) {
        trigger.setAttribute('aria-expanded', true);
        trigger.setAttribute('aria-label', 'Закрыть');
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        trigger.setAttribute('aria-expanded', false);
        trigger.setAttribute('aria-label', 'Открыть');
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
}

accordion();

// burger-menu
const burger = () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header-bottom');
  const menuItems = document.querySelectorAll('.header__submenu-link');
  const leftIcons = document.querySelector('.header-top__left-icons');
  const rightIcons = document.querySelector('.header-top__right-icons');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header-bottom--active');
    leftIcons.classList.toggle('header-top__left-icons--hidden');
    rightIcons.classList.toggle('header-top__right-icons--hidden');
    leftIcons.classList.toggle('header-top__left-icons--visible');

    if (menu.classList.contains('header-bottom--active')) {
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Закрыть меню');
      document.body.classList.add('stop-scroll');
    } else {
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Открыть меню');
      document.body.classList.remove('stop-scroll');
    }
  });

  document.addEventListener('click', (el) => {
    const target = el.target;
    const itsMenu = target == menu || menu.contains(target);
    const itsBurger = target == burger || burger.contains(target);

    if (!itsMenu && !itsBurger && menu.classList.contains('header-bottom--active')) {
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('header-bottom--active');
      leftIcons.classList.remove('header-top__left-icons--hidden');
      rightIcons.classList.remove('header-top__right-icons--hidden');
      leftIcons.classList.remove('header-top__left-icons--visible');
      document.body.classList.remove('stop-scroll');
    }
  });

  menuItems.forEach(el => {
    el.addEventListener('click', () => {
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('header-bottom--active');
      leftIcons.classList.remove('header-top__left-icons--hidden');
      rightIcons.classList.remove('header-top__right-icons--hidden');
      leftIcons.classList.remove('header-top__left-icons--visible');
      document.body.classList.remove('stop-scroll');
    });
  });
}

burger();

// submenu
const menu = () => {
  const menuBtns = document.querySelectorAll('.menu-btn-js');
  let navMenuItem,
    menuLink;

  menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener('click', (btn) => {
      navMenuItem = btn.target.closest('.header__nav-item');
      menuLink = navMenuItem.querySelectorAll('.header__submenu-link');

      document.querySelectorAll('.header__nav-item').forEach((item) => {
        if (item !== navMenuItem && item.classList.contains('header__nav-item--active')) {
          item.classList.remove('header__nav-item--active');
        }
      });

      navMenuItem.classList.toggle('header__nav-item--active');

      menuLink.forEach((link) => {
        link.addEventListener('click', () => {
          navMenuItem.classList.remove('header__nav-item--active');
        });
      });

      document.addEventListener('click', (el) => {
        const target = el.target;
        const itsNavMenuItem = target == navMenuItem || navMenuItem.contains(target);

        if (!itsNavMenuItem && navMenuItem.classList.contains('header__nav-item--active')) {
          navMenuItem.classList.remove('header__nav-item--active');
        }
      });
    });
  });
}

menu();

// mobile-slider
const slider = document.querySelector('.mobile-swiper');
const mediaQuery = window.matchMedia('(max-width: 758px)')
let mySwiper;

function mobileSlider(e) {
  if (e && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      slidesPerView: 'auto',
      keyboard: true,
      spaceBetween: 12
    });
    slider.dataset.mobile = 'true';
  } else {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }
  }
}

if (slider) {
  mobileSlider(mediaQuery.matches);

  mediaQuery.addEventListener('change', function (e) {
    mobileSlider(e.matches);
  })
}


// modal window
const modal = () => {
  const btns = Array.from(document.querySelectorAll(`[data-modal]`));
  const modals = Array.from(document.querySelectorAll('.modal'));
  const inputs = document.querySelectorAll('.modal__form-input');
  const body = document.body;

  function open(el) {
    modals.forEach(modal => {
      if (modal.classList.contains('modal--open'))
        modal.classList.remove('modal--open');
    });

    const modalData = el.target.dataset.modal || el.target.closest(`[data-modal]`).dataset.modal;
    const modal = document.getElementById(`${modalData}`);
    const modalClose = modal.querySelector('.modal__close-btn');

    modal.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', btn => {
        btn.preventDefault();
      });
    });

    modalClose.classList.remove('modal__close-btn--active');
    modal.classList.add('modal--open');
    body.classList.add('stop-scroll');
  }

  function close(el) {
    const target = el.target;
    const modal = target.closest('.modal');
    const modalBody = modal.querySelector('.modal__body');
    const modalClose = modal.querySelector('.modal__close-btn');
    const modalBtn = modal.querySelector('.btn-js');

    const itsModalBody = target == modalBody || modalBody.contains(target);
    const itsModalClose = target == modalClose || modalClose.contains(target);
    let itsModalBtn;
    if (modalBtn) {
      itsModalBtn = target == modalBtn || modalBtn.contains(target);
    }

    if ((itsModalClose && modal.classList.contains('modal--open')) ||
      (!itsModalBody && modal.classList.contains('modal--open')) ||
      (itsModalBtn && modal.classList.contains('modal--open'))) {
      modalClose.classList.add('modal__close-btn--active');
      modal.classList.remove('modal--open');
      body.classList.remove('stop-scroll');
      inputs.forEach(input => {
        input.value = '';
      });
    }
  }

  btns.forEach(btn => {
    btn.addEventListener('click', open);
  });

  modals.forEach(modal => {
    modal.addEventListener('click', close);
  });
}

modal();

// making an order
const order = () => {
  const orderBtn = document.querySelector('.cart__order-btn');
  const order = document.querySelector('.order');

  if (order) {
    orderBtn.addEventListener('click', () => {
      order.classList.add('order--active');
    });
  }
}

order();

// search-form
const search = () => {
  const searchBtn = document.querySelector('.header-top__btn--search');
  const searchForm = document.querySelector('.header-top__search-form');
  const searchIcon = document.querySelector('.header-top__search-form-icon');
  const closeBtn = document.querySelector('.header-top__search-form-btn');
  const searchInput = document.querySelector('.header-top__search-form-input');

  searchBtn.addEventListener('click', () => {
    searchForm.classList.add('header-top__search-form--active');
  });

  closeBtn.addEventListener('click', () => {
    searchForm.classList.remove('header-top__search-form--active');
    searchInput.value = '';
  });

  searchIcon.addEventListener('click', () => {
    searchForm.classList.remove('header-top__search-form--active');
    searchInput.value = '';
  });
}

search();

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

// video from youtube
const video = () => {
  const videoBtn = document.querySelector('.video__play-btn');

  if (videoBtn) {
    videoBtn.addEventListener('click', () => {
      const videoContainer = videoBtn.closest('.video__container');
      const videoBg = videoContainer.querySelector('.video__bg')
      const videoContent = videoContainer.querySelector('.video__content')
      const src = videoContent.dataset.src;

      videoBtn.classList.add('video__play-btn--hidden');
      videoBg.remove();
      videoContent.insertAdjacentHTML('afterbegin', '<iframe class="video__iframe" src="' + src + '" frameborder="0" allow="autoplay;" allowfullscreen></iframe>');
    });
  }
}

video();

// yandex-map
const ymaps = window.ymaps;

const init = () => {
  const map = new ymaps.Map('map', {
    center: [59.94349356415401, 30.42990049999999],
    zoom: 16,
    controls: []
  });

  document.querySelector('.ymaps-2-1-79-map-copyrights-promo').style.display = 'none';
  document.querySelector('.ymaps-2-1-79-copyright__content').style.display = 'none';

  const placemark = new ymaps.Placemark([59.94349356415401, 30.42990049999999], {}, {
    iconLayout: 'default#image',
    iconImageHref: './images/svg/marker.svg',
    iconImageSize: [112, 138],
    iconImageOffset: [-56, -138],
  });

  const mediaQuery = window.matchMedia('(max-width: 758px)')

  function handleTabletChange(e) {
    if (e) {
      placemark.options.set('iconImageSize', [74, 91]);
      placemark.options.set('iconImageOffset', [-37, -91]);
    } else {
      placemark.options.set('iconImageSize', [112, 138]);
      placemark.options.set('iconImageOffset', [-56, -138]);
    }
  }

  handleTabletChange(mediaQuery.matches);

  mediaQuery.addEventListener('change', function (e) {
    handleTabletChange(e.matches);
  })

  map.geoObjects.add(placemark);
}

if (ymaps) {
  ymaps.ready(init);
}
