import Vue from 'vue'
import { destroyVM, createVue } from '../util'
import createAPI from 'owl-create-api'
import Toast from 'packages/toast'

function createToast (props = {}, events = {}) {
  const { instantiateComponent } = createAPI
  return instantiateComponent(Vue, Toast, {
    props,
    on: events
  })
}

describe('Toast', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('use', () => {
    Vue.use(Toast)
    expect(Vue.component(Toast.name))
      .to.be.a('function')
  })

  it('default toast', () => {
    vm = createToast({
      text: '欢迎光临'
    })

    const elm = vm.$el.querySelector('.popup-mask').parentNode
    expect(elm.style.display).to.equal('none')
    expect(vm.isVisible).to.be.false
    vm.show()
    expect(vm.isVisible).to.be.true
  })

  it('set time', done => {
    vm = createToast({
      text: '欢迎光临',
      time: 300
    })

    expect(vm.isVisible).to.be.false
    vm.show()
    expect(vm.isVisible).to.be.true
    setTimeout(() => {
      expect(vm.isVisible).to.be.false
      done()
    }, 500)
  })

  it('type success', () => {
    vm = createToast({
      text: '成功提示',
      type: 'success'
    })

    const elm = vm.$el.querySelector('.owl-iconfont-success')
    expect(elm.className).to.equal('owl-iconfont-success')
  })

  it('type failure', () => {
    vm = createToast({
      text: '失败提示',
      type: 'failure'
    })

    const elm = vm.$el.querySelector('.owl-iconfont-failure')
    expect(elm.className).to.equal('owl-iconfont-failure')
  })

  it('type caution', () => {
    vm = createToast({
      text: '警示信息',
      type: 'caution'
    })

    const elm = vm.$el.querySelector('.owl-iconfont-caution')
    expect(elm.className).to.equal('owl-iconfont-caution')
  })

  it('toast api', done => {
    vm = createVue({
      template: `<div></div>`,
      data () {
        return {
          ins: null,
          visible: null
        }
      },
      methods: {
        createToast () {
          this.ins = this.$toast({
            $props: {
              text: '内容部分'
            },
            $events: {
              callback: e => this.visible = e
            }
          })
        },
        show () {
          this.ins.show()
        },
        hide () {
          this.ins.hide()
        }
      }
    })

    vm.createToast()
    vm.show()

    setTimeout(() => {
      expect(vm.visible).to.equal(true)
      // vm.hide()
      // setTimeout(() => {
      //   expect(vm.visible).to.equal(false)
      //   done()
      // }, 500)
      done()
    }, 500)
  })
})