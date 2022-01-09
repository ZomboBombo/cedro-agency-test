const initSearchField = () => {
  // --------- DOM-элементы ---------
  const searchFieldOpener = document.querySelector('.js-search-field-opener');
  const searchField = document.querySelector('.site-header__search-field');

  // *** Проверка на существование кнопки открытия Поиска и самого поля Поиска ***
  if (!searchFieldOpener || !searchField) {
    return;
  }


  /*
  =======================================================================
  --------------------------- ОСНОВНАЯ ЛОГИКА ---------------------------
  =======================================================================
  */

  // *** Ф-ция для обработки переключения состояния поля Поиска ***
  const onSearchOpenerClick = (evt) => {
    evt.preventDefault();
    searchField.classList.toggle('site-header__search-field--opened');
  };


  // *** Добавление обработчика события ***
  searchFieldOpener.addEventListener('click', onSearchOpenerClick);
};


export { initSearchField };
