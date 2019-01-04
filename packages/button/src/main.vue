<template>
  <button :class="['owl-button', type]" @click="$emit('click')">{{text}}</button>
</template>

<script>
export default {
  name: 'OwlButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    text: String
  }
}
</script>