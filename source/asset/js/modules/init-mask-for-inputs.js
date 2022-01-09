const initMaskForInputs = () => {
  // --------- DOM-элементы ---------
  const form = document.querySelector('.form');

  // *** Проверка на существование Формы ***
  if (!form) {
    return;
  }

  const formPhone = form.querySelector('input[type="phone"]');


  /*
  =======================================================================
  --------------------------- ОСНОВНАЯ ЛОГИКА ---------------------------
  =======================================================================
  */

  /* eslint-disable-next-line */
  Inputmask({
    'mask': '+7 (***) ***-**-**',
    'greedy': false,
    'definitions': {
      '*': {
        validator: '[0-9]',
      }
    },
  }).mask(formPhone);
};

export { initMaskForInputs };
