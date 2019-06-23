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

  it('input type of tel', () => {
    vm = createVue({
      template: `
        <owl-input v-model="val"
                   :type="type"/>
      `,
      data: {
        val: '13720017500',
        type: 'tel'
      }
    }, true)
    expect(vm.$el.querySelector('input').type).to.equal('tel')
  })

  it('do not enter non-numeric characters when type is tel', () => {
    vm = createVue({
      template: `
        <owl-input v-model="val"
                   :type="type"/>
      `,
      data: {
        val: '123a',
        type: 'tel'
      }
    }, true)
    expect(vm.$el.querySelector('input').value).to.equal('123')
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
                   @eyeToggle="handle"/>
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
    })
  })

  it('handle events', () => {
    const focusHandler = sinon.spy()
    const blurHandler = sinon.spy()
    const changeHandler = sinon.spy()

    vm = createVue({
      template: `
        <owl-input v-model="val"
                   ref="owlInput"
                   @focus="focusHandler"
                   @blur="blurHandler"
                   @change="changeHandler"/>
      `,
      data: {
        val: ''
      },
      methods: {
        focusHandler () {
          return focusHandler()
        },
        blurHandler () {
          return blurHandler()
        },
        changeHandler () {
          return changeHandler()
        }
      }
    })
    const owlInput = vm.$refs.owlInput
    owlInput.handleFocus()
    expect(focusHandler).to.be.called

    owlInput.handleBlur()
    expect(blurHandler).to.be.called

    owlInput.handleChange()
    expect(changeHandler).to.be.called
  })
})
