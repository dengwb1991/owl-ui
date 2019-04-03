import Vue from 'vue'
import { destroyVM, createVue, createTest } from '../util'
import Input from 'packages/input'

describe('Input', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('use', () => {
    Vue.use(Input)
    expect(Vue.component(Input.name))
      .to.be.a('function')
  })

  it('disabled input', () => {
    vm = createTest(Input, {
      disabled: true
    }, true)
    let buttonElm = vm.$el
    expect(buttonElm.classList.contains('owl-input')).to.be.true
    expect(buttonElm.querySelector('input').disabled).to.be.true
  })

  it('readonly input', () => {
    vm = createTest(Input, {
      readonly: true
    }, true)
    let buttonElm = vm.$el
    expect(buttonElm.classList.contains('owl-input')).to.be.true
    expect(buttonElm.querySelector('input').readOnly).to.be.true
  })

  it('value should be empty when clear button clicked', done => {
    vm = createVue({
      template: `
        <owl-input v-model="val"
                   :clearable="clearable"/>
      `,
      data: {
        val: 1,
        clearable: {
          visible: true,
          blurHidden: false
        }
      }
    })
    expect(vm.$el.querySelector('input').value).is.not.empty
    vm.$el.querySelector('.owl-input-clear').click()
    setTimeout(() => {
      expect(vm.$el.querySelector('input').value).is.empty
      done()
    })
  })

  it('type status  should switch when you click on eye', done => {
    const eyeHandler = sinon.spy()

    vm = createVue({
      template: `
        <owl-input :type="type"
                   v-model="val"
                   @eyeType="handle"/>
      `,
      data: {
        type: 'password',
        val: ''
      },
      methods: {
        handle () {
          return eyeHandler()
        }
      }
    })

    expect(vm.$el.querySelector('input').type).to.equal('password')

    vm.$el.querySelector('.owl-input-eye').click()
    expect(eyeHandler).to.be.calledOnce
    setTimeout(() => {
      expect(vm.$el.querySelector('input').type).to.equal('text')
      done()
    }, 200)
  })
})
