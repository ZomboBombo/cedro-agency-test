/*
 ** Служебные комментарии от ESLint
 ** для корректной работы require()
 */

/* eslint no-undef: "error" */
/* eslint-env node */

// --- Файлы с настройками для Webpack ---
import webpackStream from 'webpack-stream';
const webpackConfig = require('../../webpack.config.js');

// --- Gulp-утилиты ---
import { dest, src } from 'gulp';


/*
--- Импорт утилитарных модулей ---
--- ---
--- 1) с описанием путей к Файлам проекта
--- 2) модуль с константами и утилитами
*/
import PATH_TO from '../path-to';
import Utils from '../gulp-utils';


/*
=====================================================
------------------- ОСНОВНОЙ ТАСК -------------------
=====================================================
*/

// *** Сборка всех JS-файлов ***
export default function scripts() {
  return Utils.pipeline(
      src(PATH_TO.source.js.main_file),
      webpackStream(webpackConfig),
      dest(PATH_TO.build.js)
  );
}
