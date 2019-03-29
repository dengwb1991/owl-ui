<template>
  <owl-page>
    <div class="examples-input">
      <owl-input :placeholder="placeholder"
                 :type="type"
                 v-model="val"/>
    </div>
  </owl-page>
</template>

<script>
export default {
  data () {
    return {
      type: 'password',
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