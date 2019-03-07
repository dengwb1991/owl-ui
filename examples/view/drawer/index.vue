<template>
  <OwlPage class="examples-drawer">
    <owl-button @click="open('down')">down</owl-button>
    <owl-button @click="open('up')">up</owl-button>
    <owl-button @click="open('right')">right</owl-button>
    <owl-button @click="open2('left')">left</owl-button>
    <owl-drawer :visible.sync="visible"
                :placement="placement"
                :z-index="zIndex"
                @callback="callback">
      <p>内容部分</p>
    </owl-drawer>
  </OwlPage>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      placement: 'down',
      zIndex: 1200
    }
  },
  methods: {
    open (placement) {
      this.placement = placement
      this.visible = true
    },
    callback (val) {
      console.log('callback', val)
    },
    open2 (placement) {
      this.$drawer({
        $props: {
          placement
        },
        $events: {
          callback: e => console.log('$drawer callback', e)
        }
      }, createElement => {
        return [
          createElement('p', {
            'class': {
              'content': true
            }
          }, '内容部分')
        ]
      }).show()
    }
  }
}
</script>

<style lang="less" scoped>
.examples-drawer {
  text-align: center;
}
button {
  margin: 20px 0;
}
</style>