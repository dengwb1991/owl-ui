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
                :lockScroll="lockScroll"
                :maskClosable="maskClosable"
                :zIndex="zIndex"
                :maskStyle="maskStyle"
                :containerStyle="containerStyle"
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
    title: String,
    placeholder: String,
    lockScroll: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 100
    },
    maskStyle: {
      type: Object,
      default: () => {}
    },
    containerStyle: {
      type: Object,
      default: () => {}
    }
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
    },
    show () {
      this.$refs.picker.show()
    },
    hide () {
      this.$refs.picker.hide()
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