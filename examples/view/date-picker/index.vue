<template>
  <owl-page>
    <div class="example-date-picker">
      <example-default/>
      <example-format/>
      <example-min-max/>
      <example-set-data/>
    </div>
  </owl-page>
</template>

<script>
import exampleDefault from './example-default'
import exampleFormat from './example-format'
import exampleMinMax from './example-min-max'
import exampleSetData from './example-set-data'

export default {
  components: {
    exampleDefault,
    exampleFormat,
    exampleMinMax,
    exampleSetData
  }
}
</script>

<style lang="less" scoped>
.example-date-picker {
  padding: 30px;
}
</style>