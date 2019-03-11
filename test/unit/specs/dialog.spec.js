import Vue from 'vue'
import { createTest, destroyVM, createVue} from '../util'
import instantiateComponent from 'create-api/instantiate'
import Dialog from 'packages/dialog'

function createDialog (props = {}, events = {}) {
  return instantiateComponent(Vue, Dialog, {
    props,
    on: events
  })
}

describe('Dialog', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('use', () => {
    Vue.use(Dialog)
    expect(Vue.component(Dialog.name))
      .to.be.a('function')
  })

  it('multiple button', () => {
    vm = createDialog({
      content: '内容部分',
      btns: [
        { text: '取消' },
        { text: '确定', color: 'rgb(75, 144, 255)' }
      ]
    })
    const btns = vm.$el.querySelector('.owl-dialog-btns').getElementsByTagName('div')
    expect(btns.length).to.equal(2)
    expect(btns[0].textContent).to.equal('取消')
    expect(btns[1].textContent).to.equal('确定')
    expect(btns[1].style.color).to.equal('rgb(75, 144, 255)')
  })

  it('should trigger events', done => {
    const callbackHandler = sinon.spy()

    vm = createDialog({
      content: 'dialog',
      btns: [{ text: '确定' }]
    }, {
      callback: callbackHandler
    })

    const elm = vm.$el.querySelector('.owl-dialog-mask').parentNode
    expect(elm.style.display).to.equal('none')
    expect(vm.isVisible).to.be.false
    vm.show()
    expect(vm.isVisible).to.be.true
    setTimeout(() => {
      expect(callbackHandler).to.be.calledOnce
      done()
    }, 500)
    // console.log(elm.style.display)
    // expect(elm.style.display).to.equal('')


  })
})