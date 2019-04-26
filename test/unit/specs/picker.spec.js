import Vue from 'vue'
import { destroyVM, createVue } from '../util'
import instantiateComponent from 'create-api/instantiate'
import Picker from 'packages/picker'

function createDialog (props = {}, events = {}) {
  return instantiateComponent(Vue, Picker, {
    props,
    on: events
  })
}

describe('Picker', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('use', () => {
    Vue.use(Picker)
    expect(Vue.component(Picker.name))
      .to.be.a('function')
  })

})