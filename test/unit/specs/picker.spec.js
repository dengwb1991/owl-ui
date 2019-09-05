import Vue from 'vue'
import { destroyVM, createVue } from '../util'
import createAPI from 'owl-create-api'
import Picker from 'packages/picker'

function createPicker (props = {}, events = {}) {
  const { instantiateComponent } = createAPI
  return instantiateComponent(Vue, Picker, {
    props,
    on: events
  })
}

describe('Picker', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('use', () => {
    Vue.use(Picker)
    expect(Vue.component(Picker.name))
      .to.be.a('function')
  })
  /**
   * 默认数据
   */
  it('picker default data', () => {
    vm = createPicker({
      data: [1, 2, 3, 4, 5, 6, 7],
      title: 'Title'
    })
    const data = vm.$el.querySelector('.owl-picker-container-scroll').getElementsByTagName('li')
    expect(data.length).to.equal(7)
  })
  /**
   * 没有设置数据
   */
  it('picker not data', () => {
    vm = createPicker()
    const data = vm.$el.querySelector('.owl-picker-container-scroll').getElementsByTagName('li')
    expect(data.length).to.equal(0)
  })
  /**
   * 设置多列数据
   */
  it('picker multiple data', done => {
    vm = createPicker({
      data: [['星期六', '星期日'], ['上午', '中午', '下午']]
    })
    vm.setData(['星期日', '下午'])
    setTimeout(() => {
      const data = [...vm.$el.querySelectorAll('.owl-picker-container-scroll')]
      const firstWheelTransform = data[0].style['-webkit-transform']
      const secondWheelTransform = data[1].style['-webkit-transform']

      expect(firstWheelTransform).to.equal('translate3d(0px, -2em, 0px)')
      expect(secondWheelTransform).to.equal('translate3d(0px, -4em, 0px)')
      done()
    }, 500)
  })
  /**
   * 回调事件
   */
  it('picker events', () => {
    const cancelHandler = sinon.spy()
    const confirmHandler = sinon.spy()

    vm = createPicker({
      data: [1, 2, 3, 4, 5, 6, 7]
    }, {
      confirm: confirmHandler,
      cancel: cancelHandler
    })

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
   * template slot
   */
  it('picker template slot', done => {
    vm = createVue({
      template: `
        <owl-picker ref="picker"
                    :data="pickerData"
                    :visible.sync="visible">
          <template slot="title">
            <div class="title-wrap">
              <p>取消</p>
              <p @click="confirm">确定</p>
            </div>
          </template>
        </owl-picker>
      `,
      data: {
        pickerData: ['Google', 'IBM', 'Apple', 'Facebook', 'Baidu'],
        result: null,
        visible: true
      },
      methods: {
        confirm (val) {
          this.result = this.$refs.picker.confirm()
        }
      }
    })
    setTimeout(() => {
      vm.visible = false
      setTimeout(() => {
        vm.visible = true
        vm.confirm()
        setTimeout(() => {
          expect(vm.result).to.equal('Google')
          done()
        }, 500)
      }, 500)
    }, 500)
  })
})