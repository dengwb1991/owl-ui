<template>
  <div class="owl-select">
    <input class="owl-select-field"
           v-model="selectValue"
           :placeholder="placeholder"
           @click="handle"
           readonly/>
    <owl-picker ref="picker"
                :visible.sync="visible"
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
      visible: false,
      type: Object.prototype.toString.call(this.data[0]) === '[object Object]'
    }
  },
  methods: {
    handle () {
      this.visible = true
    },
    confirm (val) {
      this.selectValue = this.type ? val.value : val
      this.$emit('input', this.type ? val.key : val)
    }
  },
  mounted () {
    if (this.value) {
      const instance = this.data.find(item => String(item.key) === String(this.value))
      if (instance) {
        this.selectValue = this.type ? instance.value : instance
      }
      this.$refs.picker.setData(this.value)
    }
  }
}
</script>