<template>
  <div class="nav-wrap"
       ref="navigator">
    <div class="logo-wrap" @click="toHome">
      <img :src="logo"/>
      <p>Owl UI Design</p>
    </div>
    <div class="tabs-wrap">
      <p @click="start">文档</p>
      <p @click="start">示例</p>
    </div>
    <span class="toggle-nav">
      <i></i>
    </span>
  </div>
</template>

<script>
import logo from '../../assets/images/logo.png'
import { debounce } from '../../assets/js/utils'

export default {
  data () {
    return {
      logo
    }
  },
  methods: {
    start () {
      this.$router.push('/zh-cn/introduction')
    },
    toHome () {
      this.$router.push('/home')
    }
  },
  watch: {
    '$route.path': {
      handler: function (path) {
        if (path === '/home') {
          window.addEventListener('scroll', this.checkScrollTop, false)
          this.$refs.navigator && (this.$refs.navigator.style['box-shadow'] = 'none')
        } else {
          window.removeEventListener('scroll', this.checkScrollTop, false)
          this.$refs.navigator && (this.$refs.navigator.style['box-shadow'] = '0 1Px 2Px rgba(0, 0, 0, .18)')
        }
      },
      immediate: true
    }
  },
  beforeCreate () {
    this.checkScrollTop = debounce(() => {
      const y = window.scrollY
      const height = 15
      const shadow = y > height ? '0 1Px 2Px rgba(0, 0, 0, .18)' : 'none'
      this.$refs.navigator && (this.$refs.navigator.style['box-shadow'] = shadow)
    }, 100)
  }
}
</script>

<style lang="less" scoped>
.nav-wrap {
  max-width: 1240Px;
  width: 100%;
  margin: 0 auto;
  background: #FFF;
  overflow: hidden;
  height: 80Px;
  line-height: 80Px;
  @media screen and (max-width: 960px) {
    height: 42Px;
    line-height: 42Px;
    text-align: center;
    position: fixed;
    overflow: auto;
    top: 0;
    left: 0;
    z-index: 1;
    transition: all .5s;
    // box-shadow: 0 1Px 2Px rgba(0, 0, 0, .18);
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