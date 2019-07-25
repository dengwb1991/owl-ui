import Vue from 'vue'
import OwlToast from './src/main'
import CreateAPI from 'create-api'

OwlToast.install = function (Vue) {
  Vue.component(OwlToast.name, OwlToast)
}

Vue.use(CreateAPI)

Vue.createAPI(OwlToast, true, true)

export default OwlToast