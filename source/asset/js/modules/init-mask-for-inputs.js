const initMaskForInputs = () => {
  // --------- DOM-элементы ---------
  const form = document.querySelector('.form');

  // *** Проверка на существование Формы ***
  if (!form) {
    return;
  }

  const formEmail = form.querySelector('#user-email');
  const formPhone = form.querySelector('#user-phone');


  /*
  =======================================================================
  --------------------------- ОСНОВНАЯ ЛОГИКА ---------------------------
  =======================================================================
  */

  /*
   * *** Маска для поля с Почтой ***
   */

  /* eslint-disable-next-line */
  Inputmask({
    'mask': 'a{3,}@a{1,}.a{2,3}',
    'definitions': {
      'a': {
        validator: '[A-Za-z]',
      }
    },
  }).mask(formEmail);


  /*
   * *** Маска для поля с Номером телефона ***
   */

  /* eslint-disable-next-line */
  Inputmask({
    'mask': '+7 (999) 999-99-99',
    'definitions': {
      '9': {
        validator: '[0-9]',
      }
    },
  }).mask(formPhone);
};

export { initMaskForInputs };
