const initFormValidation = () => {
  // ----------- КОНСТАНТЫ ----------
  const EMAIL_REG_EXP = /^[^\_]*$/;
  const PHONE_REG_EXP = /^[^\_]*$/;


  // --------- DOM-элементы ---------
  const form = document.querySelector('.form');

  // *** Проверка на существование Формы ***
  if (!form) {
    return;
  }

  const formInputs = form.querySelectorAll('input');
  const formEmail = form.querySelector('#user-email');
  const formPhone = form.querySelector('#user-phone');
  const formSubmitButton = form.querySelector('.form__submit-button');


  /*
  =======================================================================
  --------------------------- ОСНОВНАЯ ЛОГИКА ---------------------------
  =======================================================================
  */

  // *** Справочник методов для валидации ***
  const validationError = {
    add: (erroredField, message) => {
      erroredField.setCustomValidity(message);
      erroredField.classList.remove('correct-field');
      erroredField.classList.add('error-field', 'error-field--input');

      // --- Создание блока для вывода сообщения об ошибке ---
      const errorFieldMessage = document.createElement('span');
      errorFieldMessage.classList.add('error-field', 'error-field--message');
      errorFieldMessage.textContent = message;

      if (erroredField.classList.contains('js-input-password')) {
        erroredField.parentNode.after(errorFieldMessage);
      } else {
        erroredField.parentNode.insertBefore(errorFieldMessage, erroredField.nextElementSibling);
      }
    },

    remove: (erroredField) => {
      erroredField.setCustomValidity('');
      erroredField.classList.remove('error-field', 'error-field--input');
      erroredField.classList.add('correct-field');

      if (erroredField.classList.contains('js-input-password')) {
        if (erroredField.parentNode.nextElementSibling) {
          if (erroredField.parentNode.nextElementSibling.classList.contains('error-field')) {
            erroredField.parentNode.nextElementSibling.remove();
          }
        }
      } else {
        if (erroredField.nextElementSibling) {
          if (erroredField.nextElementSibling.classList.contains('error-field')) {
            erroredField.nextElementSibling.remove();
          }
        }
      }
    },
  };


  // *** Ф-ция для проверки правильности заполнения полей Формы ***
  const checkValidity = (fieldForCheck) => {
    // --- Справочник ОШИБОК валидации ---
    const error = {
      emptyField: fieldForCheck.value.length === 0,
      incorrectEmail: !EMAIL_REG_EXP.test(fieldForCheck.value) && fieldForCheck === formEmail,
      incorrectPhoneNumber: !PHONE_REG_EXP.test(fieldForCheck.value) && fieldForCheck === formPhone,
    };

    // --- Справочник СООБЩЕНИЙ об ошибках валидации ---
    const message = {
      emptyField: 'Это обязательное поле',
      incorrectEmail: 'Некорректный адрес электронной почты',
      incorrectPhoneNumber: 'Некорректный номер телефона',
    };


    // --- Ф-ция для добавления Ошибки валидации поля ---
    const addValidationError = (erroredField, erroredMessage) => {
      validationError.remove(erroredField);
      validationError.add(erroredField, erroredMessage);
    };


    switch (true) {
      case error.emptyField:
        addValidationError(fieldForCheck, message.emptyField);
        break;

      case error.incorrectEmail:
        addValidationError(fieldForCheck, message.incorrectEmail);
        break;

      case error.incorrectPhoneNumber:
        addValidationError(fieldForCheck, message.incorrectPhoneNumber);
        break;

      default:
        validationError.remove(fieldForCheck);
    }
  };


  // *** Ф-ция для обработки события клика на кнопку Сабмита Формы ***
  const onSubmitButtonClick = () => {
    for (let currentField of formInputs) {
      checkValidity(currentField);
    }
  };


  // *** Добавление обработчиков событий ***
  for (let input of formInputs) {
    input.addEventListener('input', () => {
      checkValidity(input);
    });
  }

  formSubmitButton.addEventListener('click', onSubmitButtonClick);
};


export { initFormValidation };
