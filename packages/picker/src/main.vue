<template>
  <div class="owl-picker">
    <owl-drawer ref="drawer"
                :visible.sync="isVisible"
                :maskClosable="maskClosable"
                :lockScroll="lockScroll"
                :z-index="zIndex"
                :maskStyle="maskStyle"
                :containerStyle="containerStyle"
                @maskClose="cancel">
      <div class="owl-picker-choose">
        <slot name="title">
          <div class="owl-picker-cancel" @click="cancel">取消</div>
          <div class="owl-picker-title">{{title}}</div>
          <div class="owl-picker-confirm" @click="confirm">确定</div>
        </slot>
      </div>
      <picker-wheel ref="wheel"
                    :data="data"/>
    </owl-drawer>
  </div>
</template>

<script>
import OwlDrawer from '../../drawer/src/main.vue'
import PickerWheel from 'components/picker-wheel'
import visibilityMixin from 'mixins/visibility'

export default {
  name: 'OwlPicker',
  mixins: [visibilityMixin],
  components: {
    OwlDrawer,
    PickerWheel
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    title: String,
    lockScroll: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    visible: {
      handler (val) {
        if (val) {
          this.show()
        } else {
          this.isVisible = val
        }
      }
    }
  },
  methods: {
    setData (val) {
      return this.$refs.wheel.setData(val)
    },
    confirm () {
      this.isVisible = false
      this.$emit('confirm', this.$refs.wheel.confirm())
    },
    cancel () {
      this.isVisible = false
      this.$emit('cancel', this.$refs.wheel.cancel())
    },
    show () {
      this.isVisible = true
      return this.$refs.wheel.show()
    }
  }
}
</script>