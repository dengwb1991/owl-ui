import Vue from 'vue'
import OwlDrawer from './src/main'
import CreateAPI from 'owl-create-api'

OwlDrawer.install = function (Vue) {
  Vue.component(OwlDrawer.name, OwlDrawer)
}

Vue.use(CreateAPI, {
  componentPrefix: 'Owl'
})

Vue.createAPI(OwlDrawer)

export default OwlDrawer
