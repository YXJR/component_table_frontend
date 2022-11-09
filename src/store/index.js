import Vue from "vue"
import Vuex from "vuex"
import table from "./modules/table.js"
Vue.use(Vuex)

let store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    table,
  },
})

export default store
