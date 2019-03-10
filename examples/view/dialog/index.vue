<template>
  <owl-page class="examples-dialog">
    <owl-button @click="show1">One button</owl-button>

    <owl-button @click="show2">Multiple button</owl-button>

    <owl-button @click="show3">Click the button not to close</owl-button>

    <owl-button @click="show4">Content slot</owl-button>
  </owl-page>
</template>

<script>
import owl from 'images/common/owl.png'

export default {
  data () {
    return {
      owl
    }
  },
  methods: {
    show1 () {
      this.$dialog({
        $props: {
          content: '内容部分',
          btns: [{
            text: '确定',
            callback: () => console.log('btn callback')
          }]
        },
        $events: {
          callback: e => console.log('visible callback', e)
        }
      }).show()
    },
    show2 () {
      this.$dialog({
        content: '内容部分',
        btns: [
          {
            text: '取消',
            callback: () => console.log('cancel callback')
          },
          {
            text: '确定',
            color: '#4B90FF',
            callback: () => console.log('confirm callback')
          }
        ]
      }).show()
    },
    show3 () {
      this.$dialog({
        content: '内容部分',
        btns: [
          {
            text: '无法关闭',
            callback: () => {
              this.$toast({ text: '无法关闭' }).show()
              return false
            }
          },
          {
            text: '确定',
            color: '#4B90FF',
            callback: () => console.log('confirm callback')
          }
        ]
      }).show()
    },
    show4 () {
      this.$dialog({
        btns: [{ text: '确定' }]
      }, createElement => {
        return [
          createElement('img', {
            attrs: {
              src: this.owl
            }
          })
        ]
      }).show()
    }
  }
}
</script>

<style lang="less" scoped>
.examples-dialog {
  text-align: center;
}
button {
  margin: 20px 0;
}
</style>