const { resolve } = require('path');

module.exports = function nuxtVueXolasUI(moduleOptions) {
  // Conditionally require semantic-ui original css too if not explicitly disabled
  if (moduleOptions.css !== false) {
    this.options.css.unshift('semantic-ui-css/semantic.min.css');
  }

  // Add vendor
  this.addVendor('vue-xolas-ui');

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'vue-xolas-ui.js',
    moduleOptions,
  });
};

module.exports.meta = require('../package.json');
