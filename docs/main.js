import 'babel-polyfill'
import Vue from 'vue'
import App from './app'
import router from './router'
import store from './store'

new Vue({
  el: '#docs',
  router,
  store,
  components: { App },
  template: '<App/>'
})