import Vue from 'vue'
import { destroyVM, createVue, createTest } from '../util'
import { dispatchTouchStart, dispatchSwipe } from '../event'
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
  /**
   * 默认
   */
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
    }, true)

    const inputDom = vm.$el.querySelector('input')
    expect(inputDom.value).to.equal('20')
    const buttonWrap = vm.$el.querySelector('.owl-range-button-wrap')
    expect(buttonWrap.style.left).to.equal('20%')
  })
  /**
   * 禁用状态
   */
  it('disabled range', () => {
    vm = createTest(Range, {
      disabled: true
    }, true)

    let rangeElm = vm.$el
    expect(rangeElm.classList.contains('owl-range-disabled')).to.be.true
  })
  /**
   * 设置区间
   */
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
  /**
   * 
   */
  it('change min、max、step value', done => {
    vm = createVue({
      template: `
        <owl-range v-model="val"
                  :show-stops="showStops"
                  :min="min"
                  :max="max"
                  :step="step"/>
      `,
      data: {
        showStops: true,
        val: 0,
        min: 0,
        max: 100,
        step: 1
      }
    }, true)

    vm.min = 50
    vm.max = 80
    vm.step = 10
    setTimeout(() => {
      const len = vm.$el.querySelectorAll('.owl-range-stop').length
      expect(len).to.equal(2)
      done()
    }, 500)
  })
  /**
   * Event touch
   */
  it('range event touch range', done => {
    vm = createVue({
      template: `
        <owl-range v-model="val"
                  :disabled="disabled"
                  :min="min"
                  :max="max"
                  :step="step"/>
      `,
      data: {
        val: 0,
        disabled: false,
        min: 0,
        max: 100,
        step: 1
      }
    }, true)

    const buttonWrap = vm.$el.querySelector('.owl-range-button-wrap')
    const range = vm.$el.querySelector('.owl-range-wrap')
    setTimeout(() => {
      dispatchSwipe(range, [
        {
          clientX: range.offsetLeft + 1,
          clientY: range.offsetTop + 1
        },
        {
          clientX: range.offsetLeft + 50,
          clientY: range.offsetTop + 1
        },
        {
          clientX: range.offsetLeft + 500,
          clientY: range.offsetTop + 1
        }
      ])
      done()
    }, 100)
  })

  it('range event touchstart range-button', done => {
    vm = createVue({
      template: `
        <owl-range v-model="val"
                  :disabled="disabled"
                  :min="min"
                  :max="max"
                  :step="step"/>
      `,
      data: {
        val: 0,
        disabled: false,
        min: 0,
        max: 100,
        step: 1
      }
    }, true)

    const buttonWrap = vm.$el.querySelector('.owl-range-button-wrap')
    setTimeout(() => {
      dispatchTouchStart(buttonWrap, {
        clientX: buttonWrap.offsetLeft,
        clientY: buttonWrap.offsetTop
      })
      done()
    }, 100)
  })
})