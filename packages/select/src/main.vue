<template>
  <div class="owl-select">
    <owl-input v-model="selectValue"/>
  </div>
</template>

<script>
import OwlInput from '../../input/src/main.vue'
export default {
  name: 'OwlSelect',
  components: {
    OwlInput
  },
  props: {
    value: {
      type: [String, Number],
      default: null
    }
  },
  data () {
    return {
      selectValue: this.value
    }
  }
}
</script>