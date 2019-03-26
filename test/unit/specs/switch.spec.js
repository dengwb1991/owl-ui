import Vue from 'vue'
import { destroyVM, createVue } from '../util'
import Switch from 'packages/switch'

describe('Switch', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('use', () => {
    Vue.use(Switch)
    expect(Vue.component(Switch.name))
      .to.be.a('function')
  })
})
