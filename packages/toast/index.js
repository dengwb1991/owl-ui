import OwlToast from './src/main'

OwlToast.install = function (Vue) {
  Vue.component(OwlToast.name, OwlToast)
}
export default OwlToast