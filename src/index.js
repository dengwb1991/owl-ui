import Button from '../packages/Button'
import Tabs from '../packages/Tabs'

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