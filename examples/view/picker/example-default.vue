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
        data: this.pickerData,
        title: 'Title'
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