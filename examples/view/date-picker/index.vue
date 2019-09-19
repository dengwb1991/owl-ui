<template>
  <owl-page>
    <div class="example-date-picker">
      <example-default/>
      <example-format/>
      <example-min-max/>
      <example-set-data/>
      <example-component/>
    </div>
  </owl-page>
</template>

<script>
import exampleDefault from './example-default'
import exampleFormat from './example-format'
import exampleMinMax from './example-min-max'
import exampleSetData from './example-set-data'
import exampleComponent from './example-component'

export default {
  components: {
    exampleDefault,
    exampleFormat,
    exampleMinMax,
    exampleSetData,
    exampleComponent
  }
}
</script>

<style lang="less" scoped>
.example-date-picker {
  padding: 30px;
  /deep/ .title {
    font-family: PingFangSC-Medium;
    font-size: 48px;
    padding: 20px 0 20px 20px;
  }
}

</style>