// --- Вспомогательные утилиты ---
import del from 'del';

// --- Импорт модуля с описанием путей к Файлам проекта ---
import PATH_TO from '../path-to';


/*
=====================================================
------------------- ОСНОВНОЙ ТАСК -------------------
=====================================================
*/

// *** Очистка директории build/ ***
export default function clean() {
  return del(PATH_TO.build.root);
}
