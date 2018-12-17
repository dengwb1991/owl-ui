import Button from '../packages/button'
import Tabs from '../packages/tabs'

const components = [Button, Tabs]

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