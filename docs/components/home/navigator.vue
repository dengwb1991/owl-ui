<template>
  <div class="nav-wrap"
       :style="{'position': position}"
       ref="navigator">
    <div class="logo-wrap" @click="toHome">
      <img :src="logo"/>
      <p>Owl UI Design</p>
    </div>
    <div :class="['tabs-wrap', { 'active': showTabs }]">
      <i></i>
      <p @click="introduction">文档</p>
      <p @click="example">示例</p>
    </div>
    <span class="toggle-nav" @click="toggle">
      <i></i>
    </span>
  </div>
</template>

<script>
import logo from '../../assets/images/logo.png'
import bus from '../../plugins/bus'
import { debounce, setScrollTop } from '../../assets/js/utils'

const CLIENT_WIDTH = 960

export default {
  data () {
    return {
      logo,
      showTabs: false,
      position: document.body.offsetWidth < CLIENT_WIDTH ? 'fixed' : 'relative'
    }
  },
  methods: {
    toggle () {
      if (['/home', '/example'].includes(this.$route.path)) {
        this.showTabs = !this.showTabs
      } else {
        bus.$emit('showDrawer')
      }
    },
    introduction () {
      this.$router.push('/zh-cn/introduction')
    },
    example () {
      this.$router.push('/example')
    },
    toHome () {
      this.$router.push('/home')
    },
    boxShadow () {
      const y = window.scrollY
      const height = 15
      const type = y > height && document.body.offsetWidth < CLIENT_WIDTH
      const shadow = type ? '0 1Px 2Px rgba(0, 0, 0, .18)' : 'none'
      this.$refs.navigator && (this.$refs.navigator.style['box-shadow'] = shadow)
    }
  },
  watch: {
    '$route.path': {
      handler: function (path) {
        setScrollTop(0)
        this.showTabs = false
        if (document.body.offsetWidth > CLIENT_WIDTH) {
          this.position = path === '/home' ? 'relative' : 'fixed'
        }
      },
      immediate: true
    }
  },
  created () {
    this.checkScrollTop = debounce(this.boxShadow, 100)
    window.addEventListener('scroll', this.checkScrollTop, false)
  }
}
</script>

<style lang="less" scoped>
.nav-wrap {
  max-width: 1240Px;
  width: 100%;
  background: #FFF;
  overflow: hidden;
  height: 80Px;
  line-height: 80Px;
  // position: fixed;
  // position: relative;
  z-index: 1;
  top: 0;
  transform: translate(-50%, 0);
  left: 50%;
  @media screen and (max-width: 960px) {
    position: fixed;
    height: 42Px;
    line-height: 42Px;
    text-align: center;
    overflow: visible;
    background: rgba(255, 255, 255, .9);
    transform: none;
    left: 0;
    z-index: 1;
    transition: all .5s;
    .active {
      transform: scale(1)!important;
    }
    .tabs-wrap {
      padding-right: 0;
      position: absolute;
      right: 10Px;
      width: 60Px;
      top: 35Px;
      border: 1Px solid #DDD;
      border-radius: 4Px;
      transition: all 0.3s;
      text-align: center;
      background: rgba(255, 255, 255, .9);
      transform: scale(0);
      transform-origin: 80% 0;
      i {
        display: block;
        position: absolute;
        top: -5Px;
        right: 7Px;
        width: 10Px;
        height: 5Px;
        background: #FFF;
        &:before, &:after {
          content: "";
          position: absolute;
          bottom: 0;
          right: 3Px;
          width: 8Px;
          border-top: 1Px solid #DDD;
        }
        &:before {
          transform: rotate(-40deg);
          transform-origin: left bottom;
        }
        &:after {
          right: 0;
          transform: rotate(40deg);
          transform-origin: right bottom;
        }
      }
      p {
        font-size: 12Px;
        display: block;
        margin-left: 0;
        line-height: 35Px;
        &:hover {
          color: #333333;
        }
      }
    }
    .toggle-nav {
      display: flex;
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      align-items: center;
      justify-content: center;
      padding: 0 16Px;
      i {
        margin: 0 2Px;
      }
      &:before, &:after {
        content: "";
        width: 3Px!important;
        height: 3Px!important;
      }
      &:before, &:after, i {
        display: inline-block;
        width: 5Px;
        height: 5Px;
        border-radius: 50%;
        background-color: #646464;
      }
    }
    .logo-wrap {
      padding-left: 0;
      font-size: 0;
      float: none;
      position: relative;
      img {
        width: 20Px;
        height: 23Px;
        vertical-align: middle;
        position: relative;
        top: 0;
        transform: none;
        display: inline-block;
      }
      p {
        font-size: 16Px;
        padding-top: 2Px;
        padding-left: 5Px;
        vertical-align: middle;
        display: inline-block;
      }
    }
  }
}
.toggle-nav {
  display: none;
}
.tabs-wrap {
  padding-right: 40Px;
  float: right;
  i {
    display: none;
  }
  p {
    font-family: PingFangSC-Regular;
    font-size: 18Px;
    color: #333333;
    display: inline-block;
    line-height: 80Px;
    margin-left: 40Px;
    &:hover {
      transition: color .4s;
      color: #2E54EB;
      cursor: pointer;
    }
  }
}
.logo-wrap {
  padding-left: 40Px;
  float: left;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  img {
    width: 39Px;
    height: 45Px;
    position: absolute;
    transform: translate(0, -50%);
    top: 50%;
  }
  p {
    font-family: SFProDisplay-Medium;
    font-size: 22Px;
    padding-left: 60Px;
    color: #222;
    letter-spacing: 0.73Px;
  }
}
</style>