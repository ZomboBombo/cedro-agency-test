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
      root: './source/sass/',
      main_style_file: './source/sass/styles.scss',
    },
    js: {
      root: './source/js/',
      main_files: './source/js/*.js',
      vendor_files: 'source/js/vendor/*.js',
    },
    fonts: './source/fonts/',
    images: './source/img/',
  },


  /*
  ===========================
  --- Директория "build/" ---
  ===========================
  */
  build: {
    root: './build/',
    css: './build/css/',
    js: './build/js/',
    images: './build/img/',
  }
};
