import Vue from 'vue'
import { destroyVM, createVue, createTest } from '../util'
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

  it('disabled', () => {
    vm = createTest(Switch, {
      disabled: true
    }, true)

    let switchElm = vm.$el.querySelector('.owl-switch-input')
    expect(switchElm.disabled).to.be.true
  })

  it('init callback event', () => {
    const btnHandler = sinon.spy()

    createVue({
      template: `
        <owl-switch v-model="val"
                    :initCallback="true"
                    @callback="handle">
        </owl-switch>
      `,
      data: {
        val: true
      },
      methods: {
        handle () {
          return btnHandler()
        }
      }
    })

    expect(btnHandler).to.be.calledOnce
  })

})
