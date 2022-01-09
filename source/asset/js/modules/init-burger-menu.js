/* eslint-disable-next-line */
import { FocusLock } from '../utils/focus-lock';


const initBurgerMenu = () => {
  // ----------- КОНСТАНТЫ ----------
  // *** Словарь значений для "Escape" ***
  const EscapeKey = {
    FULL_NAME: 'Escape',
    ABBREVIATED: 'Esc',
  };


  // --------- DOM-элементы ---------
  const burgerButton = document.querySelector('.burger-button');
  const headerNavMenu = document.querySelector('.header-nav-menu');

  // *** Проверка на существование "бургер-кнопки" и Навигационного меню ***
  if (!burgerButton || !headerNavMenu) {
    return;
  }

  const navMenuCloseButton = headerNavMenu.querySelector('.navigation-menu__close-button');


  /*
  =======================================================================
  --------------------------- ОСНОВНАЯ ЛОГИКА ---------------------------
  =======================================================================
  */

  // *** Ф-ции для показа/скрытия Навигационного меню ***
  const openNavMenu = () => {
    headerNavMenu.classList.add('header-nav-menu--opened');

    // --- Ловушка "фокуса" внутри Навигационного меню ---
    window.focusLock.lock('.header-nav-menu');

    // --- Отключение скролла при открытом Навигационного меню ---
    window.disableBodyScroll(headerNavMenu, {
      reserveScrollBarGap: true,
    });

    document.addEventListener('keydown', onEscPress);
    navMenuCloseButton.addEventListener('click', onCloseButtonClick);
  };


  const closeNavMenu = () => {
    headerNavMenu.classList.remove('header-nav-menu--opened');

    // --- Отключение ловушки "фокуса" ---
    window.focusLock.unlock();

    // --- Включение скролла ---
    window.enableBodyScroll(headerNavMenu);

    document.removeEventListener('keydown', onEscPress);
    navMenuCloseButton.removeEventListener('click', onCloseButtonClick);
  };


  // *** Ф-ция для закрытия Навигации при клике на "Escape" ***
  const onEscPress = (evt) => {
    if (evt.key === EscapeKey.FULL_NAME || evt.key === EscapeKey.ABBREVIATED) {
      closeNavMenu();
    }
  };


  // *** Ф-ция для обработчика события для открытия Навигационного меню ***
  const onBurgerButtonClick = (evt) => {
    evt.preventDefault();
    openNavMenu();
  };


  // *** Ф-ция для обработчика события для закрытия Навигационного меню ***
  const onCloseButtonClick = (evt) => {
    evt.preventDefault();
    closeNavMenu();
  };


  // *** Добавление обработчика события ***
  burgerButton.addEventListener('click', onBurgerButtonClick);
};


export { initBurgerMenu };
