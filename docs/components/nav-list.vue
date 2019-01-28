<template>
  <nav class="nav-list">
    <ul>
      <li>
        <span class="angle">01</span>
        <p class="label">概览</p>
      </li>
      <li>
        <span class="angle">02</span>
        <p class="label">组件</p>
      </li>
      <li>
        <span class="angle">03</span>
        <p class="label">模块</p>
      </li>
      <!-- <li v-for="(nav, index) in navs"
          :key="index"
          :class="[isActive(nav)]"
          @click="route(nav)">{{nav.name}}</li> -->
    </ul>
  </nav>
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
.nav-list {
  height: 100%;
  padding: 38Px 0;
  box-sizing: border-box;
  overflow-y: auto;
  ul {
    li {
      position: relative;
      width: 100%;
      .label {
        font-family: PingFangSC-Regular;
        font-size: 24Px;
        color: #333;
        letter-spacing: 0.3Px;
        line-height: 53Px;
        margin: 20Px 30Px 0 30Px;
        border-bottom: 1Px solid #DDD;
      }
      span {
        position: absolute;
      }
    }
  }
  // ul {
  //   padding-left: 10Px;
  //   li {
  //     height: 30Px;
  //     line-height: 30Px;
  //     padding: 8Px;
  //     font-size: 18Px;
  //     &:hover {
  //       cursor: pointer;
  //     }
  //   }
  //   .active {
  //     position: relative;
  //     color: #3f6fea;
  //     &:before {
  //       content: "";
  //       position: absolute;
  //       width: 3Px;
  //       height: 25Px;
  //       transform: translate(0, -50%);
  //       top: 50%;
  //       right: 0;
  //       background: #3f6fea;
  //     }
  //   }
  // }
}
</style>