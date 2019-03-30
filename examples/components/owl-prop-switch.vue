<template>
  <div class="owl-prop-switch">
    <div>{{name}}</div>
    <div>
      <owl-switch v-model="switchVal"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: String
  },
  data () {
    return {
      switchVal: this.value
    }
  },
  watch: {
    value (val) {
      this.switchVal = val
    },
    switchVal (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="less" scoped>
.owl-prop-switch {
  font-size: 34px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  background: #FFF;
  height: 88px;
  line-height: 88px;
  border-radius: 2px;
  div {
    display: flex;
    vertical-align: middle;
  }
}
</style>