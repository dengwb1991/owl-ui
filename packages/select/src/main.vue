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
                @callback="type => this.$emit('callback', type)"
                @cancel="data => this.$emit('cancel', data)"
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
      isObject: Object.prototype.toString.call(this.data[0]) === '[object Object]'
    }
  },
  methods: {
    handle () {
      this.visible = true
    },
    confirm (val) {
      this.selectValue = this.isObject ? val.value : val
      this.$emit('confirm', val)
      this.$emit('input', this.isObject ? val.key : val)
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
      if (this.isObject) {
        let checkedValue = this.data.find(item => String(item.key) === String(this.value))
        this.selectValue = checkedValue ? checkedValue.value : null
      } else {
        this.selectValue = this.data.find(item => String(item) === String(this.value))
      }
      this.$refs.picker.setData(this.value)
    }
  }
}
</script>