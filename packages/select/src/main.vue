<template>
  <div class="owl-select">
    <input class="owl-select-field"
           v-model="selectValue"
           :placeholder="placeholder"
           @click="handle"
           readonly/>
    <owl-picker :visible.sync="visible"
                :data="data"
                :title="title"
                @confirm="confirm"/>
  </div>
</template>

<script>
import OwlPicker from '../../picker/src/main.vue'

export default {
  name: 'OwlSelect',
  components: {
    OwlPicker
  },
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    data: {
      type: Array,
      default: () => []
    },
    placeholder: String,
    title: String
  },
  data () {
    return {
      selectValue: this.value,
      visible: false
    }
  },
  methods: {
    handle () {
      this.visible = true
    },
    confirm (val) {
      this.selectValue = val
      this.$emit('input', val)
    }
  }
}
</script>