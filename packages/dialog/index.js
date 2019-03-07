import Vue from 'vue'
import OwlDialog from './src/main'
import CreateAPI from 'create-api'

OwlDialog.install = function (Vue) {
  Vue.component(OwlDialog.name, OwlDialog)
}

Vue.use(CreateAPI)

Vue.createAPI(OwlDialog)

export default OwlDialog