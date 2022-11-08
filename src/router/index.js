import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 映射表  用户配置
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about.vue'),
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/views/detail.vue'),
  },
]
// const store = Vuex.Store()
const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  //全局钩子  路由钩子  组件钩子
  next()
})
router.beforeEach((to, from, next) => {
  next()
})
export default router
