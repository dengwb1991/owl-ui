<template>
  <owl-page class="examples-switch">
    <ul>
      <li>
        <owl-switch v-model="val">{{val}}</owl-switch>
      </li>
      <li>
        <owl-switch v-model="val2" disabled>disabled</owl-switch>
      </li>
      <li>
        <owl-switch v-model="val3" disabled>disabled</owl-switch>
      </li>
    </ul>
  </owl-page>
</template>

<script>
export default {
  data () {
    return {
      val: false,
      val2: false,
      val3: true
    }
  }
}
</script>

<style lang="less" scoped>
.examples-switch {
  ul {
    padding: 0 30px;
    li {
      padding-left: 10px;
      margin: 20px 0;
      height: 88px;
      line-height: 88px;
      background: #FFF;
    }
  }
}
</style>