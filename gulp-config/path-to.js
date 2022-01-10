export default {
  /*
  ===========================
  --- Директория "source/" ---
  ===========================
  */
  source: {
    root: './source/',
    html: './source/*.html',
    sass: {
      root: './source/asset/sass/',
      main_style_file: './source/asset/sass/styles.scss',
    },
    js: {
      root: './source/asset/js/',
      main_file: './source/asset/js/main.js',
    },
    fonts: './source/asset/fonts/',
    images: './source/asset/images/',
  },


  /*
  ===========================
  --- Директория "build/" ---
  ===========================
  */
  build: {
    root: './build/',
    css: './build/asset/css/',
    js: './build/asset/js/',
    images: './build/asset/images/',
  }
};
