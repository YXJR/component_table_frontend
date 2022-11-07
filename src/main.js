import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router/index.js'
import '@/assets/style/base.scss'

import ElementUI from 'element-ui'
//import './element-ui.scss'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

// vuex store  $store
// vue-router  _router  $router $route (原型扩展的,与$store不一样)  两个现成的组件 router-link router-view Vue.use时注入的(install方法)
new Vue({
  router,
  store, //此store的目的是让所有的组件都能访问到store对象
  render: (h) => h(App), //_c()
}).$mount('#app')

//所有组件都能执行到的方法, Vue.mixin({beforeCreate}),拿到store挂载到自己身上
