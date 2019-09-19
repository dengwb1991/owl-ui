<template>
  <div>
    <p class="title">Component</p>
    <owl-button @click="show">show</owl-button>
    <owl-date-picker :visible.sync="visible"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    show () {
      this.visible = true
    }
  }
}
</script>