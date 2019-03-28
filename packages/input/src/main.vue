<template>
  <div class="owl-input">
    <input class="owl-input-field"
           ref="input"
           v-model="inputValue"
           :type="type"
           :placeholder="placeholder"
           :disabled="disabled"
           :readonly="readonly"
           :autofocus="autofocus"
           :autocomplete="autocomplete"
           @focus="handleFocus"
           @blur="handleBlur"
           @change="handleChange"/>
    <div class="owl-input-append"
         v-if="_showClear">
      <div class="owl-input-clear"
           v-if="_showClear"
           @touchstart="handleClear"
           @mousedown="handleClear">
        <i class="owl-iconfont-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OwlInput',
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    type: { // tel、password
      type: String,
      default: 'text'
    },
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: [Boolean, Object],
      default: true
    },
    eye: {
      type: [Boolean, Object],
      default: false
    }
  },
  data () {
    return {
      inputValue: this.value,
      isFocus: false,
      claerVisible: false,
      formatedClearable: {
        visible: false,
        blurHidden: true
      }
    }
  },
  computed: {
    _showClear () {
      let visible = this.formatedClearable.visible && this.inputValue && !this.readonly && !this.disabled
      if (this.formatedClearable.blurHidden && !this.isFocus) {
        visible = false
      }
      return visible
    }
  },
  methods: {
    handleFocus (event) {
      this.$emit('focus', event)
      this.isFocus = true
    },
    handleBlur (event) {
      this.$emit('blur', event)
      this.isFocus = false
    },
    handleChange (event) {
      this.$emit('change', event)
    },
    handleClear () {
      this.inputValue = ''
      this.$refs.input.focus()
    },
    formatClearable() {
      if (typeof this.clearable === 'boolean') {
        this.formatedClearable.visible = this.clearable
      } else {
        Object.assign(this.formatedClearable, this.clearable)
      }
    }
  },
  watch: {
    value (val) {
      this.inputValue = val
    },
    inputValue (val) {
      this.$emit('input', val)
    },
    clearable: {
      handler () {
        this.formatClearable()
      },
      deep: true,
      immediate: true
    }
  }
}
</script>