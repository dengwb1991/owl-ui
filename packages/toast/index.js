import Vue from 'vue'
import OwlToast from './src/main'
import CreateAPI from 'owl-create-api'

OwlToast.install = function (Vue) {
  Vue.component(OwlToast.name, OwlToast)
}

Vue.use(CreateAPI, {
  componentPrefix: 'Owl'
})

Vue.createAPI(OwlToast, true, true, true)

export default OwlToast