import Vue from 'vue'
import { destroyVM, createVue, createTest } from '../util'
import Tabs from 'packages/tabs'

describe('Tabs', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('use', () => {
    Vue.use(Tabs)
    expect(Vue.component(Tabs.name))
      .to.be.a('function')
  })

  it('default tabs', () => {
    const callbackHandler = sinon.spy()

    vm = createVue({
      template: `
        <owl-tabs :data="items"
                  :active.sync="active"
                  :initCallback="initCallback"
                  @callback="handler"/>
      `,
      data: {
        items: ['Google', 'IBM'],
        active: 0,
        initCallback: true
      },
      methods: {
        handler () {
          return callbackHandler()
        }
      }
    })
    expect(vm.$el.classList.contains('owl-tabs')).to.be.true
    expect(callbackHandler).to.be.calledOnce
  })

  it ('not use line tabs', () => {
    vm = createVue({
      template: `
        <owl-tabs :data="items"
                  :active.sync="active"
                  :lineUse="lineUse"/>
      `,
      data: {
        items: ['Google', 'IBM'],
        active: 0,
        lineUse: false
      }
    })

    expect(!!vm.$el.querySelector('.line')).to.be.false
  })

})
