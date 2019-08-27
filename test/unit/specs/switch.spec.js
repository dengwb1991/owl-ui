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

  it('init callback event', done => {
    const btnHandler = sinon.spy()

    vm = createVue({
      template: `
        <owl-switch v-model="val"
                    :init-callback="true"
                    :color="color"
                    @callback="handle">
        </owl-switch>
      `,
      data: {
        val: false,
        color: '#584628',
      },
      methods: {
        handle () {
          return btnHandler()
        }
      }
    })

    expect(btnHandler).to.be.called
    setTimeout(() => {
      vm.val = true
      done()
    })
  })
})
