import documentEvent from '../mixins/document-event.js'

const EVENTS_MOUSE = 'EVENTS_MOUSE'

const EVENTS_TOUCH = 'EVENTS_TOUCH'

export default {
  props: {
    disabled: Boolean,
  },
  mixins: [documentEvent],
  data () {
    return {
      isDrag: false
    }
  },
  events: {
    mousedown (event) {
      return this.dragStart(event, this.offsetByMouse, EVENTS_MOUSE)
    },
    mousemove (event) {
      return this.dragMove(event, this.offsetByMouse, EVENTS_MOUSE)
    },
    mouseup (event) {
      return this.dragEnd(event, this.offsetByMouse, EVENTS_MOUSE)
    },
    mouseleave (event) {
      return this.dragEnd(event, this.offsetByMouse, EVENTS_MOUSE)
    },
    touchstart (event) {
      return this.dragStart(event, this.offsetByTouch, EVENTS_TOUCH)
    },
    touchmove (event) {
      return this.dragMove(event, this.offsetByTouch, EVENTS_TOUCH)
    },
    touchend (event) {
      return this.dragEnd(event, this.offsetByTouch, EVENTS_TOUCH)
    },
    touchcancel (event) {
      return this.dragEnd(event, this.offsetByTouch, EVENTS_TOUCH)
    }
  },
  methods: {
    relativeMouseOffset (offset, base) {
      const bounds = base.getBoundingClientRect()
      return {
        left: offset.clientX - bounds.left,
        top: offset.clientY - bounds.top
      }
    },
    isInTarget (el) {
      if (!el) return false

      if (el === this.$el) {
        return true
      } else {
        return this.isInTarget(el.parentElement)
      }
    },
    offsetByMouse (event) {
      return this.relativeMouseOffset(event, this.$el)
    },
    offsetByTouch (event) {
      const touch = event.touches.length === 0 ? event.changedTouches[0] : event.touches[0]
      return this.relativeMouseOffset(touch, this.$el)
    },
    dragStart (event, f, eventName) {
      if (
        this.disabled ||
        (event.button !== undefined && event.button !== 0) ||
        !this.isInTarget(event.target)
      ) {
        return
      }
      event.cancelable && event.preventDefault()
      this.isDrag = true
      this.$emit('dragstart', event, f(event), eventName, this.$el)
    },
    dragMove (event, f, eventName) {
      if (!this.isDrag) return
      event.preventDefault()
      this.$emit('drag', event, f(event), eventName, this.$el)
    },
    dragEnd (event, f, eventName) {
      if (!this.isDrag) return
      event.preventDefault()
      this.isDrag = false
      this.$emit('dragend', event, f(event), eventName, this.$el)
    }
  },
  render () {
    return this.$slots.default && this.$slots.default[0]
  }
}