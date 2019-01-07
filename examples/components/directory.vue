<template>
  <div>
    <ul class="nav-list">
      <li v-for="(route, index) in routes"
          :key="index"
          @click="$router.push(route.path)">
        {{route.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import router from '@/router'
export default {
  data () {
    return {
      routes: []
    }
  },
  created () {
    this.routes = router.options.routes.filter(item => item.path !== '/').map(item => {
      return {
        ...item,
        name: item.path.slice(1)
      }
    })
  }
}
</script>

<style lang="less" scoped>
.nav-list {
  width: 100%;
  background: #FFF;
  li {
    font-size: 32px;
    height: 88px;
    line-height: 88px;
    padding-left: 30px;
    position: relative;
    border-bottom: 1px solid #DDD;
  }
}
</style>