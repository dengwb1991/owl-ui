<template>
  <drag :disabled="disabled"
        @dragstart="dragStart"
        @drag="drag"
        @dragend="dragEnd">
    <div :class="['owl-range', { 'owl-range-disabled': disabled }]">
        <div ref="inner" class="owl-range-wrap">
          <input type="hidden" :value="actualValue"/>
          <div class="owl-range-bar"
              :style="{ width: valuePercent + '%' }"/>
          <div class="owl-range-button-wrap" ref="knob" :style="{ left: valuePercent + '%' }"></div>
        </div>
    </div>
  </drag>
</template>

<script>
import drag from 'helper/drag.js'

export default {
  name: 'OwlRange',
  props: {
    value: [Number, String],
    disabled: {
      type: Boolean,
      default: false
    },
    min: {
      type: [String, Number],
      default: 0
    },
    max: {
      type: [String, Number],
      default: 100
    },
    step: {
      type: [String, Number],
      default: 1
    }
  },
  components: {
    drag
  },
  data () {
    return {
      actualValue: null,
      dragStartValue: null
    }
  },
  computed: {
    _min () {
      return +this.min
    },
    _max () {
      return +this.max
    },
    _step () {
      return +this.step || 1
    },
    valuePercent () {
      return (this.actualValue - this._min) / (this._max - this._min) * 100
    }
  },
  methods: {
    dragStart (event, offset) {
      this.dragStartValue = this.actualValue
      if (event.target === this.$refs.knob) {
        return
      }
      // If the click is out of knob, move it to mouse position
      this.drag(event, offset)
    },
    drag (event, offset) {
      const { offsetWidth } = this.$refs.inner
      this.actualValue = this.round(this.valueFromBounds(offset.left, offsetWidth), this._min, this._max, this._step)
      this.emitInput(this.actualValue)
    },
    dragEnd (event, offset) {
      const { offsetWidth } = this.$refs.inner
      this.actualValue = this.round(this.valueFromBounds(offset.left, offsetWidth), this._min, this._max, this._step)

      if (this.dragStartValue !== this.actualValue) {
        this.emitChange(this.actualValue)
      }
    },
    emitInput (value) {
      this.$emit('input', value)
    },
    emitChange (value) {
      this.$emit('change', value)
    },
    valueFromBounds (point, width) {
      return (point / width) * (this._max - this._min) + this._min
    },
    round (value, min, max, step) {
      if (value <= min) {
        return min
      }

      const roundedMax = Math.floor((max - min) / step) * step + min
      if (value >= roundedMax) {
        return roundedMax
      }

      const normalize = (value - min) / step
      const decimal = Math.floor(normalize)
      const fraction = normalize - decimal

      if (fraction === 0) return value

      if (fraction < 0.5) {
        return step * decimal + min
      } else {
        return step * (decimal + 1) + min
      }
    },
    getVal (val = 0) {
      return this.round(val, this._min, this._max, this._step)
    }
  },
  watch: {
    value: {
      handler (val) {
        this.actualValue = this.getVal(val)
      },
      immediate: true
    },
    min () {
      this.actualValue = this.getVal(this.actualValue)
    },
    max () {
      this.actualValue = this.getVal(this.actualValue)
    },
    step () {
      this.actualValue = this.getVal(this.actualValue)
    }
  }
}
</script>
