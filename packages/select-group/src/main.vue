<template>
  <div class="owl-select-group">
    <div class="owl-select-group-label">{{text}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'OwlSelectGroup',
  props: {
    text: String
  }
}
</script>