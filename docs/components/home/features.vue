<template>
  <div class="features-wrap">
    <div class="features">
      <div class="feature"
           v-for="(item, index) in arr"
           :key="index">
        <img :src="item.url"/>
        <p class="name">{{item.name}}</p>
        <p class="en">{{item.en}}</p>
      </div>
      <p class="reserved">© 2018-2019 Dengwb. All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
import quality from '../../assets/images/quality.png'
import experience from '../../assets/images/experience.png'
import standard from '../../assets/images/standard.png'
import scalability from '../../assets/images/scalability.png'

export default {
  data () {
    return {
      arr: [{
        url: quality,
        name: '质量可靠',
        en: 'Quality'
      }, {
        url: experience,
        name: '体验极致',
        en: 'Experience'
      }, {
        url: standard,
        name: '标准规范',
        en: 'Standard'
      }, {
        url: scalability,
        name: '扩展性强',
        en: 'Scalability'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
.features-wrap {
  background-color: #2E54EB;
  overflow: hidden;
  .features {
    position: relative;
    max-width: 1160Px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 70Px;
    padding-bottom: 215Px;
    .feature {
      text-align: center;
    }
    .reserved {
      font-family: PingFangSC-Light;
      font-size: 18Px;
      color: #FFFFFF;
      letter-spacing: 0.22Px;
      line-height: 40Px;
      position: absolute;
      transform: translate(-50%, 0);
      left: 50%;
      bottom: 55Px;
    }
    p {
      font-size: 20Px;
      line-height: 28Px;
      color: #FFFFFF;
    }
    .en {
      font-family: PingFangSC-Regular;
    }
    .name {
      font-family: PingFangSC-Medium;
      padding-top: 18Px;
    }
    img {
      width: 117Px;
      height: 117Px;
    }
  }
}
</style>
