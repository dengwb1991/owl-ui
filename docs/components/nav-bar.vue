<template>
  <div class="nav-bar">
    <div class="owl-ui">Owl UI</div>
    <ul>
      <li v-for="(nav, index) in navs"
          :key="index"
          :class="[isActive(nav)]"
          @click="route(nav)">{{nav.name}}</li>
    </ul>
  </div>
</template>

<script>
import navs from '../assets/json/nav.json'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      navs
    }
  },
  computed: mapState({
    lang: ({ language }) => language.lang
  }),
  methods: {
    route (path) {
      this.$router.push(`/${this.lang}${path.router}`)
    },
    isActive ({ router }) {
      return router === this.$route.path.replace(/^\/(zh-cn|en)2?/, '') ? 'active' : ''
    }
  }
}
</script>

<style lang="less" scoped>
.nav-bar {
  .owl-ui {
    text-align: center;
    padding: 20Px 0;
    font-size: 30Px;
  }
  ul {
    padding-left: 10Px;
    li {
      height: 30Px;
      line-height: 30Px;
      padding: 8Px;
      font-size: 18Px;
      &:hover {
        cursor: pointer;
      }
    }
    .active {
      position: relative;
      color: #3f6fea;
      &:before {
        content: "";
        position: absolute;
        width: 3Px;
        height: 25Px;
        transform: translate(0, -50%);
        top: 50%;
        right: 0;
        background: #3f6fea;
      }
    }
  }
}
</style>