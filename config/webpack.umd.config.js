const path = require('path');
const config = require('./webpack.base.config');

config.output = {
  path: path.resolve(__dirname, '../dist/umd'),
  publicPath: '/',
  filename: 'vue-xolas-ui.min.js',
  library: 'VueXolasUI',
  libraryTarget: 'umd',
  libraryExport: 'default',
};

config.entry = './src/index.js';

module.exports = config;
