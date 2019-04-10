import Vue from 'vue'
import { destroyVM, createVue, createTest } from '../util'
import InputGroup from 'packages/input-group'

describe('InputGroup', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('use', () => {
    Vue.use(InputGroup)
    expect(Vue.component(InputGroup.name))
      .to.be.a('function')
  })

  it('input-group slot', () => {
    vm = createVue({
      template: `
        <owl-input-group text="姓名">
          <owl-input placeholder="请输入"/>
        </owl-input-group>
      `
    })

    expect(vm.$el.classList.contains('owl-input-group')).to.be.true

    let label = vm.$el.querySelector('.owl-input-group-label')
    expect(label.textContent).to.equal('姓名')
  })
})