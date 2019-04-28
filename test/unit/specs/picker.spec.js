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

  it('picker default', () => {
    vm = createPicker({
      data: [1, 2, 3, 4, 5, 6, 7],
      title: 'Title'
    })
    const data = vm.$el.querySelector('.owl-picker-container-scroll').getElementsByTagName('li')
    expect(data.length).to.equal(7)
  })

  it('picker events', () => {
    const cancelHandler = sinon.spy()
    const confirmHandler = sinon.spy()

    vm = createPicker({
      data: [1, 2, 3, 4, 5, 6, 7]
    }, {
      confirm: confirmHandler,
      cancel: cancelHandler
    })

    vm.show()
    const cancel = vm.$el.querySelector('.owl-picker-cancel')
    cancel.click()
    expect(cancelHandler).to.be.calledOnce

    vm.show()
    const confirm = vm.$el.querySelector('.owl-picker-confirm')
    confirm.click()
    expect(confirmHandler).to.be.calledOnce
  })
})