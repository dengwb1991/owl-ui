<template>
  <div class="example">
    <p class="title">Not use underline</p>
    <owl-tabs :data="data"
              :active.sync="active"
              :lineUse="lineUse"
              :initCallback="initCallback"
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
      data: ['Google', 'IBM', 'Apple', 'Oracle'],
      active: 0,
      lineUse: false,
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
        lineUse: this.lineUse,
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