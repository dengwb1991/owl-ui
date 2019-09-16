import Vue from 'vue'
import { destroyVM, createVue } from '../util'
import createAPI from 'owl-create-api'
import DatePicker from 'packages/date-picker'

function createDatePicker (props = {}, events = {}) {
  const { instantiateComponent } = createAPI
  return instantiateComponent(Vue, DatePicker, {
    props,
    on: events
  })
}

describe('DatePicker', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('use', () => {
    Vue.use(DatePicker)
    expect(Vue.component(DatePicker.name))
      .to.be.a('function')
  })
})