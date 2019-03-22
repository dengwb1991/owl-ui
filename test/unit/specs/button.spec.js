import Vue from 'vue'
import { createTest, destroyVM } from '../util'
import Button from 'packages/button'

describe('Button', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('use', () => {
    Vue.use(Button)
    expect(Vue.component(Button.name))
      .to.be.a('function')
  })

})
