<template>
  <div>
    <p class="title">Set Data </p>
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
      data: '2019/2/24',
      // data: new Date('2000/4/1'),
      pickerParams: [],
      picker: null,
      result: '[1991,2,24]'
    }
  },
  methods: {
    show () {
      this.picker.show()
    },
    load () {
      this.pickerParams = Object.entries({
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
    this.picker = this.$datePicker({
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
    }).setData(this.data)
  }
}
</script>