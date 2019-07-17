import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    siderIsCollapsed: false
  },
  getters: {
    siderIsCollapsed (state) {
      return state.siderIsCollapsed
    }
  },
  mutations: {
    changeSiderIsCollapsed (state) {
      state.siderIsCollapsed = !state.siderIsCollapsed
    }
  },
  actions: {

  }
})
