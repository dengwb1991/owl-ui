<template>
  <div class="params">
    <div class="content-wrapper">
      <ul>
        <li v-for="(item, index) in data"
            :key="index">
          <div>{{item[0]}}<span>:</span>
            <p>{{JSON.stringify(item[1])}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  }
}
</script>

<style lang="less" scoped>
.params {
  width: 100%;
  padding: 20px 20px 60px 20px;
  .content-wrapper {
    background: #333;
    border-radius: 10px;
    padding: 20px;
  }
  li {
    position: relative;
    padding: 10px 0;
    overflow: hidden;
    div {
      font-family: PingFangSC-Medium;
      font-size: 32px;
      display: inline-block;
      color: #2ecc71;
      span {
        padding-left: 10px;
        color: #FFF;
        font-size: 32px;
      }
      p {
        float: right;
        max-width: 500px;
        width: 450px;
        display: inline-block;
        font-family: PingFangSC-Regular;
        padding-left: 20px;
        font-size: 32px;
        color: #ffd400;
        word-break: normal;
        white-space: pre-wrap;
        word-wrap: break-word;
      }
    }
  }
}
</style>