<template>
  <button :class="['owl-button', typeClass]"
          :style="btnStyle"
          @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'OwlButton',
  props: {
    type: { // default、disabled、light
      type: String,
      default: 'default'
    },
    inline: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    btnStyle: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    typeClass () {
      return {
        'owl-button-default': this.type === 'default',
        'owl-button-disabled': this.type === 'disabled',
        'owl-button-light': this.type === 'light',
        'owl-button-inline': this.inline,
        'owl-button-outline': this.outline
      }
    }
  },
  methods: {
    handleClick (event) {
      if (this.type !== 'disabled') {
        this.$emit('click', event)
      }
    }
  }
}
</script>