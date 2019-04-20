<template>
  <owl-page>
    <div class="examples-picker">
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
        },
        $events: {
          select: data => console.log('select:', data)
        }
      }).show()
    }
  }
}
</script>

<style lang="less" scoped>
.examples-picker {
  padding: 30px;
}
</style>