<template>
  <div>
    <p class="title">Default</p>
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
      pickerData: [1, 2, 3, 4, 5, 6],
      pickerParams: [],
      result: null
    }
  },
  methods: {
    show () {
      const picker = this.$picker({
        $props: {
          data: this.pickerData
        },
        $events: {
          confirm: data => {
            this.result = data
            console.log('confirm:', data)
          },
          cancel: data => {
            this.result = data
            console.log('cancel:', data)
          }
        }
      })
      picker.setData(111).show()
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
.title {
  font-family: PingFangSC-Medium;
  font-size: 48px;
  padding: 20px 0 20px 20px;
}
</style>