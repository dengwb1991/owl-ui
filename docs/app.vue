<template>
  <div id="docs">
    <template v-if="isHome">
      <Index/>
    </template>
    <template v-else>
      <section class="nav">
        <NavBar/>
      </section>
      <section class="md">
        <router-view/>
      </section>
      <section class="phone">
        <Example/>
      </section>
    </template>
  </div>
</template>

<script>
import NavBar from './components/nav-bar'
import Example from './components/example'
import Index from './index'
export default {
  name: 'App',
  components: {
    NavBar,
    Example,
    Index
  },
  computed: {
    isHome () {
      return ['/', '/home'].includes(this.$route.path)
    }
  }
}
</script>

<style lang="less">
@import './assets/css/md.less';
@import './assets/css/app.less';
</style>