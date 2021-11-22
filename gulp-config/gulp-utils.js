/*
 ** Служебные комментарии от ESLint
 ** для корректной работы require()
 */

/* eslint no-undef: "error" */
/* eslint-env node */


// --- Вспомогательные утилиты ---
const pipeline = require('readable-stream').pipeline;

// --- Серверные утилиты ---
const browserSync = require('browser-sync').create();


export default {
  pipeline: pipeline,
  browserSync: browserSync
};
