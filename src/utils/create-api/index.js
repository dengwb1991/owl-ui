import { camelize, escapeReg, isBoolean } from './util'
import { assert, warn } from './debug'
import apiCreator from './creator'
import instantiateComponent from './instantiate'

function install(Vue, options = {}) {
  const {componentName = '', apiPrefix = '$'} = options

  Vue.createAPI = function (Component, events, single) {
    if (isBoolean(events)) {
      single = events
      events = []
    }
    const api = apiCreator.call(this, Component, events, single)
    const createName = processComponentName(Component, {
      componentName,
      apiPrefix,
    })
    Vue.prototype[createName] = Component.$create = api.create
    return api
  }
}

function processComponentName(Component, options) {
  const {componentName, apiPrefix} = options
  const name = Component.name
  assert(name, 'Component must have name while using create-api!')
  const pureName = componentName ? componentName : name
  let camelizeName = `${camelize(`${apiPrefix}${pureName}`)}`
  return camelizeName
}

export default {
  install,
  instantiateComponent,
  version: '__VERSION__'
}
