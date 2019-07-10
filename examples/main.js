import 'babel-polyfill'
import 'flexible'
import Vue from 'vue'
import App from './app'
import router from './router'
import OwlUI from '../src/index.js'
// import OwlUI from '../lib/owl-ui.common.js'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

Vue.use(OwlUI)

const requireComponent = require.context('./components', false, /[a-zA-Z]*\.vue/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})