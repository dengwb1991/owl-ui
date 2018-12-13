<template>
  <div>OwlButton</div>
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

<style scoped>
div {
  width: 100px;
}
</style>