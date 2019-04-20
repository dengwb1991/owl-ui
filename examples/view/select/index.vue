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
      this.$picker({
        $props: {
          data: [1, 2, 3, 4, 5, 6]
        }
      }).show()
    }
  }
}
</script>

<style lang="less" scoped>
.examples-select {
  padding: 30px;
}
</style>