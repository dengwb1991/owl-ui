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
        data: [1, 2, 3, 4, 5, 6],
        result: 3,
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
      expect(vm.val).to.equal(3)
      done()
    }, 500)
  })
})