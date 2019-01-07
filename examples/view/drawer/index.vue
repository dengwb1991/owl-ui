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
               :placement="placement"/>
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