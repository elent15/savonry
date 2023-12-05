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
