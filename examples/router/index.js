import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/button'
    },
    {
      path: '/button',
      component: () => import('../view/button/Index')
    },
    {
      path: '/tabs',
      component: () => import('../view/tabs/Index')
    }
  ]
})

export default router