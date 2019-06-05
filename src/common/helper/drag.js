export default {
  props: {
    disabled: Boolean
  },
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
    isInTarget (el) {
      if (!el) return false

      if (el === this.$el) {
        return true
      } else {
        return this.isInTarget(el.parentElement)
      }
    },
    offsetByMouse (event) {
      return relativeMouseOffset(event, this.$el)
    },
    offsetByTouch (event) {
      const touch = event.touches.length === 0 ? event.changedTouches[0] : event.touches[0]
      return relativeMouseOffset(touch, this.$el)
    },
    dragStart (event, fn) {
      if (
        this.disabled ||
        (event.button !== undefined && event.button !== 0) ||
        !this.isInTarget(event.target)
      ) {
        return
      }

      event.preventDefault()
      this.isDrag = true
      this.$emit('dragstart', event, fn(event), this.$el)
    },
    dragMove (event, fn) {
      if (!this.isDrag) return
      event.preventDefault()
      this.$emit('drag', event, fn(event), this.$el)
    },
    dragEnd (event, fn) {
      if (!this.isDrag) return
      event.preventDefault()
      this.isDrag = false
      this.$emit('dragend', event, fn(event), this.$el)
    }
  },
  render () {
    return this.$slots.default && this.$slots.default[0]
  }
}