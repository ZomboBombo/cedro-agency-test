import { src, dest } from 'gulp';

// --- HTML-утилиты ---
import posthtml from 'gulp-posthtml';
import include from 'posthtml-include';

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

// *** Обработка HTML-файлов ***
export default function html() {
  return Utils.pipeline(
      src(PATH_TO.source.html),
      posthtml([
        include()
      ]),
      dest(PATH_TO.build.root)
  );
}
