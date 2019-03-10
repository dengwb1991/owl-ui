import { createTest, destroyVM, createVue} from '../util'
import Dialog from 'packages/dialog'

describe('Dialog', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', () => {
    vm = createTest(Dialog, {
    }, true)
    let buttonElm = vm.$el
    expect(buttonElm.classList.contains('owl-dialog')).to.be.true
  })
})