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
      path: '/tab-bar',
      component: () => import('../view/tab-bar/Index')
    }
  ]
})

export default router