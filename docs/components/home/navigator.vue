<template>
  <div class="nav-wrap">
    <div class="logo-wrap" @click="toHome">
      <img :src="logo"/>
      <p>Owl UI Design</p>
    </div>
    <div class="tabs-wrap">
      <p @click="start">文档</p>
      <p @click="start">示例</p>
    </div>
  </div>
</template>

<script>
import logo from '../../assets/images/logo.png'

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
    height: 80Px;
    line-height: 80Px;
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
}
</style>