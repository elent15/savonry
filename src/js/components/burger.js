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
