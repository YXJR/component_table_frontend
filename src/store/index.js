import Vue from 'vue'
import Vuex from 'vuex'
import table from './modules/index.js'
Vue.use(Vuex) //只要调用了use方法,肯定是存在install方法的

let store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    table,
  },
  strict: true,
})

store.subscribe((mutation, state) => {
  //{ type: ns + key, payload }, store.state 参数的格式
  console.log(mutation.type, state)
})
export default store
