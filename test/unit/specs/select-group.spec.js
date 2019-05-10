import Vue from 'vue'
import { destroyVM, createVue, createTest } from '../util'
import SelectGroup from 'packages/select-group'

describe('SelectGroup', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('use', () => {
    Vue.use(SelectGroup)
    expect(Vue.component(SelectGroup.name))
      .to.be.a('function')
  })

  it('select-group slot', () => {
    vm = createVue({
      template: `
        <owl-select-group text="阵营">
          <owl-select v-model="result"
                      :data="data"
                      title="选择器"
                      placeholder="请选择"/>
        </owl-select-group>
      `,
      data () {
        return {
          data: ['部落', '联盟'],
          result: null
        }
      }
    })

    expect(vm.$el.classList.contains('owl-select-group')).to.be.true

    let label = vm.$el.querySelector('.owl-select-group-label')
    expect(label.textContent).to.equal('阵营')
  })
})