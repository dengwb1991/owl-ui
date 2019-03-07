<template>
  <div class="example">
    <p class="title">Default</p>
    <owl-tabs :data="data"
              :active.sync="active"
              :initCallback="initCallback"
              @callback="getData"/>
    <params :data="paramsData"/>
  </div>
</template>

<script>
import Params from './Params'

export default {
  components: {
    Params
  },
  data () {
    return {
      data: ['Google', 'IBM'],
      active: 0,
      initCallback: true,
      result: null,
      paramsData: []
    }
  },
  methods: {
    getData (res) {
      this.result = res
    },
    getParamsData () {
      this.paramsData = Object.entries({
        data: this.data,
        active: this.active,
        initCallback: this.initCallback,
        result: this.result
      })
    }
  },
  watch: {
    active: 'getParamsData',
    result: 'getParamsData'
  },
  created () {
    this.getParamsData()
  }
}
</script>

<style lang="less" scoped>
.title {
  font-family: PingFangSC-Medium;
  font-size: 48px;
  padding: 20px 0 20px 20px;
}
</style>