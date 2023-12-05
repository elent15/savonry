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
