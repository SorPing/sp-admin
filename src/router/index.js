import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../views/Index')
    },
    {
      path: '/test',
      component: () => import('../views/Test')
    },
    {
      path: '/404',
      component: () => import('../views/404.vue')
    }
  ]
})
