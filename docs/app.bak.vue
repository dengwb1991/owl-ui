<template>
  <div id="docs">
    <navigator/>
    <template v-if="isHome">
      <Index/>
    </template>
    <template v-else>
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
      </div>
    </template>
  </div>
</template>

<script>
import Navigator from './components/home/navigator'
import NavList from './components/nav-list'
import Phone from './components/phone'
import Index from './components/home/index'
export default {
  name: 'App',
  components: {
    Navigator,
    NavList,
    Phone,
    Index
  },
  computed: {
    isHome () {
      const type = ['/home'].includes(this.$route.path)
      document.body.style.overflow = !type ? 'hidden' : ''
      return type
    }
  }
}
</script>

<style lang="less">
@import './assets/css/md.less';
@import './assets/css/app.less';
</style>