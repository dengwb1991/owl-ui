<template>
  <owl-page>
    <div class="examples-select">
      <example-default/>
      <example-object/>
    </div>
  </owl-page>
</template>

<script>
import exampleDefault from './example-default'
import exampleObject from './example-object'

export default {
  components: {
    exampleDefault,
    exampleObject
  }
}
</script>

<style lang="less" scoped>
.examples-select {
  padding: 30px;
}
</style>