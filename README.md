# Проект *«Cedro»*
Проект для компании *«Cedro»* — тестовое задание на позицию «Вестальщик»


--  
***Затраченное время***: ~20 часов.

***Используемые технологии***:
* HTML/CSS;
* JavaScript *(синтаксис ES6)*;
* CSS-препроцессор *Sass (синтаксис SCSS)*;
* для сборки: *Gulp*, *Babel*, *Webpack*;


## Поддержка устройствами

1. **ДОСТУПНЫЕ РАЗРЕШЕНИЯ ЭКРАНОВ**
    * Страница корректно отображается на разрешениях экрана в диапазоне ширины от *320px* до *1920px*
    * *Минимальная ширина* — *320px*: если ширина экрана *уже* минимальной, то страница начнёт обрезаться.
	 
2. **БРАУЗЕРЫ**  
  Корректно отображается и функционирует во всех современных популярных браузерах:
	  * *Mozilla Firefox (начиниая с @93.0.x*)
	  * *Google Chrome (начиниая с @95.0.x*)
	  * *Microsoft Edge (начиниая с @95.0.x*)
	  * *Opera (начиниая с @80.0.x*)
	  * *Яндекс.Браузер (начиниая с @21.9.x*)

3. **ПЛАТФОРМЫ**  
  Сайт настроен для использования на устройствах, работющих под ***ОС&nbsp;Windows***.
  Также был проверен на работоспособность в мобильных браузерах на ***Android***.


## Функционал
* при нажатии на кнопку *"бургер"* открывается Навигационное меню
* при нажатии на кнопку *"Поиск"* (**иконка Лупы** в Шапке сайта) открывается поле Поиска
* настроена базовая валидация Формы
* для полей ввода номера телефона предусмотрена маска для валидации вводимых символов: *+7 (_\_\_) \_\_\_-\_\_-\_\_*;
* в секции *"Тренды сезона"* настроен слайдер, работающий на базе *«Swiper.js»*



## Краткая инструкция по работе со Сборкой

### Для начала работы у вас должны быть установлены:
* *Node.js*: не ниже **v.14.15.5**
* *npm*: **6.14.11** или выше
* *editorconfig-cli*: **0.3.0** или выше (его необходимо установить *ГЛОБАЛЬНО*: для этого выполните команду `npm i -g editorconfig-cli`)

## Основные команды для работы
* Установка всех необходимых пакетов — `npm i`
* Запуск локального сервера — `npm start`
* Сборка проекта без запуска локального сервера — `npm run build`
* Запуск тестирования на соответствия код-гайдам — `npm test`
