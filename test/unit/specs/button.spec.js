import { createTest, destroyVM } from '../util'
import Button from 'packages/button'

describe('Button.vue', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', () => {
    vm = createTest(Button, {
      type: 'mall'
    }, true)
    let buttonElm = vm.$el
    expect(buttonElm.classList.contains('mall')).to.be.true
  })

})
