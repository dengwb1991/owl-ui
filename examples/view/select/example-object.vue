<template>
  <div>
    <p class="title">Default</p>
    <owl-select v-model="result"
                :data="data"
                title="选择器"
                placeholder="请选择"/>
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
      data: [
        { key: '001', value: 'Cat' },
        { key: '002', value: 'Dog' },
        { key: '003', value: 'Pig' },
        { key: '004', value: 'Cow' },
        { key: '005', value: 'Sheep' },
        { key: '006', value: 'Owl' }
      ],
      paramsData: [],
      result: null
    }
  },
  methods: {
    show () {
      this.picker.show()
    },
    load () {
      this.paramsData = Object.entries({
        data: this.data,
        result: this.result
      })
    }
  },
  watch: {
    result: 'load'
  },
  created () {
    this.load()
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