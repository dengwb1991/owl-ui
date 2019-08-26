<template>
  <div>
    <p class="title">Multiple</p>
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
      pickerData: [['星期六', '星期日'], ['上午', '中午', '下午']],
      // pickerData: [
      //   [
      //     { key: '6', value: '星期六' },
      //     { key: '7', value: '星期日' }
      //   ],
      //   [
      //     { key: 'forenoon', value: '上午' },
      //     { key: 'noon', value: '中午' },
      //     { key: 'afternoon', value: '下午' },
      //   ]
      // ],
      pickerParams: [],
      result: null,
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
        },
        callback: data => {
          console.log('callback:', data)
        }
      }
    })
    /**
     * [object, String] .setData(['星期日', '中午'])
     * [object, Object] .setData(['7', 'noon'])
     */
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