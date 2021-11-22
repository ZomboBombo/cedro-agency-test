/*
 ** Служебные комментарии от ESLint
 ** для корректной работы require()
 */

/* eslint no-undef: "error" */
/* eslint-env node */


import { src, dest } from 'gulp';

// --- Вспомогательные утилиты ---
const pipeline = require('readable-stream').pipeline;

// --- Импорт модуля с описанием путей к Файлам проекта ---
import PATH_TO from '../path-to';


/*
=====================================================
------------------- ОСНОВНОЙ ТАСК -------------------
=====================================================
*/

// --- Список составных путей к наборам файлов ---
const path_to_copy = {
  all_fonts: PATH_TO.source.fonts + '**/*.{woff,woff2}',
  all_images: PATH_TO.source.images + '**',
  all_icons: PATH_TO.source + '/*.ico',
};

// *** Копирование файлов ***
export default function copy() {
  return pipeline(
      src([
        path_to_copy.all_fonts,
        path_to_copy.all_images,
        path_to_copy.all_icons,
      ], {
        base: PATH_TO.source.root
      }),
      dest(PATH_TO.build.root)
  );
}
