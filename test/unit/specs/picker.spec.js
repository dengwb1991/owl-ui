import Vue from 'vue'
import { destroyVM, createVue } from '../util'
import instantiateComponent from 'create-api/instantiate'
import Picker from 'packages/picker'

function createPicker (props = {}, events = {}) {
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

  it('default picker', () => {
    vm = createPicker({
      data: [1, 2, 3, 4, 5, 6, 7],
      title: 'Title'
    })
    const data = vm.$el.querySelector('.owl-picker-container-scroll').getElementsByTagName('li')
    expect(data.length).to.equal(7)
  })
})