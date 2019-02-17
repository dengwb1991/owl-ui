<template>
  <div class="example-wrap">
    <div class="phone-main">
      <phone/>
    </div>
    <p class="example-online" @click="examples">online example</p>
    <img class="code" :src="qrCode"/>
  </div>
</template>

<script>
import qrCode from '../../static/images/qr-code.png'
import phone from '../document/phone'
export default {
  components: {
    phone
  },
  data () {
    return {
      qrCode
    }
  },
  methods: {
    examples () {
      location.assign('http://owl-ui.dengwb.com/examples')
    }
  }
}
</script>

<style lang="less" scoped>
.example-wrap {
  padding-top: 80Px;
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    align-items: flex-start;
    display: block;
  }
  .example-online {
    display: none;
    @media screen and (max-width: 960px) {
      font-family: SFProDisplay-Medium;
      display: block;
      font-size: 22Px;
      line-height: 28Px;
      color: #2E54EB;
      padding-bottom: 20Px;
      text-decoration: underline;
    }

  }
  .phone-main {
    @media screen and (max-width: 960px) {
      display: none;
    }
  }
  .code {
    width: 280Px;
    height: 280Px;
  }
}
</style>