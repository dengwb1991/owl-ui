import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const components = {}

const requireComponent = require.context('../packages', true, /\.js/)

requireComponent.keys().forEach(filePath => {
  const componentConfig = requireComponent(filePath)
  const key = upperFirst(camelCase(filePath.split('/')[1]))
  components[key] = componentConfig.default || componentConfig
})

const install = function (Vue, opts = {}) {
  if (install.installed) return

  Object.keys(components).forEach(key => {
    const component = components[key]
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  ...components
}

module.exports.default = module.exports