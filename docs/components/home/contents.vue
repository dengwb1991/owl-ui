<template>
  <div class="contents-wrap">
    <div class="contents">
      <p class="name">Owl UI Design</p>
      <p class="introduce">服务于企业产品的设计体系，基于确定和自然的设计价值观上<br>的模块化解决方案，让设计者和开发者专注于更好的用户体验。</p>
      <button>开始探索</button>
      <button>介绍</button>
    </div>
    <img class="bg" :src="bg"/>
  </div>
</template>

<script>
import bg from '../../assets/images/bg.png'

export default {
  data () {
    return {
      bg
    }
  }
}
</script>

<style lang="less" scoped>
.contents-wrap {
  margin-left: 190Px;
  margin-right: 146Px;
  overflow: hidden;
  min-height: 600Px;
  .bg {
    float: right;
    padding-top: 65Px;
    width: 42%;
    height: auto;
  }
  .contents {
    float: left;
    font-size: 0;
    button {
      margin-top: 25Px;
      display: inline-block;
      border: none;
      user-select: none;
      outline: none;
      font-family: PingFangSC-Medium;
      font-size: 16Px;
      width: 114Px;
      height: 40Px;
      letter-spacing: 0.2Px;
      border-radius: 2Px;
      &:first-of-type {
        background-color: #2E54EB;
        margin-right: 16Px;
        color: #FFF;
      }
      &:last-of-type {
        border: 1Px solid #2E54EB;
        color: #2E54EB;
      }
    }
  }
  .introduce {
    padding-top: 26Px;
    font-family: PingFangSC-Light;
    font-size: 20Px;
    color: #666666;
    letter-spacing: 0.25Px;
    line-height: 40Px;
  }
  .name {
    padding-top: 190Px;
    font-family: SFProDisplay-Bold;
    font-size: 70Px;
    color: #222222;
    letter-spacing: 0.88Px;
  }
}
</style>