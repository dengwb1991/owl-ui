<template>
  <owl-page>
    <div>
      <owl-button @click="show">show</owl-button>
    </div>
  </owl-page>
</template>

<script>
export default {
  methods: {
    show () {
      this.$datePicker({
        $props: {
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
      }).show()
    }
  }
}
</script>