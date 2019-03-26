<template>
  <owl-page class="examples-switch">
    <ul>
      <li>
        <owl-switch v-model="val"
                    :initCallback="true"
                    @callback="handle">
          {{val}}
        </owl-switch>
      </li>
      <li>
        <owl-switch v-model="val2" :color="color">{{this.color}}</owl-switch>
      </li>
      <li>
        <owl-switch v-model="val3" disabled>disabled</owl-switch>
      </li>
      <li>
        <owl-switch v-model="val4" disabled>disabled</owl-switch>
      </li>
    </ul>
  </owl-page>
</template>

<script>
export default {
  data () {
    return {
      val: false,
      val2: true,
      color: '#584628',
      val3: false,
      val4: true
    }
  },
  methods: {
    handle (val) {
      console.log(val)
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