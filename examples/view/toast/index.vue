<template>
  <owl-page>
    <div class="examples-toast">
      <owl-button @click="open">Use</owl-button>
      <owl-button @click="open1">Show default</owl-button>
      <owl-button @click="open2">Show 1s</owl-button>
      <owl-button @click="open3">Show mask</owl-button>
      <owl-button @click="open4">Show success</owl-button>
      <owl-button @click="open5">Show failure</owl-button>
      <owl-button @click="open6">Show caution</owl-button>
    </div>
  </owl-page>
</template>

<script>
export default {
  data () {
    return {
      ins: null
    }
  },
  methods: {
    open () {
      this.ins = this.$toast('欢迎光临')
    },
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
  },
  beforeDestroy () {
    this.ins && this.ins.hide()
  }
}
</script>

<style lang="less" scoped>
.examples-toast {
  text-align: center;
  padding: 0 30px;
}
button {
  margin: 20px 0;
}
</style>