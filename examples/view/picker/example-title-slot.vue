<template>
  <div>
    <p class="title">Title slot </p>
    <owl-button @click="show">show</owl-button>
    <params :data="pickerParams"/>

    <owl-picker ref="picker"
                :data="pickerData"
                :visible.sync="visible">
      <template slot='title'>
        <div class="title-wrap">
          <p @click="cancel">取消</p>
          <p @click="confirm">确定</p>
        </div>
      </template>
    </owl-picker>
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
      pickerData: ['Google', 'IBM', 'Apple', 'Facebook', 'Baidu'],
      pickerParams: [],
      result: 'Google',
      visible: false
    }
  },
  methods: {
    show () {
      // or this.$refs.picker.show()
      this.visible = true
    },
    cancel () {
      this.$refs.picker.cancel()
    },
    confirm () {
      this.result = this.$refs.picker.confirm()
    },
    load () {
      this.pickerParams = Object.entries({
        data: this.pickerData,
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
.title-wrap {
  width: 100%;
  background-color: #333;
  display: flex;
  justify-content: space-around;
  p {
    font-family: PingFangSC-Medium;
    font-size: 32px;
    color: #FFF;
  }
}
.title {
  font-family: PingFangSC-Medium;
  font-size: 48px;
  padding: 20px 0 20px 20px;
}
</style>