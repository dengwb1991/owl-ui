<template>
  <div class="contents-wrap">
    <div class="contents">
      <p class="name">Owl UI Design</p>
      <p class="introduce">服务于企业产品的设计体系，基于确定和自然的设计价值观上<br>的模块化解决方案，让设计者和开发者专注于更好的用户体验。</p>
      <button @click="start"><span>开始探索</span></button>
      <button @click="start"><span>介绍</span></button>
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
  },
  methods: {
    start () {
      this.$router.push('/zh-cn/button')
    }
  }
}
</script>

<style lang="less" scoped>
.contents-wrap {
  max-width: 1160Px;
  margin: 0 auto;
  min-height: 650Px;
  overflow: hidden;
  .bg {
    float: right;
    padding-top: 65Px;
    max-width: 555Px;
    height: auto;
    // margin-right: -40Px;
  }
  .contents {
    float: left;
    font-size: 0;
    button {
      position: relative;
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
      span {
        transition: all .4s;
        padding-right: 0;
      }
      &:hover {
        cursor: pointer;
        span {
          padding-right: 20Px;
          &:after {
            opacity: 1;
            right: 10Px;
          }
        }
      }
      span:after {
        content: '»';
        position: absolute;
        opacity: 0;
        transform: translate(0, -50%);
        top: 50%;
        right: 0;
        transition: 0.5s;
      }
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