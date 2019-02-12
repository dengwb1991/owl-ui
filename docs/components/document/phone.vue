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
      return this.env === 'production' ? './examples/#' : './dist/examples/#'
    }
  }
}
</script>

<style lang="less" scoped>
.example {
  background-image: url('../../assets/images/phone.png');
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 90Px 15Px;
  margin: 0 56Px 0 26Px;
  box-sizing: border-box;
  width: 320Px;
  @media screen and (max-width: 960px) {
    margin: 0;
  }
  iframe {
    width: 100%;
    height: 515Px;
    border: none;
    background-color: #fff;
  }
}
</style>