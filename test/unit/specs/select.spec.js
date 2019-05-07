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
})