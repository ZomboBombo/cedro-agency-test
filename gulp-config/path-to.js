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
      main_files: './source/asset/js/*.js',
      vendor_files: 'source/asset/js/vendor/*.js',
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
