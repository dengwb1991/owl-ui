<template>
  <div class="owl-switch">
    <input class="owl-switch-input"
           type="checkbox"
           v-model="checkboxValue"
           :disabled="disabled"/>
    <i class="owl-switch-ui"></i>
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
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      checkboxValue: this.value
    }
  },
  watch: {
    value (newVal) {
      this.checkboxValue = newVal
    },
    checkboxValue (newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>