import Vue from 'vue'
import { destroyVM, createVue } from '../util'
import { dispatchSwipe, dispatchMoveAction } from '../event'
import createAPI from 'owl-create-api'
import DatePicker from 'packages/date-picker'

function createDatePicker (props = {}, events = {}) {
  const { instantiateComponent } = createAPI
  return instantiateComponent(Vue, DatePicker, {
    props,
    on: events
  })
}

describe('DatePicker', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('use', () => {
    Vue.use(DatePicker)
    expect(Vue.component(DatePicker.name))
      .to.be.a('function')
  })
  /**
   * 默认数据 展示/隐藏
   */
  it('date-picker default data', () => {
    const cancelHandler = sinon.spy()
    const confirmHandler = sinon.spy()

    vm = createDatePicker(null, {
      confirm: confirmHandler,
      cancel: cancelHandler
    })

    const scroll = vm.$el.querySelectorAll('.owl-picker-container-scroll')
    expect(scroll.length).to.equal(3)

    vm.show()
    const cancel = vm.$el.querySelector('.owl-picker-cancel')
    cancel.click()
    expect(cancelHandler).to.be.calledOnce

    vm.show()
    const confirm = vm.$el.querySelector('.owl-picker-confirm')
    confirm.click()
    expect(confirmHandler).to.be.calledOnce
  })
  /**
   * 设置默认日期
   */
  it('date-picker setData type string', done => {
    vm = createDatePicker()

    vm.setData('1991/2/24')
    let scroll
    let firstWheelTransform
    let secondWheelTransform
    let thirdWheelTransform
    setTimeout(() => {
      scroll = vm.$el.querySelectorAll('.owl-picker-container-scroll')
      firstWheelTransform = scroll[0].style['-webkit-transform']
      secondWheelTransform = scroll[1].style['-webkit-transform']
      thirdWheelTransform = scroll[2].style['-webkit-transform']

      expect(firstWheelTransform).to.equal('translate3d(0px, -42em, 0px)')
      expect(secondWheelTransform).to.equal('translate3d(0px, -2em, 0px)')
      expect(thirdWheelTransform).to.equal('translate3d(0px, -46em, 0px)')

      vm.setData(new Date('2000/4/1'))
      setTimeout(() => {
        scroll = vm.$el.querySelectorAll('.owl-picker-container-scroll')
        firstWheelTransform = scroll[0].style['-webkit-transform']
        secondWheelTransform = scroll[1].style['-webkit-transform']
        thirdWheelTransform = scroll[2].style['-webkit-transform']

        expect(firstWheelTransform).to.equal('translate3d(0px, -60em, 0px)')
        expect(secondWheelTransform).to.equal('translate3d(0px, -6em, 0px)')
        expect(thirdWheelTransform).to.equal('translate3d(0px, 0em, 0px)')

        done()
      }, 500)
    }, 500)
  })
  /**
   * 最小年份计算
   */
  it('date-picker min year scroll', done => {
    vm = createVue({
      template: `
        <owl-date-picker ref="datePicker"
                         :visible.sync="visible"
                         :max="max"
                         :min="min"/>
      `,
      data: {
        visible: false,
        min: '1991/2/24',
        max: '2019/8/22'
      }
    }, true)
    vm.$refs.datePicker.setData('1991/12/31')
    vm.visible = true
    let scroll = vm.$el.querySelectorAll('.owl-picker-container-scroll')

    function scrollAction (index = 0, operator = '-', step = 10, interval = 4) {
      let scroll = vm.$el.querySelectorAll('.owl-picker-container-scroll')
      const arr = []
      for (let i = 0; i < interval; i++) {
        if (operator === '+') {
          arr.push({
            screenX: scroll[index].offsetLeft,
            screenY: scroll[index].offsetTop + (i * step)
          })
        } else {
          arr.push({
            screenX: scroll[index].offsetLeft,
            screenY: scroll[index].offsetTop - (i * step)
          })
        }
      }
      dispatchSwipe(scroll[index], arr, 10)
      return scroll
    }

    setTimeout(() => {
      scroll = scrollAction(1, '+', 1.1, 4)
      setTimeout(() => {
        scroll = scrollAction(1, '+')
        setTimeout(() => {
          let firstWheelTransform = scroll[0].style['-webkit-transform']
          let secondWheelTransform = scroll[1].style['-webkit-transform']
          let thirdWheelTransform = scroll[2].style['-webkit-transform']
          // 1991/2/24
          expect(secondWheelTransform).to.equal('translate3d(0px, 0em, 0px)')
          expect(thirdWheelTransform).to.equal('translate3d(0px, 0em, 0px)')
          done()
        }, 500)
      }, 800)
    }, 500)

  })
  /**
   * 最小月份计算
   */
  it('date-picker min month scroll', done => {
    vm = createVue({
      template: `
        <owl-date-picker ref="datePicker"
                         :visible.sync="visible"
                         :max="max"
                         :min="min"/>
      `,
      data: {
        visible: false,
        min: '1991/2/24',
        max: '2019/8/22'
      }
    }, true)
    vm.$refs.datePicker.setData('1992/1/31')
    vm.visible = true
    let scroll = vm.$el.querySelectorAll('.owl-picker-container-scroll')

    function scrollAction (index = 0, operator = '-', step = 10, interval = 4) {
      let scroll = vm.$el.querySelectorAll('.owl-picker-container-scroll')
      const arr = []
      for (let i = 0; i < interval; i++) {
        if (operator === '+') {
          arr.push({
            screenX: scroll[index].offsetLeft,
            screenY: scroll[index].offsetTop + (i * step)
          })
        } else {
          arr.push({
            screenX: scroll[index].offsetLeft,
            screenY: scroll[index].offsetTop - (i * step)
          })
        }
      }
      dispatchSwipe(scroll[index], arr, 10)
      return scroll
    }

    setTimeout(() => {
      scroll = scrollAction(0, '+')
      setTimeout(() => {
        scroll = scrollAction(1, '+')
        let firstWheelTransform = scroll[0].style['-webkit-transform']
        let secondWheelTransform = scroll[1].style['-webkit-transform']
        let thirdWheelTransform = scroll[2].style['-webkit-transform']
        // 1991/2/24
        expect(secondWheelTransform).to.equal('translate3d(0px, 0em, 0px)')
        expect(thirdWheelTransform).to.equal('translate3d(0px, 0em, 0px)')
        done()
      }, 800)
    }, 500)
  })

  /**
   * 最大年份
   */
  it('date-picker max year scroll', done => {
    vm = createVue({
      template: `
        <owl-date-picker ref="datePicker"
                         :visible.sync="visible"
                         :max="max"
                         :min="min"/>
      `,
      data: {
        visible: false,
        min: '1991/2/24',
        max: '2019/8/22'
      }
    }, true)
    vm.$refs.datePicker.setData('2018/12/31')
    vm.visible = true
    let scroll = vm.$el.querySelectorAll('.owl-picker-container-scroll')

    function scrollAction (index = 0, operator = '-', step = 10, interval = 4) {
      let scroll = vm.$el.querySelectorAll('.owl-picker-container-scroll')
      const arr = []
      for (let i = 0; i < interval; i++) {
        if (operator === '+') {
          arr.push({
            screenX: scroll[index].offsetLeft,
            screenY: scroll[index].offsetTop + (i * step)
          })
        } else {
          arr.push({
            screenX: scroll[index].offsetLeft,
            screenY: scroll[index].offsetTop - (i * step)
          })
        }
      }
      dispatchSwipe(scroll[index], arr, 10)
      return scroll
    }

    setTimeout(() => {
      scroll = scrollAction(0)
      vm.$refs.datePicker.setData('2019/7/30')
      setTimeout(() => {
        scroll = scrollAction(1)
        setTimeout(() => {
          let firstWheelTransform = scroll[0].style['-webkit-transform']
          let secondWheelTransform = scroll[1].style['-webkit-transform']
          let thirdWheelTransform = scroll[2].style['-webkit-transform']
          // 2019/8/22
          expect(secondWheelTransform).to.equal('translate3d(0px, -14em, 0px)')
          expect(thirdWheelTransform).to.equal('translate3d(0px, 0em, 0px)')
          done()
        }, 800)
      }, 500)
    }, 500)
  })
  /**
   * 最大年份
   */
  it('date-picker max month scroll', done => {
    vm = createVue({
      template: `
        <owl-date-picker ref="datePicker"
                         :visible.sync="visible"
                         :max="max"
                         :min="min"/>
      `,
      data: {
        visible: false,
        min: '1991/2/24',
        max: '2019/12/31'
      }
    }, true)
    vm.$refs.datePicker.setData('2019/12/31')
    vm.visible = true
    let scroll = vm.$el.querySelectorAll('.owl-picker-container-scroll')

    function scrollAction (index = 0, operator = '-', step = 10, interval = 4) {
      let scroll = vm.$el.querySelectorAll('.owl-picker-container-scroll')
      const arr = []
      for (let i = 0; i < interval; i++) {
        if (operator === '+') {
          arr.push({
            screenX: scroll[index].offsetLeft,
            screenY: scroll[index].offsetTop + (i * step)
          })
        } else {
          arr.push({
            screenX: scroll[index].offsetLeft,
            screenY: scroll[index].offsetTop - (i * step)
          })
        }
      }
      dispatchSwipe(scroll[index], arr, 10)
      return scroll
    }

    setTimeout(() => {
      scroll = scrollAction(1, '+', 1.1, 4)
        setTimeout(() => {
          let firstWheelTransform = scroll[0].style['-webkit-transform']
          let secondWheelTransform = scroll[1].style['-webkit-transform']
          let thirdWheelTransform = scroll[2].style['-webkit-transform']
          expect(thirdWheelTransform).to.equal('translate3d(0px, 0em, 0px)')
          done()
        }, 800)
    }, 500)
  })
  /**
   * 其他
   */
  it('date-picker max month scroll', done => {
    vm = createVue({
      template: `
        <owl-date-picker ref="datePicker"
                         :visible.sync="visible"
                         :max="max"
                         :min="min"/>
      `,
      data: {
        visible: false,
        min: '1991/2/24',
        max: '2019/12/31'
      }
    }, true)
    vm.$refs.datePicker.setData('2018/12/31')
    vm.visible = true
    let scroll = vm.$el.querySelectorAll('.owl-picker-container-scroll')

    function scrollAction (index = 0, operator = '-', step = 10, interval = 4) {
      let scroll = vm.$el.querySelectorAll('.owl-picker-container-scroll')
      const arr = []
      for (let i = 0; i < interval; i++) {
        if (operator === '+') {
          arr.push({
            screenX: scroll[index].offsetLeft,
            screenY: scroll[index].offsetTop + (i * step)
          })
        } else {
          arr.push({
            screenX: scroll[index].offsetLeft,
            screenY: scroll[index].offsetTop - (i * step)
          })
        }
      }
      dispatchSwipe(scroll[index], arr, 10)
      return scroll
    }

    setTimeout(() => {
      scroll = scrollAction(1, '+', 1.1, 4)
        setTimeout(() => {
          let firstWheelTransform = scroll[0].style['-webkit-transform']
          let secondWheelTransform = scroll[1].style['-webkit-transform']
          let thirdWheelTransform = scroll[2].style['-webkit-transform']
          expect(thirdWheelTransform).to.equal('translate3d(0px, 0em, 0px)')
          done()
        }, 800)
    }, 500)
  })
})