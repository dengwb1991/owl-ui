<template>
  <OwlPage>
    <div class="button-wrap">
      <owl-button @click="handle">Default Button</owl-button>

      <owl-button type="disabled">Disabled Button</owl-button>

      <owl-button type="light">Light Button</owl-button>

      <owl-button :inline="true">Inline Button</owl-button>

      <owl-button :outline="true">Outline Button</owl-button>

      <owl-button :btnStyle="btnStyle">Custom Button</owl-button>
    </div>
  </OwlPage>
</template>

<script>
export default {
  data () {
    return {
      btnStyle: {
        border: '1px solid #090A0D',
        background: '#584628',
        color: '#F1D024'
      }
    }
  },
  methods: {
    handle (event) {
      console.log('event', event)
    }
  }
}
</script>

<style lang="less" scoped>
.button-wrap {
  text-align: center;
}
button {
  margin: 20px 0;
}
</style>