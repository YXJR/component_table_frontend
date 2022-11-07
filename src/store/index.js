import Vue from 'vue'
import Vuex from 'vuex'
import table from './modules/index.js'
Vue.use(Vuex)

let store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    table,
  },
  strict: true,
})

export default store
