import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      // redirect: '/button'
      component: () => import('../')
    },
    {
      path: '/button',
      component: () => import('../view/Button')
    },
    {
      path: '/tabs',
      component: () => import('../view/Tabs')
    }
  ]
})

export default router