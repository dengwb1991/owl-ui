import Vue from 'vue'
import { destroyVM, createVue, createTest } from '../util'
import Input from 'packages/input'

describe('Input', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('use', () => {
    Vue.use(Input)
    expect(Vue.component(Input.name))
      .to.be.a('function')
  })

})
