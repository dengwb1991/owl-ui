<template>
  <OwlPage class="examples-drawer">
    <OwlButton @click="open('down')"
                  text="down"/>
    <OwlButton @click="open('up')"
                  text="up"/>
    <OwlButton @click="open('right')"
                  text="right"/>
    <OwlButton @click="open('left')"
                  text="left"/>
    <OwlDrawer :visible.sync="visible"
               :placement="placement"
               @callback="getStatus"/>
  </OwlPage>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      placement: 'down'
    }
  },
  methods: {
    open (placement) {
      this.placement = placement
      this.visible = true
    },
    getStatus (val) {
      console.log('visible', val)
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