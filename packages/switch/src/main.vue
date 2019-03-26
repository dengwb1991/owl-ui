<template>
  <div class="owl-switch">
    <input class="owl-switch-input"
           type="checkbox"
           v-model="checkboxValue"
           :disabled="disabled"/>
    <i class="owl-switch-ui" :style="uiStyle"></i>
    <span class="owl-switch-label"><slot></slot></span>
  </div>
</template>

<script>
export default {
  name: 'OwlSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    initCallback: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      checkboxValue: this.value
    }
  },
  computed: {
    uiStyle () {
      return this.color && this.value && {
        'border-color': this.color,
        'background-color': this.color
      }
    }
  },
  methods: {
    callback (val) {
      this.$emit('callback', val)
    }
  },
  watch: {
    value (val) {
      this.checkboxValue = val
    },
    checkboxValue (val) {
      this.$emit('input', val)
      this.callback(val)
    }
  },
  mounted () {
    this.initCallback && this.callback(this.value)
  }
}
</script>