import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const requireRouter = require.context('.', false, /\.js/)

let routes = []
requireRouter.keys().forEach(fileName => {
  if (fileName === './index.js') return
  const requireConfig = requireRouter(fileName)
  const routerArr = requireConfig.default || requireConfig
  routes = [ ...routes, ...routerArr ]
})

export default new Router({ routes })