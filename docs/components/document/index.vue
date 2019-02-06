<template>
  <div class="docs-view">
    <section class="nav">
      <nav-list/>
    </section>
    <section class="md">
      <router-view/>
    </section>
    <section class="phone">
      <phone/>
    </section>
  </div>
</template>

<script>
import NavList from './nav-list'
import Phone from './phone'

export default {
  components: {
    NavList,
    Phone
  }
}
</script>