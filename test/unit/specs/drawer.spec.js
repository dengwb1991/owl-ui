import Vue from 'vue'
import { createTest, destroyVM, createVue} from '../util'
import Drawer from 'packages/drawer'

describe('Drawer', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('use', () => {
    Vue.use(Drawer)
    expect(Vue.component(Drawer.name))
      .to.be.a('function')
  })

  it('slot contents', () => {
    vm = createVue({
      template: `
        <owl-drawer :visible.sync="visible">{{content}}</owl-drawer>
      `,
      data: {
        content: 'slot content',
        visible: true
      }
    })
    const container = vm.$el.querySelector('.owl-drawer-container')
    expect(container.textContent).to.equal('slot content')
  })

  it('should maskClose not called', () => {
    const maskCloseHandler = sinon.spy()

    vm = createVue({
      template: `
        <owl-drawer :visible.sync="visible"
                    :maskClosable="state"
                    @maskClose="handler"></owl-drawer>
      `,
      data: {
        visible: true,
        state: false
      },
      methods: {
        handler () {
          return maskCloseHandler()
        }
      }
    })

    const mask = vm.$el.querySelector('.popup-mask')
    mask.click()
    expect(maskCloseHandler).to.not.be.called
  })

  it('visible && callback', done => {
    vm = createVue({
      template: `
        <owl-drawer :visible.sync="visible"
                    @callback="callback"></owl-drawer>
      `,
      data: {
        state: true,
        visible: false
      },
      methods: {
        callback (val) {
          this.state = val
        }
      }
    })
    const mask = vm.$el.querySelector('.popup-mask')
    expect(mask.style.display).to.equal('none')

    vm.visible = true
    setTimeout(() => {
      expect(mask.style.display).to.equal('')
      mask.click()
      setTimeout(() => {
        expect(vm.state).to.equal(false)
        expect(vm.visible).to.equal(false)
        done()
      }, 500)
    }, 500)
  })
})
