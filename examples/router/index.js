import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const requireRouter = require.context('../view/button', false, /[a-zA-Z]*\.vue/)
requireRouter.keys().forEach(fileName => {
  const requireConfig = requireRouter(fileName)
  console.log(requireConfig)
})
const router = new Router({
  routes: [
    {
      path: '/',
      // redirect: '/button'
      component: () => import('../')
    },
    {
      path: '/button',
      component: () => import('../view/button')
    },
    {
      path: '/tabs',
      component: () => import('../view/tabs')
    }
  ]
})

export default router