<template>
  <owl-page>
    <div class="examples-select">
      <example-default/>
      <example-object/>
      <example-set-data/>
      <example-event/>
    </div>
  </owl-page>
</template>

<script>
import exampleDefault from './example-default'
import exampleObject from './example-object'
import exampleSetData from './example-set-data'
import exampleEvent from './example-event'

export default {
  components: {
    exampleDefault,
    exampleObject,
    exampleSetData,
    exampleEvent
  }
}
</script>

<style lang="less" scoped>
.examples-select {
  padding: 30px;
}
</style>