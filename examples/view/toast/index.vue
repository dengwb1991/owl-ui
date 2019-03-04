<template>
  <OwlPage class="examples-toast">
    <owl-button @click="open1"
                text="show default"/>
    <owl-button @click="open2"
                text="show 1s"/>
    <owl-button @click="open3"
                text="show mask"/>
    <owl-button @click="open4"
                text="show success"/>
    <owl-button @click="open5"
                text="show failure"/>
    <owl-button @click="open6"
                text="show caution"/>
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
        text: '当文字超过一行最长的限制后折行',
        maskVisible: true
      }).show()
    },
    open4 () {
      this.$toast({
        text: '成功提示',
        type: 'success'
      }).show()
    },
    open5 () {
      this.$toast({
        text: '失败提示',
        type: 'failure'
      }).show()
    },
    open6 () {
      this.$toast({
        text: '警示信息',
        type: 'caution'
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