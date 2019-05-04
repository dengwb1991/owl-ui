<template>
  <owl-page>
    <div class="examples-select">
      <example-default/>
    </div>
  </owl-page>
</template>

<script>
import exampleDefault from './example-default'

export default {
  components: {
    exampleDefault
  }
}
</script>

<style lang="less" scoped>
.examples-select {
  padding: 30px;
}
</style>