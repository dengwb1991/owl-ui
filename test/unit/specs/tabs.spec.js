import Vue from 'vue'
import { destroyVM, createVue, createTest } from '../util'
import { dispatchSwipe } from '../event'
import Tabs from 'packages/tabs'

describe('Tabs', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('use', () => {
    Vue.use(Tabs)
    expect(Vue.component(Tabs.name))
      .to.be.a('function')
  })
  /**
   * 默认
   */
  it('default tabs', () => {
    const callbackHandler = sinon.spy()

    vm = createVue({
      template: `
        <owl-tabs :data="items"
                  :active.sync="active"
                  :initCallback="initCallback"
                  @callback="handler"/>
      `,
      data: {
        items: ['Google', 'IBM'],
        active: 0,
        initCallback: true
      },
      methods: {
        handler () {
          return callbackHandler()
        }
      }
    })
    expect(vm.$el.classList.contains('owl-tabs')).to.be.true
    expect(callbackHandler).to.be.calledOnce
  })
  /**
   * 无数据
   */
  it('not data tabs', () => {
    const callbackHandler = sinon.spy()

    vm = createVue({
      template: `
        <owl-tabs/>
      `
    })
    const li = vm.$el.querySelector('ul').querySelectorAll('li')
    expect(li.length).to.equal(0)
  })
  /**
   * 下划线
   */
  it('not use line tabs', done => {
    vm = createVue({
      template: `
        <owl-tabs :data="items"
                  :active.sync="active"
                  :lineUse="lineUse"/>
      `,
      data: {
        items: ['Google', 'IBM'],
        active: 0,
        lineUse: false
      }
    })
    expect(!!vm.$el.querySelector('.line')).to.be.false

    const ul = vm.$el.querySelector('ul')
    dispatchSwipe(ul, [
      {
        clientX: ul.offsetLeft + 1,
        clientY: ul.offsetTop
      },
      {
        clientX: ul.offsetLeft + 50,
        clientY: ul.offsetTop
      }
    ], 10)

    const li = vm.$el.querySelector('ul').querySelectorAll('li')
    expect(li.length).to.equal(2)
    li[0].click()
    li[1].click()
    setTimeout(() => {
      expect(vm.active).to.equal(1)
      done()
    }, 500)
  })
  /**
   * 点击滑动tabs
   */
  it('tap & scroll tabs', done => {
    vm = createVue({
      template: `
        <div style="width: 375px; overflow-x:hidden">
          <owl-tabs :data="items"
                    :active.sync="active"
          />
        </div>
      `,
      data: {
        items: [
          { 'key': 'Tab1' },
          { 'key': 'Tab2' },
          { 'key': 'Tab3' },
          { 'key': 'Tab4' },
          { 'key': 'Tab5' },
          { 'key': 'Tab6' }
        ],
        active: 0
      }
    }, true)
    vm.$nextTick(() => {
      const ul = vm.$el.querySelector('ul')
      dispatchSwipe(ul, [
        {
          clientX: ul.offsetLeft + 1,
          clientY: ul.offsetTop
        },
        {
          clientX: ul.offsetLeft + 50,
          clientY: ul.offsetTop
        },
        {
          clientX: ul.offsetLeft + 100,
          clientY: ul.offsetTop 
        },
        {
          clientX: ul.offsetLeft + 800,
          clientY: ul.offsetTop
        }
      ], 10)
      setTimeout(() => {
        const ul = vm.$el.querySelector('ul')
        dispatchSwipe(ul, [
          {
            clientX: ul.offsetLeft - 1,
            clientY: ul.offsetTop
          },
          {
            clientX: ul.offsetLeft - 50,
            clientY: ul.offsetTop
          },
          {
            clientX: ul.offsetLeft - 100,
            clientY: ul.offsetTop 
          },
          {
            clientX: ul.offsetLeft - 800,
            clientY: ul.offsetTop
          }
        ], 10)
        setTimeout(() => {
          const li = ul.querySelectorAll('li')
          li[5].click()
          setTimeout(() => {
            expect(vm.active).to.equal(5)
            done()
          }, 500)
        }, 500)
      }, 500)
    })
  })
})
