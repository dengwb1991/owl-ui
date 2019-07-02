import Vue from 'vue'
import { destroyVM, createVue, createTest } from '../util'
import Select from 'packages/select'

describe('Select', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('use', () => {
    Vue.use(Select)
    expect(Vue.component(Select.name))
      .to.be.a('function')
  })

  it('select default', done => {
    vm = createVue({
      template: `
        <owl-select v-model="result"
                    :data="data"
                    title="选择器"
                    placeholder="请选择"/>
      `,
      data: {
        data: [1, 2, 3, 4, 5, 6],
        result: null
      }
    })

    const selectPicker = vm.$el.querySelector('.owl-drawer-container')
    expect(selectPicker.style.display).to.equal('none')

    vm.$el.querySelector('input').click()
    setTimeout(() => {
      expect(vm.$el.querySelector('.owl-drawer-container').style.display).to.equal('')

      const confirm = vm.$el.querySelector('.owl-picker-confirm')
      confirm.click()
      expect(vm.result).to.equal(1)
      done()
    }, 500)
  })

  it('The value is null. Event show hide', done => {
    vm = createVue({
      template: `
        <owl-select v-model="result"
                    ref="owlSelect"
                    title="选择器"
                    placeholder="请选择"/>
      `,
      data: {
        result: null
      }
    })

    const ref = vm.$refs.owlSelect
    ref.show()
    setTimeout(() => {
      const selectPicker = vm.$el.querySelector('.owl-drawer-container')
      expect(selectPicker.style.display).to.equal('')
      ref.hide()
      setTimeout(() => {
        expect(selectPicker.style.display).to.equal('none')
        done()
      }, 500)
    }, 500)
  })

  it('select object', done => {
    vm = createVue({
      template: `
        <owl-select v-model="result"
                    :data="data"
                    title="选择器"
                    placeholder="请选择"/>
      `,
      data: {
        data: [
          { key: '001', value: 'Cat' },
          { key: '002', value: 'Dog' },
          { key: '003', value: 'Pig' },
          { key: '004', value: 'Cow' },
          { key: '005', value: 'Sheep' },
          { key: '006', value: 'Owl' }
        ],
        result: null
      }
    })

    const selectPicker = vm.$el.querySelector('.owl-drawer-container')
    expect(selectPicker.style.display).to.equal('none')

    vm.$el.querySelector('input').click()
    setTimeout(() => {
      expect(vm.$el.querySelector('.owl-drawer-container').style.display).to.equal('')

      const confirm = vm.$el.querySelector('.owl-picker-confirm')
      confirm.click()
      expect(vm.result).to.equal('001')
      done()
    }, 500)
  })

  it('select object set data', done => {
    vm = createVue({
      template: `
        <owl-select v-model="result"
                    :data="data"
                    title="选择器"
                    placeholder="请选择"
                    @confirm="confirm"/>
      `,
      data: {
        data: [
          { key: '001', value: 'Cat' },
          { key: '002', value: 'Dog' },
          { key: '003', value: 'Pig' },
          { key: '004', value: 'Cow' },
          { key: '005', value: 'Sheep' },
          { key: '006', value: 'Owl' }
        ],
        result: '006',
        val: null
      },
      methods: {
        confirm (val) {
          this.val = val.value
        }
      }
    })

    vm.$el.querySelector('input').click()
    setTimeout(() => {
      expect(vm.$el.querySelector('.owl-drawer-container').style.display).to.equal('')

      const confirm = vm.$el.querySelector('.owl-picker-confirm')
      confirm.click()
      expect(vm.val).to.equal('Owl')

      done()
    }, 500)
  })

  it('Initialization value does not exist', done => {
    vm = createVue({
      template: `
        <owl-select v-model="result"
                    :data="data"
                    title="选择器"
                    placeholder="请选择"
                    @confirm="confirm"/>
      `,
      data: {
        data: [
          { key: '001', value: 'Cat' },
          { key: '002', value: 'Dog' },
          { key: '003', value: 'Pig' },
          { key: '004', value: 'Cow' },
          { key: '005', value: 'Sheep' },
          { key: '006', value: 'Owl' }
        ],
        result: '007',
        val: null
      },
      methods: {
        confirm (val) {
          this.val = val.value
        }
      }
    })

    vm.$el.querySelector('input').click()
    setTimeout(() => {
      expect(vm.$el.querySelector('.owl-drawer-container').style.display).to.equal('')
      const confirm = vm.$el.querySelector('.owl-picker-confirm')
      confirm.click()
      expect(vm.val).to.equal('Cat')
      done()
    }, 500)
  })

  it('select set data', done => {
    vm = createVue({
      template: `
        <owl-select v-model="result"
                    :data="data"
                    title="选择器"
                    placeholder="请选择"
                    @confirm="confirm"/>
      `,
      data: {
        data: [1, 2, 3, 4],
        result: 4,
        val: null
      },
      methods: {
        confirm (val) {
          this.val = val
        }
      }
    })

    vm.$el.querySelector('input').click()
    setTimeout(() => {
      expect(vm.$el.querySelector('.owl-drawer-container').style.display).to.equal('')

      const confirm = vm.$el.querySelector('.owl-picker-confirm')
      confirm.click()
      expect(vm.val).to.equal(4)
      done()
    }, 500)
  })

  it('select callback', done => {
    const callbackHandler = sinon.spy()

    vm = createVue({
      template: `
        <owl-select v-model="result"
                    :data="data"
                    title="选择器"
                    placeholder="请选择"
                    @callback="callback"/>
      `,
      data: {
        data: [1, 2, 3, 4, 5, 6],
        result: null,
      },
      methods: {
        callback () {
          return callbackHandler()
        }
      }
    })

    vm.$el.querySelector('input').click()
    setTimeout(() => {
      expect(callbackHandler).to.be.calledOnce
      done()
    }, 500)
  })

  it('select events', done => {
    const cancelHandler = sinon.spy()
    const confirmHandler = sinon.spy()

    vm = createVue({
      template: `
        <owl-select v-model="result"
                    :data="data"
                    title="选择器"
                    placeholder="请选择"
                    @cancel="cancel"
                    @confirm="confirm"/>
      `,
      data: {
        data: [1, 2, 3, 4, 5, 6],
        result: null,
      },
      methods: {
        cancel () {
          return cancelHandler()
        },
        confirm () {
          return confirmHandler()
        }
      }
    })

    vm.$el.querySelector('input').click()
    setTimeout(() => {
      expect(vm.$el.querySelector('.owl-drawer-container').style.display).to.equal('')

      const confirm = vm.$el.querySelector('.owl-picker-confirm')
      confirm.click()
      expect(confirmHandler).to.be.calledOnce

      vm.$el.querySelector('input').click()
      setTimeout(() => {
        const cancel = vm.$el.querySelector('.owl-picker-cancel')
        cancel.click()
        expect(cancelHandler).to.be.calledOnce
        done()
      }, 500)
    }, 500)
  })
})