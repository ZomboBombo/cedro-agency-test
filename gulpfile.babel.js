import { task, series } from 'gulp';

// --- Импортирование кастомных модулей из директории "gulp-config/tasks" ---
import html from './gulp-config/tasks/html';
import css from './gulp-config/tasks/css';
import scripts from './gulp-config/tasks/scripts';
import { sprite, imagesoptimisation } from './gulp-config/tasks/images';
import copy from './gulp-config/tasks/copy';
import clean from './gulp-config/tasks/clean';

// --- Импорт утилитарного модуля ---
import Utils from './gulp-config/gulp-utils';


/*
=====================================================
----------------------- ТАСКИ -----------------------
=====================================================
*/

// --- Таск для ручной оптимизации проектных изображений ---
task('imagesoptimisation', (done) => {
  imagesoptimisation();
  done();
});


// --- Основной таск для поднятия сервера ---
task('server', () => {
  Utils.browserSync.init({
    server: {
      baseDir: './build',
    },

    notify: false,
    open: true,
    port: 9000,
    injectchanges: true,

    files: [
      {
        match: ['source/*.html'],
        fn: series(html, 'refresh')
      },
      {
        match: ['source/sass/**/*.{scss,sass}'],
        fn: series(css)
      },
      {
        match: ['source/js/**/*.js'],
        fn: series(scripts, 'refresh')
      },
      {
        match: ['source/img/**/icon-*.svg'],
        fn: series(sprite, html, 'refresh')
      }
    ],
  });
});

// --- Таск для перезагрузки страницы в браузере ---
task('refresh', (done) => {
  Utils.browserSync.reload();
  done();
});


/*
==========================================================================
--- Основные задачи для Сборки проекта в 'продакшн' и поднятие Сервера ---
==========================================================================
*/
task('build', series(clean, copy, css, scripts, sprite, html));
task('start', series('build', 'server'));
