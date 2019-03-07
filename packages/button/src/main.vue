<template>
  <button :class="['owl-button', type]" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'OwlButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>