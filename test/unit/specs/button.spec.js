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

  it('light btn', () => {
    vm = createTest(Button, {
      type: 'light'
    })
    expect(vm.$el.classList.contains('owl-button-light')).to.be.true
  })

  it('disabled btn', () => {
    const btnHandler = sinon.spy()
    vm = createVue({
      template: `
        <owl-button @click="handle" type="disabled">Default Button</owl-button>
      `,
      methods: {
        handle () {
          return btnHandler()
        }
      }
    })
    let buttonElm = vm.$el
    expect(buttonElm.classList.contains('owl-button-disabled')).to.be.true

    buttonElm.click()
    expect(btnHandler).to.not.be.called
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
