import 'babel-polyfill'
import Vue from 'vue'
import App from './app'
import router from './router'
import OwlUI from '../src/index'

Vue.use(OwlUI)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})