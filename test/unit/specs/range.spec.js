import Vue from 'vue'
import { destroyVM, createVue, createTest } from '../util'
import Range from 'packages/range'

describe('Range', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('use', () => {
    Vue.use(Range)
    expect(Vue.component(Range.name))
      .to.be.a('function')
  })

  it('default range', () => {
    vm = createVue({
      template: `
        <owl-range v-model="val"
                  :disabled="disabled"
                  :min="min"
                  :max="max"
                  :step="step"/>
      `,
      data: {
        val: 20,
        disabled: false,
        min: 0,
        max: 100,
        step: 1
      }
    })

    const inputDom = vm.$el.querySelector('input')
    expect(inputDom.value).to.equal('20')
    const buttonWrap = vm.$el.querySelector('.owl-range-button-wrap')
    expect(buttonWrap.style.left).to.equal('20%')
  })

  it('disabled range', () => {
    vm = createTest(Range, {
      disabled: true
    }, true)

    let rangeElm = vm.$el
    expect(rangeElm.classList.contains('owl-range-disabled')).to.be.true
  })

  it('show-stops range', () => {
    vm = createTest(Range, {
      showStops: true,
      step: 20,
      min: 0,
      max: 100
    }, true)

    const len = vm.$el.querySelectorAll('.owl-range-stop').length
    expect(len).to.equal(4)
  })
})