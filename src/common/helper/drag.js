import documentEvent from '../mixins/document-event.js'

export default {
  props: {
    disabled: Boolean
  },
  mixins: [documentEvent],
  data () {
    return {
      isDrag: false
    }
  },
  events: {
    mousedown (event) {
      return this.dragStart(event, this.offsetByMouse)
    },
    mousemove (event) {
      return this.dragMove(event, this.offsetByMouse)
    },
    mouseup (event) {
      return this.dragEnd(event, this.offsetByMouse)
    },
    touchstart (event) {
      return this.dragStart(event, this.offsetByTouch)
    },
    touchmove (event) {
      return this.dragMove(event, this.offsetByTouch)
    },
    touchend (event) {
      return this.dragEnd(event, this.offsetByTouch)
    },
    touchcancel (event) {
      return this.dragEnd(event, this.offsetByTouch)
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
    dragStart (event, f) {
      if (
        this.disabled ||
        (event.button !== undefined && event.button !== 0) ||
        !this.isInTarget(event.target)
      ) {
        return
      }
      event.cancelable && event.preventDefault()
      this.isDrag = true
      this.$emit('dragstart', event, f(event), this.$el)
    },
    dragMove (event, f) {
      if (!this.isDrag) return
      event.preventDefault()
      this.$emit('drag', event, f(event), this.$el)
    },
    dragEnd (event, f) {
      if (!this.isDrag) return
      event.preventDefault()
      this.isDrag = false
      this.$emit('dragend', event, f(event), this.$el)
    }
  },
  render () {
    return this.$slots.default && this.$slots.default[0]
  }
}