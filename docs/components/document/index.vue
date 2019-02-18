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
                :containerStyle="containerStyle"
                placement="right">
      <nav-list/>
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
      visible: false,
      containerStyle: {
        width: '12em'
      }
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
  padding-top: 80Px;
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  flex-wrap: wrap;
  @media screen and (max-width: 960px) {
    padding-top: 20Px;
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 80Px;
    width: 100%;
    border-top: 1Px solid #DDD;
    @media screen and (max-width: 960px) {
      content: none;
    }
  }
  section {
    position: relative;
    box-sizing: border-box;
    @media screen and (max-width: 960px) {
      display: block;
    }
    &.nav {
      width: 280Px;
      border-right: 1Px solid #DDD;
      height: 100%;
      overflow-y: scroll;
      @media screen and (max-width: 960px) {
        display: none;
      }
    }
    &.md {
      position: relative;
      flex: 1;
      height: 100%;
      padding: 54px 50px 50px 120px;
      box-sizing: border-box;
      overflow-y: auto;
      @media screen and (max-width: 960px) {
        flex: none;
        height: auto;
        padding: 0;
        overflow-y: visible;
        width: 90%;
        margin: 0 auto;
      }
    }
    &.phone {
      width: 450Px;
      height: 100%;
      overflow-y: auto;
      @media screen and (max-width: 960px) {
        display: none;
        overflow-y: visible;
      }
    }
    .example {
      position: absolute;
      top: 10Px;
      @media screen and (max-width: 960px) {
        margin: 0 auto;
        position: relative;
      }
    }
  }
}
</style>