<template>
  <div class="page-wrap">
    <contents/>
    <features/>
  </div>
</template>

<script>
import Contents from './components/home/contents'
import Features from './components/home/features'

export default {
  components: {
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
