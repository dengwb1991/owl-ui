<template>
  <div class="owl-range">
    <div class="owl-range-wrap">
      <input type="hidden" value="val"/>
      <div class="owl-range-bar" style="width: 30%"/>
      <div class="owl-range-button-wrap" style="left: 30%"></div>
    </div>
  </div>
</template>

<script>
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
  data () {
    return {
      actualValue: null
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
      return +this.step
    },
    valuePercent () {
      return (this.actualValue - this._min) / (this._max - this._min) * 100
    }
  },
  methods: {
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
    getVal (val) {
      this.round(val, this._min, this._max, this._step)
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
    }
  }
}
</script>
