<template>
  <transition name="page-move">
    <router-view/>
  </transition>
</template>

<style lang="less">
.page-move-enter, .page-move-leave-active {
  transform: translate(100%, 0);
}
.page-move-enter-active, .page-move-leave-active {
  transition: transform 0.3s;
}
</style>