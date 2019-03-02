<template>
  <OwlPage class="examples-drawer">
    <OwlButton @click="open('down')"
                  text="down"/>
    <OwlButton @click="open('up')"
                  text="up"/>
    <OwlButton @click="open('right')"
                  text="right"/>
    <OwlButton @click="open2('left')"
                  text="left"/>
    <OwlDrawer :visible.sync="visible"
               :placement="placement"
               :z-index="zIndex"
               @callback="callback"/>
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