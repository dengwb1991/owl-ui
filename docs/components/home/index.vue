<template>
  <div class="home-page-wrap">
    <contents/>
    <features/>
  </div>
</template>

<script>
import Contents from './contents'
import Features from './features'

export default {
  components: {
    Contents,
    Features
  }
}
</script>

<style lang="less" scoped>
.home-page-wrap {
  width: 100%;
  overflow: hidden;
  padding-top: 80Px;
  @media screen and (max-width: 960px) {
    padding-top: 20Px;
  }
}
</style>
