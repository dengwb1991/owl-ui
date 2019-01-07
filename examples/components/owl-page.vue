<template>
  <div class="owl-page">
    <Title/>
    <slot/>
  </div>
</template>

<style lang="less" scoped>
.owl-page {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #F5F5F5;
}
</style>
