<template>
  <owl-page>
    <div class="range-example">
      <owl-range v-model="val"
                 :disabled="disabled"
                 :min="min"
                 :max="max"
                 :step="step"
                 @change="change"/>

      <p class="value-wrap">Value：{{val}}</p>

      <owl-prop-switch name="disabled"
                       v-model="disabled"/>
      <br>
      <owl-input-group text="最小值">
        <owl-input placeholder="请输入"
                   type="tel"
                   v-model="min"/>
      </owl-input-group>
      <owl-input-group text="最大值">
        <owl-input placeholder="请输入"
                   type="tel"
                   v-model="max"/>
      </owl-input-group>
      <owl-input-group text="区间">
        <owl-input placeholder="请输入"
                   type="tel"
                   v-model="step"/>
      </owl-input-group>
    </div>
  </owl-page>
</template>

<script>
import OwlPropSwitch from '../../components/owl-prop-switch'

export default {
  components: {
    OwlPropSwitch
  },
  data () {
    return {
      val: 20,
      disabled: false,
      min: 0,
      max: 100,
      step: 1
    }
  },
  methods: {
    change (val) {
      console.log('change:', val)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../src/styles/common/border.less';

.range-example {
  padding: 20px 30px;
  .value-wrap {
    font-size: 28px;
    padding: 30px 0;
  }
  /deep/ .owl-input-group-label {
    padding-left: 30px;
  }
  /deep/ .owl-input-group {
    position: relative;
    .border-bottom-1px()
  }
}
</style>
