<template>
  <owl-page>
    <div class="examples-picker">
      <example-default/>
      <example-object/>
      <example-set-data/>
      <example-title-slot/>
    </div>
  </owl-page>
</template>

<script>
import exampleDefault from './example-default'
import exampleObject from './example-object'
import exampleSetData from './example-set-data'
import exampleTitleSlot from './example-title-slot'

export default {
  components: {
    exampleDefault,
    exampleObject,
    exampleSetData,
    exampleTitleSlot
  }
}
</script>

<style lang="less" scoped>
.examples-picker {
  padding: 30px;
}
</style>