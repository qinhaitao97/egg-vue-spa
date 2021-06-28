'use strict'

import * as Type from './mutation-type'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const vm = new Vue()

const actions = {
  FETCH_TEST_DATA: ({ commit, dispatch, state }) => {
    if (!state.testData) {
      const res = vm.$api.getTest()
      const data = res.data.data
      commit(Type.SET_TEST_DATA, data)
    }
  }
}

export default actions