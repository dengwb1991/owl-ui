<template>
  <div class="popup-mask"
       :style="{ ...maskStyle, zIndex: zIndex - 1 }"
       @click.stop.prevent="handleMask"></div>
</template>

<script>
export default {
  props: {
    name: String,
    maskStyle: Object,
    zIndex: Number
  },
  methods: {
    handleMask (event) {
      this.$emit('click', event)
    }
  }
}
</script>