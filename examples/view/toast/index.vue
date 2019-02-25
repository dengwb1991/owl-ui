<template>
  <OwlPage class="examples-toast">
    <OwlButton @click="open"
               text="show"/>
  </OwlPage>
</template>

<script>
export default {
  methods: {
    open () {
      const toast = this.$toast({
        $props: {
          text: '欢迎光临'
        }
      })
      toast.show()
    }
  }
}
</script>

<style lang="less" scoped>
.examples-toast {
  text-align: center;
}
button {
  margin: 20px 0;
}
</style>