import Vue from 'vue'
import OwlToast from './src/main'
import CreateAPI from 'create-api'

OwlToast.install = function (Vue) {
  Vue.component(OwlToast.name, OwlToast)
}

Vue.use(CreateAPI, { componentName: 'toast' })

Vue.createAPI(OwlToast, true)

export default OwlToast