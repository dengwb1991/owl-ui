<template>
  <div class="owl-input-group">
    <div class="owl-input-group-label">{{text}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'OwlInputGroup',
  props: {
    text: String
  }
}
</script>