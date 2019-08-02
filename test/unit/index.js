import Vue from 'vue'
import './polyfill.js'
Vue.config.productionTip = false

const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
