import path from 'path';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

module.exports = {
  context: path.resolve(__dirname, 'source/asset'),
  mode: 'development',
  entry: {
    main: './js/main.js',
    vendor: './js/vendor.js',
  },
  devtool: isDev ? 'source-map' : false,
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'build/asset/js'),
  },
  optimization: {
    minimize: isDev ? false : true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
};
