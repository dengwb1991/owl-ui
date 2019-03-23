import Vue from 'vue'
import { destroyVM, createVue } from '../util'
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

  it('default btn', () => {
    const btnHandler = sinon.spy()

    vm = createVue({
      template: `
        <owl-button @click="handle">Default Button</owl-button>
      `,
      methods: {
        handle () {
          return btnHandler()
        }
      }
    })
    vm.$el.click()
    expect(btnHandler).to.be.calledOnce
  })
})
