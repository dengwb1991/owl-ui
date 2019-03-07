<template>
  <div class="example">
    <p class="title">Custom</p>
    <owl-tabs :data="data"
              :active.sync="active"
              :initCallback="initCallback"
              :background="background"
              :activeStyle="activeStyle"
              :lineStyle="lineStyle"
              :name="name"
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
      data: [{key: 'Google'}, {key: 'IBM'}, {key: 'Apple'}, {key: 'Oracle'}, {key: 'Facebook'}, {key: 'Baidu'}],
      active: 0,
      name: 'key',
      background: '#24292e',
      activeStyle: {
        'color': '#FFF',
        'font-family': 'PingFangSC-Medium'
      },
      lineStyle: {
        'width': '40px',
        'background': '#FFF',
        'height': '4px',
        'border-radius': '2px'
      },
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
        background: this.background,
        activeStyle: this.activeStyle,
        lineStyle: this.lineStyle,
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