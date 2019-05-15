import Vue from 'vue'
import { destroyVM, createVue } from '../util'
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

  it('visible callback events', done => {
    const callbackHandler = sinon.spy()

    vm = createDialog({
      content: '内容部分',
      btns: [{ text: '确定' }]
    }, {
      callback: callbackHandler
    })

    const elm = vm.$el.querySelector('.popup-mask').parentNode
    expect(elm.style.display).to.equal('none')
    expect(vm.isVisible).to.be.false
    vm.show()
    expect(vm.isVisible).to.be.true
    setTimeout(() => {
      expect(callbackHandler).to.be.calledOnce
      done()
    }, 500)
  })

  it('btns callback events', () => {
    const cancelHandler = sinon.spy()
    const confirmHandler = sinon.spy()

    vm = createDialog({
      content: '内容部分',
      btns: [
        { text: '取消', callback: cancelHandler },
        { text: '取消', callback: confirmHandler }
      ]
    })

    vm.show()
    const cancel = vm.$el.querySelector('.owl-dialog-btns div:first-child')
    cancel.click()
    expect(cancelHandler).to.be.calledOnce

    vm.show()
    const confirm = vm.$el.querySelector('.owl-dialog-btns div:last-child')
    confirm.click()
    expect(confirmHandler).to.be.calledOnce
  })

  it('dialog api', () => {
    const cancelHandler = sinon.spy()
    const confirmHandler = sinon.spy()
    vm = createVue({
      template: `<div></div>`,
      data () {
        return {
          ins: null
        }
      },
      methods: {
        createDialog () {
          this.ins = this.$dialog({
            content: '内容部分',
            btns: [
              { text: '取消', callback: cancelHandler },
              { text: '确定', callback: confirmHandler }
            ]
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
    vm.createDialog()
    vm.show()

    const cancel = vm.ins.$el.querySelector('.owl-dialog-btns  div:first-child')
    cancel.click()
    expect(cancelHandler).to.be.calledOnce

    vm.show()
    const confirm = vm.ins.$el.querySelector('.owl-dialog-btns  div:last-child')
    confirm.click()
    expect(confirmHandler).to.be.calledOnce
  })
})