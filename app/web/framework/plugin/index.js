'use strict'

import api from 'network/api'

export default {
  install(Vue) {
    if (!Vue.prototype.hasOwnProperty('$api')) {
      Vue.prototype.$api = api
    }
  }
}