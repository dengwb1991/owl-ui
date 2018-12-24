<template>
  <div>
    <img :src="owl"/>
  </div>
</template>

<script>
import owl from 'images/common/owl.png'
export default {
  name: 'OwlLogo',
  data () {
    return {
      owl
    }
  }
}
</script>