<template>
  <owl-page>
    <div class="examples-picker">
      <example-default/>
      <example-object/>
      <example-set-data/>
    </div>
  </owl-page>
</template>

<script>
import exampleDefault from './example-default'
import exampleObject from './example-object'
import exampleSetData from './example-set-data'

export default {
  components: {
    exampleDefault,
    exampleObject,
    exampleSetData
  }
}
</script>

<style lang="less" scoped>
.examples-picker {
  padding: 30px;
}
</style>