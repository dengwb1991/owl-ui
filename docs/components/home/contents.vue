<template>
  <div class="contents-wrap">
    <img class="bg" :src="bg"/>
    <div class="contents">
      <p class="name">Owl UI Design</p>
      <p class="introduce">服务于企业产品的设计体系，基于确定和自然的设计价值观上<br>的模块化解决方案，让设计者和开发者专注于更好的用户体验。</p>
      <div class="badge-wrap">
        <badge v-for="item in badges"
               :type="item"
               :key="item"/>
      </div>
      <button @click="quickStart"><span>开始探索</span></button>
      <button @click="introduction"><span>介绍</span></button>
    </div>
  </div>
</template>

<script>
import bg from '../../assets/images/bg.png'
import badge from './badge'

export default {
  components: {
    badge
  },
  data () {
    return {
      bg,
      badges: ['watch', 'star', 'fork']
    }
  },
  methods: {
    quickStart () {
      this.$router.push('/zh-cn/quick-start')
    },
    introduction () {
      this.$router.push('/zh-cn/introduction')
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
  @media screen and (max-width: 960px) {
    margin: 0 10Px;
    min-height: auto;
    padding-bottom: 50Px;
  }
  .bg {
    float: right;
    padding-top: 65Px;
    max-width: 555Px;
    height: auto;
    @media screen and (max-width: 960px) {
      float: none;
      display: block;
    }
  }
  .contents {
    float: left;
    font-size: 0;
    @media screen and (max-width: 960px) {
      text-align: center;
    }
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
          @media screen and (max-width: 960px) {
            padding-right: 0;
          }
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
        @media screen and (max-width: 960px) {
          content: none;
        }
      }
      &:first-of-type {
        background-color: #2E54EB;
        margin-right: 16Px;
        color: #FFF;
      }
      &:last-of-type {
        background-color: #FFF;
        border: 1Px solid #2E54EB;
        color: #2E54EB;
      }
    }
  }
  .introduce {
    padding-top: 26Px;
    padding-bottom: 13Px;
    font-family: PingFangSC-Light;
    font-size: 20Px;
    color: #666666;
    letter-spacing: 0.25Px;
    line-height: 40Px;
    @media screen and (max-width: 960px) {
      font-size: 14Px;
      line-height: 20Px;
      text-align: left;
      br {
        display: none;
      }
    }
  }
  .name {
    padding-top: 190Px;
    font-family: SFProDisplay-Bold;
    font-size: 70Px;
    color: #222222;
    letter-spacing: 0.88Px;
    transition: all .5s;
    @media screen and (max-width: 960px) {
      opacity: 0;
      height: 0;
      padding-top: 0;
    }
  }
}
</style>