import { camelize, lowerCaseFirst, isBoolean } from './util'
import { assert, warn } from './debug'
import apiCreator from './creator'
import instantiateComponent from './instantiate'

function install(Vue, options = {}) {
  const { componentPrefix = 'Owl', apiPrefix = '$' } = options

  Vue.createAPI = function (Component, events = true, single) {
    if (isBoolean(events)) {
      single = events
      events = []
    }
    const api = apiCreator.call(this, Component, events, single)
    const createName = processComponentName(Component, {
      componentPrefix,
      apiPrefix
    })
    Vue.prototype[createName] = Component.$create = api.create
    return api
  }
}

function processComponentName(Component, options) {
  const { componentPrefix, apiPrefix } = options
  const name = Component.name
  assert(name, 'Component must have name while using create-api!')
  const pureName = lowerCaseFirst(name.replace(componentPrefix, ''))
  const camelizeName = `${camelize(`${apiPrefix}${pureName}`)}`
  return camelizeName
}

export default {
  install,
  instantiateComponent,
  version: '__VERSION__'
}
