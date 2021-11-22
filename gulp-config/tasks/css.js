/*
 ** Служебные комментарии от ESLint
 ** для корректной работы require()
 */

/* eslint no-undef: "error" */
/* eslint-env node */


import { src, dest } from 'gulp';

// --- CSS-утилиты ---
import csso from 'gulp-csso';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';

// --- Препроцессорные утилиты ---
const sass = require('gulp-sass')(require('sass'));
import plumber from 'gulp-plumber';
import sourcemap from 'gulp-sourcemaps';

// --- Вспомогательные утилиты ---
import rename from 'gulp-rename';

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

// *** Обработка всех SCSS-файлов и преобразование их в CSS-файлы ***
export default function css() {
  return Utils.pipeline(
      src(PATH_TO.source.sass.main_style_file),
      plumber(),
      sourcemap.init(),
      sass(),
      postcss([
        autoprefixer()
      ]),
      dest(PATH_TO.build.css),
      csso(),
      rename('styles.min.css'),
      sourcemap.write('.'),
      dest(PATH_TO.build.css),
      Utils.browserSync.stream()
  );
}
