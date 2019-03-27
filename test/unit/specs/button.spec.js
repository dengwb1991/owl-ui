import Vue from 'vue'
import { destroyVM, createVue, createTest } from '../util'
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

  it('disabled btn', () => {
    vm = createTest(Button, {
      type: 'disabled'
    }, true)
    let buttonElm = vm.$el
    expect(buttonElm.classList.contains('owl-button-disabled')).to.be.true
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
