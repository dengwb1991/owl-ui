<template>
  <owl-page>
    <div class="examples-input">
      <owl-input :placeholder="placeholder"
                 v-model="val"/>
    </div>
  </owl-page>
</template>

<script>
export default {
  data () {
    return {
      val: '',
      placeholder: '请输入'
    }
  }
}
</script>
<style lang="less" scoped>
.examples-input {
  padding: 30px;
}
</style>