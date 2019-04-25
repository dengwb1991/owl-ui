<template>
  <div>
    <p class="title">Set Data</p>
    <owl-button @click="show">show</owl-button>
    <params :data="pickerParams"/>
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
      result: 'Apple',
      picker: null
    }
  },
  methods: {
    show () {
      this.picker.show()
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
    this.picker = this.$picker({
      $props: {
        data: this.pickerData
      },
      $events: {
        confirm: data => {
          this.result = data
          console.log('confirm:', data)
        },
        cancel: data => {
          console.log('cancel:', data)
        }
      }
    }).setData(this.result)
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