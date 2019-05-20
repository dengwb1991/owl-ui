<template>
  <a class="badge" href="https://github.com/dengwb1991/owl-ui" target="_blank">
    <span class="badge-left">{{badgeName || type}}</span>
    <span class="badge-right">{{badgeValue || '...'}}</span>
  </a>
</template>

<script>
import { ajax } from '../../assets/js/utils.js'

const urlMap = {
  watch: 'https://img.shields.io/github/watchers/dengwb1991/owl-ui.json',
  star: 'https://img.shields.io/github/stars/dengwb1991/owl-ui.json',
  fork: 'https://img.shields.io/github/forks/dengwb1991/owl-ui.json'
}
export default{
  data() {
    return {
      badgeName: null,
      badgeValue: null
    }
  },
  props: {
    type: String
  },
  mounted() {
    const badge = this.type
    this.getData(badge)
  },
  methods: {
    getData (badge) {
      const url = urlMap[badge]
      ajax(url).then((response) => {
        let result = JSON.parse(response)
        this.badgeName = result.name
        this.badgeValue = result.value
      })
    }
  }
}
</script>

<style lang="less" scoped>
.badge {
  display: inline-block;
  text-align: center;
  border: 1Px #222 solid;
  border-radius: 3Px;
  color: #222;
  margin: 5Px;
  overflow: hidden;
  span {
    display: inline-block;
    font-size: 12Px;
  }
  .badge-left {
    padding: 4Px 10Px;
    color: #fff;
    background-color: #222;
  }
  .badge-right {
    padding: 4Px 10Px;
    border-left: 1Px #222 solid;
    background-color: white;
  }
  @media screen and (max-width: 960px) {
    border: 1Px #2E54EB solid;
    color: #2E54EB;
    .badge-left {
      background-color: #2E54EB;
    }
    .badge-right {
      border-left: 1Px #2E54EB solid;
    }
  }
}
</style>