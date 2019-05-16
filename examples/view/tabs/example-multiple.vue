<template>
  <div class="example">
    <p class="title">Multiple</p>
    <owl-tabs :data="data"
              :active.sync="active"
              :init-callback="initCallback"
              :tab-width="tabWidth"
              :tab-height="tabHeight"
              :line-width="lineWidth"
              @callback="getData"/>
    <params :data="paramsData"/>
  </div>
</template>

<script>
import params from '../../components/params'

export default {
  components: {
    params
  },
  data () {
    return {
      data: ['Google', 'IBM', 'Apple', 'Oracle', 'Facebook', 'Baidu'],
      active: 0,
      tabWidth: '100px',
      tabHeight: '40px',
      lineWidth: '30px',
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
        tabWidth: this.tabWidth,
        tabHeight: this.tabHeight,
        lineWidth: this.lineWidth,
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