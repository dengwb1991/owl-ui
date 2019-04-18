import Vue from 'vue'
import OwlPicker from './src/main'

OwlPicker.install = function (Vue) {
  Vue.component(OwlPicker.name, OwlPicker)
}

export default OwlPicker
