<template>
  <div class="example-wrap">
    <img class="code" :src="qrCode"/>
  </div>
</template>

<script>
import qrCode from '../../assets/images/qr-code.png'
export default {
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
  .code {
    width: 200Px;
    height: 200Px;
  }
}
</style>