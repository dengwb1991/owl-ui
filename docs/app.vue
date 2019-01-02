<template>
  <div id="docs">
    <section class="nav">
      <NavBar/>
    </section>
    <section class="md">
      <router-view/>
    </section>
    <section class="phone">
      <Example/>
    </section>
    
  </div>
</template>

<script>
import NavBar from './components/nav-bar'
import Example from './components/example'
export default {
  name: 'App',
  components: {
    NavBar,
    Example
  }
}
</script>

<style lang="less">
@import './assets/css/md.less';
@import './assets/css/app.less';
</style>