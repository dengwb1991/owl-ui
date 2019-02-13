<template>
  <div class="example-wrap">
    <div class="phone-main">
      <phone/>
    </div>
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