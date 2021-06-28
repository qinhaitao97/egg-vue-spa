'use strict'

import {
  SET_TEST_DATA,
} from './mutation-type'

const mutations = {
  [SET_TEST_DATA](state, data) {
    state.testData = data
  }
}
export default mutations