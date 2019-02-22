const EVENT_TOGGLE = 'toggle'

export default {
  model: {
    prop: 'visible',
    event: EVENT_TOGGLE
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
}