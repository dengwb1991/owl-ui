<template>
  <div class="docs-view">
    <section class="nav">
      <nav-list/>
    </section>
    <section class="md">
      <router-view/>
    </section>
    <section class="phone">
      <phone/>
    </section>
    <owl-drawer :visible.sync="visible"
                placement="right">
      222
    </owl-drawer>
  </div>
</template>

<script>
import NavList from './nav-list'
import Phone from './phone'
import bus from '../../plugins/bus'

export default {
  components: {
    NavList,
    Phone
  },
  data () {
    return {
      visible: false
    }
  },
  beforeDestroy () {
    bus.$off('showDrawer')
  },
  created () {
    bus.$on('showDrawer', () => {
      this.visible = true
    })
  }
}
</script>

<style lang="less" src="../../../src/styles/packages/drawer.less"></style>
<style lang="less" scoped>
.docs-view {
  section {
    position: relative;
    // overflow: auto;
    display: inline-block;
    box-sizing: border-box;
    &.nav {
      width: 280Px;
      border-right: 1Px solid #DDD;
      @media screen and (max-width: 960px) {
        display: none;
      }
    }
    &.md {
      position: relative;
      flex: 1;
      height: 100%;
      padding: 54px 50px 50px;
      box-sizing: border-box;
      overflow-y: auto;
      @media screen and (max-width: 960px) {
        flex: none;
        height: auto;
        padding: 0;
        overflow-y: visible;
        width: 95%;
        margin: 0 auto;
      }
    }
    &.phone {
      width: 450Px;
      height: 100%;
      overflow-y: auto;
    }
    .example {
      position: absolute;
      transform: translate(0, -50%);
      top: 47%;
      @media screen and (max-width: 960px) {
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
      }
    }
  }
}
</style>