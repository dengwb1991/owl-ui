import Vue from 'vue'
import OwlPicker from './src/main'
import CreateAPI from 'create-api'

OwlPicker.install = function (Vue) {
  Vue.component(OwlPicker.name, OwlPicker)
}

Vue.use(CreateAPI)

Vue.createAPI(OwlPicker)

export default OwlPicker
