<template>
  <nav class="nav-list">
    <ul>
      <li>
        <span class="angle">01</span>
        <p class="label">概览</p>
        <img :src="arrow"/>
        <ul>
          <li>
            <a>介绍</a>
          </li>
          <li>
            <a>快速上手</a>
          </li>
        </ul>
      </li>
      <li>
        <span class="angle">02</span>
        <p class="label">组件</p>
        <img :src="arrow"/>
        <ul>
          <li>
            <p class="label">基础</p>
            <ul>
              <li>
                <a>Button</a>
              </li>
              <li>
                <a>Logo</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <span class="angle">03</span>
        <p class="label">模块</p>
        <img :src="arrow"/>
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
import blueArrow from '../assets/images/blue-arrow.png'
import arrow from '../assets/images/arrow.png'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      navs,
      blueArrow,
      arrow
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
      &:hover {
        cursor: pointer;
      }
      li {
        font-family: PingFangSC-Regular;
        font-size: 18Px;
        color: #666666;
        letter-spacing: 0.22Px;
        line-height: 40Px;
        background: #FFFFFF;
        text-indent: 60Px;
        li {
          text-indent: 80Px;
        }
        .label {
          font-family: PingFangSC-Regular;
          font-size: 20Px;
          color: #999;
          letter-spacing: 0.25Px;
          margin: 0;
          height: 48Px;
          line-height: 48Px;
          text-indent: 60Px;
          border-bottom: none;
        }
      }
      a {
        display: block;
        &:hover {
          background: #FBFBFB;
        }
      }
      img {
        position: absolute;
        top: 25Px;
        right: 30Px;
        width: 14Px;
        height: 13Px;
      }
      .label {
        font-family: PingFangSC-Regular;
        font-size: 24Px;
        color: #333;
        letter-spacing: 0.3Px;
        line-height: 53Px;
        margin: 20Px 30Px 12Px 30Px;
        border-bottom: 1Px solid #DDD;
        text-indent: 30Px;
      }
      span {
        position: absolute;
        font-family: PingFangSC-Regular;
        font-size: 22Px;
        color: #CCC;
        letter-spacing: 0.28Px;
        left: 30Px;
        line-height: 30Px;
      }
    }
  }
}
</style>