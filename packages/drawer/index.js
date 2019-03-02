import Vue from 'vue'
import OwlDrawer from './src/main'
import CreateAPI from 'create-api'

OwlDrawer.install = function (Vue) {
  Vue.component(OwlDrawer.name, OwlDrawer)
}

Vue.use(CreateAPI)

Vue.createAPI(OwlDrawer)

export default OwlDrawer
