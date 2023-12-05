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
