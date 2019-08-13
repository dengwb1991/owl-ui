import Vue from 'vue'
import OwlPicker from './src/main'
import CreateAPI from 'owl-create-api'

OwlPicker.install = function (Vue) {
  Vue.component(OwlPicker.name, OwlPicker)
}

Vue.use(CreateAPI, {
  componentPrefix: 'Owl'
})

Vue.createAPI(OwlPicker)

export default OwlPicker
