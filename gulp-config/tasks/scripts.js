/*
 ** Служебные комментарии от ESLint
 ** для корректной работы require()
 */

/* eslint no-undef: "error" */
/* eslint-env node */


import { dest } from 'gulp';

// --- JS-утилиты ---
import browserify from 'browserify';
import babelify from 'babelify';

// --- Вспомогательные утилиты ---
import mergeStream from 'merge-stream';
import { glob } from 'glob';
import source from 'vinyl-source-stream';


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
  // --- Список путей к JS-файлам разных категорий ---
  const JsPath = {
    toMainFiles: glob.sync(PATH_TO.source.js.main_files),
    toVendorFiles: glob.sync(PATH_TO.source.js.vendor_files)
  };

  // --- Список имён для новых названий сфомированных файлов ---
  const NameOfReturnFile = {
    mainJs: 'main.js',
    vendorJs: 'vendor.js',
  };

  /*
  --- Функция для трансформирования JS-файлов в синтаксис ES5
  --- с помощью "Browserify"
  */
  const browserifyTransform = (pathToFiles, nameForReturnedFile) => {
    return browserify({
        entries: pathToFiles
      })
      .transform(babelify, {
        presets: ['@babel/preset-env']
      })
      .bundle()
      .pipe(source(nameForReturnedFile));
  };

  // --- Поток для сборки JS-файлов категории "Main" ---
  const mainJsStream = Utils.pipeline(
      browserifyTransform(JsPath.toMainFiles, NameOfReturnFile.mainJs),
      dest(PATH_TO.build.js)
  );

  // --- Поток для сборки JS-файлов категории "Vendor" ---
  const vendorJsStream = Utils.pipeline(
      browserifyTransform(JsPath.toVendorFiles, NameOfReturnFile.vendorJs),
      dest(PATH_TO.build.js)
  );

  return mergeStream(mainJsStream, vendorJsStream);
}
