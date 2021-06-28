'use strict'

module.exports = {
  devtool: 'eval',
  target: 'web',
  entry: {
    index: 'app/web/page/app/index.js'
  },
  cssExtract: true,
  // cssModule: true,
  dll: [ 'vue', 'vue-router', 'vuex', 'axios', 'vuex-router-sync', 'vue-i18n' ],
  alias: {
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    page: 'app/web/page',
    network: 'app/web/framework/network',
    utils: 'app/web/framework/utils'
  },
  module: {
    rules: [
      {
        stylus: true
      }
    ]
  }
}