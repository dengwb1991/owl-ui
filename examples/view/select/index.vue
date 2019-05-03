<template>
  <owl-page>
    <div class="examples-select">
      <owl-select v-model="val"
                  :data="data"
                  placeholder="请选择"/>
    </div>
  </owl-page>
</template>

<script>
export default {
  data () {
    return {
      val: '',
      data: [1, 2, 3, 4, 5, 6]
    }
  }
}
</script>

<style lang="less" scoped>
.examples-select {
  padding: 30px;
}
</style>