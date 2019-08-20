import Vue from 'vue'
import OwlDatePicker from './src/main'
import CreateAPI from 'owl-create-api'

OwlDatePicker.install = function (Vue) {
  Vue.component(OwlDatePicker.name, OwlDatePicker)
}

Vue.use(CreateAPI, {
  componentPrefix: 'Owl'
})

Vue.createAPI(OwlDatePicker)

export default OwlDatePicker
