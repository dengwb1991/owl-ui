<template>
  <div class="example">
    <p class="title">Array & Object</p>
    <OwlTabBar :data="data"
         :active.sync="active"
         :initCallback="initCallback"
         :name="name"
         :lineWidth="lineWidth"
         :highlight="highlight"
         :lineColor="lineColor"
         @callback="getData"/>
    <Params :data="paramsData"/>
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
      data: [{key: 'Google'}, {key: 'IBM'}, {key: 'Apple'}, {key: 'Oracle'}, {key: 'Facebook'}, {key: 'Baidu'}],
      active: 1,
      name: 'key',
      lineWidth: '40px',
      highlight: '#24292e',
      lineColor: '#24292e',
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
        name: this.name,
        lineWidth: this.lineWidth,
        highlight: this.highlight,
        lineColor: this.lineColor,
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