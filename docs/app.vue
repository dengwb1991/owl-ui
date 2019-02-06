<template>
  <div id="docs">
    <navigator/>
    <router-view/>
  </div>
</template>

<script>
import Navigator from './components/home/navigator'

export default {
  name: 'App',
  components: {
    Navigator
  }
}
</script>

<style lang="less">
@import './assets/css/md.less';
@import './assets/css/app.less';
</style>