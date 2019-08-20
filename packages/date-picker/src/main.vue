<template>
  <div class="owl-date-picker">
    <owl-drawer ref="drawer"
                :visible.sync="isVisible"
                :maskClosable="maskClosable"
                :lockScroll="lockScroll"
                :z-index="zIndex"
                :maskStyle="maskStyle"
                :containerStyle="containerStyle"
                @maskClose="cancel">
    </owl-drawer>
  </div>
</template>

<script>
import OwlDrawer from '../../drawer/src/main.vue'
import PickerWheel from 'components/picker-wheel'
import visibilityMixin from 'mixins/visibility'

export default {
  name: 'OwlDatePicker',
  mixins: [visibilityMixin],
  components: {
    OwlDrawer,
    PickerWheel
  },
  props: {
    title: String,
    lockScroll: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  }
}
</script>