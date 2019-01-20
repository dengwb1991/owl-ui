<template>
  <div class="page-wrap">
    <nav-bar/>
    <contents/>
    <features/>
  </div>
</template>

<script>
import NavBar from './components/home/nav-bar'
import Contents from './components/home/contents'
import Features from './components/home/features'

export default {
  components: {
    NavBar,
    Contents,
    Features
  }
}
</script>

<style lang="less" scoped>
.page-wrap {
  width: 100%;
  overflow: hidden;
}
</style>
