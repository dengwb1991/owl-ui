<template>
  <owl-page>
    <div class="examples-select">
      <owl-button @click="show1">show</owl-button>
    </div>
  </owl-page>
</template>

<script>
export default {
  methods: {
    show1 () {
      this.$picker().show()
    }
  }
}
</script>

<style lang="less" scoped>
.examples-select {
  padding: 30px;
}
</style>