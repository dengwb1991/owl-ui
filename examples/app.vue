<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import './assets/css/app.less';
@import '../src/styles/index.less';
// @import '../dist/styles/owl-ui.css';
</style>