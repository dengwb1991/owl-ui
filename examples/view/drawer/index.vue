<template>
  <OwlPage>
    <div class="examples-drawer">
      <owl-button @click="open('down')">Down</owl-button>
      <owl-button @click="open('up')">Up</owl-button>
      <owl-button @click="open('right')">Right</owl-button>
      <owl-button @click="open2('left')">Left</owl-button>
      <owl-drawer :visible.sync="visible"
                  :placement="placement"
                  :z-index="zIndex"
                  @callback="callback">
        <p>内容部分</p>
      </owl-drawer>
    </div>
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
  padding: 0 30px;
}
button {
  margin: 20px 0;
}
</style>