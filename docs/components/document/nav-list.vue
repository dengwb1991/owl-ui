<template>
  <nav class="nav-list">
    <ul>
      <li v-for="(nav, index) in list"
          :class="{'active': nav.active}"
          @click="expand($event, index)"
          :key="index">
        <span class="angle">{{nav.num}}</span>
        <p class="label">{{nav.name}}</p>
        <img :class="{'expand': expands[index] }"
             :src="nav.active ? blueArrow : arrow"/>
        <ul :style="{'maxHeight': expands[index] ? nav['max-height'] : '0'}">
          <li v-for="(item, index) in nav.items"
              :class="{'active': item.active}"
              :key="index">
            <template v-if="item.items">
              <p class="label child">{{item.name}}</p>
              <ul>
                <li v-for="(item, index) in item.items"
                    :class="{'active': item.active}"
                    :key="index">
                  <a @click.stop="route(item)">{{item.key}}</a>
                </li>
              </ul>
            </template>
            <template v-else>
              <a @click.stop="route(item)">{{item.key}}</a>
            </template>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import navs from '../../assets/json/nav.json'
import blueArrow from '../../assets/images/blue-arrow.png'
import arrow from '../../assets/images/arrow.png'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      navs,
      blueArrow,
      arrow,
      list: [],
      expands: []
    }
  },
  computed: mapState({
    lang: ({ language }) => language.lang
  }),
  methods: {
    expand (event, index) {
      if (event.target.className.includes('child')) return
      this.$set(this.expands, index, !this.expands[index])
    },
    route (path) {
      this.$router.push(`/${this.lang}${path.router}`)
    },
    isActive ({ router }) {
      return router === this.$route.path.replace(/^\/(zh-cn|en)2?/, '') ? 'active' : ''
    },
    filterNavs (navs, path, module) {
      for (let i = 0, len = navs.length; i < len; i++) {
        let nav = navs[i]
        nav.items && this.filterNavs(nav.items, path, module ? module : nav)
        if (nav.router === path) {
          nav.active = true
          module.active = true
          return
        }
      }
    }
  },
  mounted () {
    this.expands = Array.from({ length: navs.length }, () => true)
    this.$watch('$route.path', (path) => {
      this.list = JSON.parse(JSON.stringify(navs))
      this.filterNavs(this.list, `/${path.split('/').pop()}`)
    }, { immediate: true })
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
    overflow: hidden;
    transition: all 0.5s;
    li {
      position: relative;
      width: 100%;
      &.active p {
        transition: all 0.5s;
        color: #2E54EB;
      }
      &:hover {
        cursor: pointer;
      }
      li {
        position: relative;
        font-family: PingFangSC-Regular;
        font-size: 18Px;
        color: #666666;
        letter-spacing: 0.22Px;
        line-height: 40Px;
        background: #FFFFFF;
        text-indent: 60Px;
        @media screen and (max-width: 960px) {
          text-indent: 20Px;
          font-size: 16Px;
          line-height: 34Px;
        }
        li {
          position: relative;
          text-indent: 80Px;
          @media screen and (max-width: 960px) {
            text-indent: 30Px;
          }
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
          @media screen and (max-width: 960px) {
            text-indent: 20Px;
            font-size: 12Px;
            height: 34Px;
            line-height: 34Px;
          }
        }
      }
      .active a {
        color: #2E54EB;
        background: #E6F1FF!important;
        &:before {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          width: 4Px;
          background: #2E54EB;
        }
      }
      a {
        display: block;
        &:hover {
          background: #FBFBFB;
          color: #2E54EB;
        }
      }
      img {
        position: absolute;
        top: 25Px;
        right: 30Px;
        width: 12Px;
        height: 12Px;
        transition: all 0.5s;
        transform: rotate(-180deg);
        @media screen and (max-width: 960px) {
          display: none;
        }
      }
      .expand {
        transform: rotate(0deg)!important;
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
        @media screen and (max-width: 960px) {
          font-size: 18Px;
          margin: 0;
          text-indent: 10Px;
          line-height: 40Px;
        }
      }
      span {
        position: absolute;
        font-family: PingFangSC-Regular;
        font-size: 22Px;
        color: #CCC;
        letter-spacing: 0.28Px;
        left: 30Px;
        line-height: 30Px;
        @media screen and (max-width: 960px) {
          display: none;
        }
      }
    }
  }
}
</style>