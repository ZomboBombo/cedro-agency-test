import { initBurgerMenu } from './modules/init-burger-menu';
import { initSearchField } from './modules/init-search-field';
import { initFormValidation } from './modules/init-form-validation';
import { initMaskForInputs } from './modules/init-mask-for-inputs';
import { initPasswordStateChange } from './modules/init-password-state-change';


window.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  initSearchField();
  initFormValidation();
  initMaskForInputs();
  initPasswordStateChange();
});
