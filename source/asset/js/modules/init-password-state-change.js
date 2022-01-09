const initPasswordStateChange = () => {
  // ----------- КОНСТАНТЫ ----------
  // *** Словарь значений для типов поля Пароля ***
  const FieldType = {
    PASSWORD: 'password',
    TEXT: 'text',
  };

  // *** Словарь значений для ID иконок ***
  const IconID = {
    WITH_HIDDEN_PASSWORD: '#icon-password-eye--opened',
    WITH_SHOWN_PASSWORD: '#icon-password-eye--closed',
  };


  // --------- DOM-элементы ---------
  const passwordStateTogglers = document.querySelectorAll('.js-password-state-toggler');

  // *** Проверка на существование тогглеров для состояния пароля ***
  if (!passwordStateTogglers) {
    return;
  }


  /*
  =======================================================================
  --------------------------- ОСНОВНАЯ ЛОГИКА ---------------------------
  =======================================================================
  */

  // *** Ф-ция для изменения иконки при переключении состояния поля Пароля ***
  const changeIconAppearance = (stateToggler) => {
    const currentTogglerIcon = stateToggler.querySelector('.js-password-state-toggler-icon use');

    if (currentTogglerIcon.getAttribute('xlink:href') === IconID.WITH_HIDDEN_PASSWORD) {
      currentTogglerIcon.setAttribute('xlink:href', IconID.WITH_SHOWN_PASSWORD);
    } else {
      currentTogglerIcon.setAttribute('xlink:href', IconID.WITH_HIDDEN_PASSWORD);
    }
  };


  // *** Ф-ция для изменения текста подсказки для тогглера ***
  const changeTogglerHint = (stateToggler) => {
    const textHintHidePassword = stateToggler.dataset.hintHidePassword;
    const textHintShowPassword = stateToggler.dataset.hintShowPassword;

    if (stateToggler.getAttribute('title') === textHintShowPassword) {
      stateToggler.setAttribute('title', textHintHidePassword);
      stateToggler.setAttribute('aria-label', textHintHidePassword);
    } else {
      stateToggler.setAttribute('title', textHintShowPassword);
      stateToggler.setAttribute('aria-label', textHintShowPassword);
    }
  };


  // *** Ф-ция для переключения состояния поля Пароля ***
  const changePasswordState = (stateToggler) => {
    changeIconAppearance(stateToggler);
    changeTogglerHint(stateToggler);

    const currentPasswordField = stateToggler.parentNode.querySelector('.js-input-password');

    if (currentPasswordField.getAttribute('type') === FieldType.PASSWORD) {
      currentPasswordField.setAttribute('type', FieldType.TEXT);
    } else {
      currentPasswordField.setAttribute('type', FieldType.PASSWORD);
    }
  };

  // *** Ф-ция для обработчика события клика на тогглер изменения состояния поля Пароля ***
  const onTogglerClick = (evt) => {
    evt.preventDefault();

    const currentToggler = evt.target.closest('.js-password-state-toggler');
    changePasswordState(currentToggler);
  };


  // *** Добавление обработчиков событий ***
  for (let toggler of passwordStateTogglers) {
    toggler.addEventListener('click', onTogglerClick);
  }
};


export { initPasswordStateChange };
