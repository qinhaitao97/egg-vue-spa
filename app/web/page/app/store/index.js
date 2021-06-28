'use strict'
import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default function createStore(initState = {}) {
  const state = {
    testData: '',
    ...initState
  }
  return new Vuex.Store({
    state,
    actions,
    getters,
    mutations
  })
}