<template>
  <div class="owl-input">
    <input class="owl-input-field"
           ref="input"
           v-model="inputValue"
           :type="_type"
           :placeholder="placeholder"
           :disabled="disabled"
           :readonly="readonly"
           :autofocus="autofocus"
           :autocomplete="autocomplete"
           :maxLength="maxLength"
           @focus="handleFocus"
           @blur="handleBlur"
           @change="handleChange"/>
    <div class="owl-input-append"
         v-if="_showClear || _showPwdEye">
      <div class="owl-input-clear"
           v-if="_showClear"
           @touchstart="handleClear"
           @mousedown="handleClear"
           @click="handleClear">
        <i class="owl-iconfont-close"></i>
      </div>
      <div class="owl-input-eye"
           v-if="_showPwdEye"
           @click="handlePwdEye">
        <i :class="eyeClass"></i>
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
    maxLength: {
      type: Number,
      default: 60
    },
    clearable: {
      type: [Boolean, Object],
      default: true
    },
    eye: {
      type: [Boolean, Object],
      default: true
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
      },
      formatedEye: {
        open: false,
        reverse: false
      }
    }
  },
  computed: {
    _type () {
      const type = this.type
      if (type === 'password' && this.formatedEye && this.pwdVisible) {
        return 'text'
      }
      return type
    },
    eyeClass () {
      return this.formatedEye.open ? 'owl-iconfont-eye-visible' : 'owl-iconfont-eye-invisible'
    },
    _showPwdEye() {
      return this.type === 'password' && this.eye && !this.disabled
    },
    _showClear () {
      let visible = this.formatedClearable.visible && this.inputValue && !this.readonly && !this.disabled
      if (this.formatedClearable.blurHidden && !this.isFocus) {
        visible = false
      }
      return visible
    },
    pwdVisible() {
      const eye = this.formatedEye
      return eye.reverse ? !eye.open : eye.open
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
    handlePwdEye () {
      this.formatedEye.open = !this.formatedEye.open
      this.$emit('eyeType', this.formatedEye.open)
    },
    formatClearable() {
      if (typeof this.clearable === 'boolean') {
        this.formatedClearable.visible = this.clearable
      } else {
        Object.assign(this.formatedClearable, this.clearable)
      }
    },
    formateEye() {
      if (typeof this.eye === 'boolean') {
        this.formatedEye.open = !this.eye
      } else {
        Object.assign(this.formatedEye, this.eye)
      }
    }
  },
  watch: {
    value (val) {
      this.inputValue = this.type === 'tel' ? !/\D/.test(val.slice(-1)) ? val : val.slice(0, -1) : val
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
    },
    eye: {
      handler() {
        this.formateEye()
      },
      deep: true,
      immediate: true
    }
  }
}
</script>