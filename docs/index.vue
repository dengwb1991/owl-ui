<template>
  <div>
    <nav-bar/>
    <contents/>
    <features/>
  </div>
</template>

<script>
import NavBar from './components/home/nav-bar'
import Contents from './components/home/contents'
import Features from './components/home/features'

export default {
  components: {
    NavBar,
    Contents,
    Features
  }
}
</script>


