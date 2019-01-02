<template>
  <div class="example">
    <iframe :src="`${src}${routePath}`"></iframe>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      env: process.env.NODE_ENV
    }
  },
  computed: {
    routePath() {
      return this.$route.path.replace(/^\/(zh-cn|en)2?/, '')
    },
    src () {
      return this.env === 'production' ? './examples/#' : '../../dist/examples/#'
    }
  }
}
</script>

<style lang="less" scoped>
.example {
  background-image: url('../assets/images/phone.png');
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 100Px 15Px;
  box-sizing: border-box;
  width: 365Px;
  iframe {
    width: 100%;
    height: 580Px;
    background-color: #fff;
  }
}
</style>