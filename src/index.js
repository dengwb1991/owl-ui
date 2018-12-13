import Button from '../packages/button'
import TabBar from '../packages/tab-bar'

const components = [Button, TabBar]

const install = function (Vue, opts = {}) {
  if (install.installed) return

  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  Button
}

module.exports.default = module.exports