<template>
  <OwlPage class="examples-toast">
    <owl-button @click="open1"
                text="show default"/>
    <owl-button @click="open2"
                text="show 1s"/>
    <owl-button @click="open3"
                text="show mask"/>
  </OwlPage>
</template>

<script>
export default {
  methods: {
    open1 () {
      const toast = this.$toast({
        $props: {
          text: '欢迎光临'
        },
        $events: {
          callback: e => console.log('callback:', e)
        }
      })
      toast.show()
    },
    open2 () {
      this.$toast({
        text: '欢迎光临',
        time: 1000
      }).show()
    },
    open3 () {
      this.$toast({
        text: '欢迎光临',
        maskVisible: true
      }).show()
    }
  }
}
</script>

<style lang="less" scoped>
.examples-toast {
  text-align: center;
}
button {
  margin: 20px 0;
}
</style>