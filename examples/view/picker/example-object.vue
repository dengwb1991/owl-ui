<template>
  <div>
    <p class="title">Object</p>
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
      pickerData: [
        { key: '001', value: 'Cat' },
        { key: '002', value: 'Dog' },
        { key: '003', value: 'Pig' },
        { key: '004', value: 'Cow' },
        { key: '005', value: 'Sheep' },
        { key: '006', value: 'Owl' }
      ],
      pickerParams: [],
      result: null
    }
  },
  methods: {
    show () {
      this.$picker({
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
      }).show()
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