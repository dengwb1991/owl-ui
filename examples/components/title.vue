<template>
  <div class="title">
    <p @click="$router.push('/')">返回</p>
    {{titleName}}
  </div>
</template>

<script>
export default {
  computed: {
    titleName () {
      return this.$route.path.slice(1)
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  width: 100%;
  height: 40Px;
  background: #FFF;
  line-height: 40Px;
  text-align: center;
  font-size: 36px;
  border-bottom: 1Px solid #EEE;
  font-weight: 500;
  p {
    position: absolute;
    left: 30px;
    font-size: 30px;
    color: #CCC;
  }
}
</style>