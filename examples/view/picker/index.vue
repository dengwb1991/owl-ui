<template>
  <owl-page>
    <div class="examples-picker">
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
.examples-picker {
  padding: 30px;
}
</style>