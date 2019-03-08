import { createTest, destroyVM, createVue} from '../util'
import Drawer from 'packages/drawer'

describe('Drawer', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', () => {
    vm = createTest(Drawer, {
    }, true)
    let buttonElm = vm.$el
    expect(buttonElm.classList.contains('owl-drawer')).to.be.true
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
    const mask = vm.$el.querySelector('.owl-drawer-mask')
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
