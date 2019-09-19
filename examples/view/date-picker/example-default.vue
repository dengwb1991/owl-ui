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
      pickerParams: [],
      picker: null,
      result: null
    }
  },
  methods: {
    show () {
      this.picker.show()
    },
    load () {
      this.pickerParams = Object.entries({
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
    })
  }
}
</script>