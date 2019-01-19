<template>
  <div class="nav-wrap">
    <div class="logo-wrap">
      <img :src="logo"/>
      <p>Owl UI Design</p>
    </div>
    <div class="tabs-wrap">
      <p>文档</p>
      <p>示例</p>
      <p>中文</p>
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
  }
}
</script>

<style lang="less" scoped>
.nav-wrap {
  overflow: hidden;
  margin: 0 190Px;
  background: #FFF;
  .tabs-wrap {
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
    float: left;
    position: relative;
    height: 80Px;
    line-height: 80Px;
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