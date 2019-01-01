<template>
  <div id="docs">
    <section class="nav">
      1
    </section>
    <section class="md">
      2
    </section>
    <section class="phone">
      3
    </section>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
body {
  background-color: #F5F5F5;
  -webkit-user-select: none;
}
html, body, #app {
  height: 100%;
}
div {
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
}
img {
  width: 100%;
  height: 100%;
}
body, p, ul, li {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
* {
  outline: none;
}

section {
  float: left;
  &.nav {
    width: 20%;
  }
  &.md {
    width: 50%;
  }
  &.phone {
    width: 30%;
  }
  // width: 33%;
}
</style>