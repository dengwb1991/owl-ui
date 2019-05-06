<template>
  <owl-page>
    <div class="examples-select">
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
.examples-select {
  padding: 30px;
}
</style>