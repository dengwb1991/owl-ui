<template>
  <div class="owl-picker">
    <owl-drawer ref="drawer"
                :visible.sync="isVisible"
                :z-index="zIndex">
    </owl-drawer>
  </div>
</template>

<script>
import OwlDrawer from '../../drawer/src/main.vue'
import visibilityMixin from 'mixins/visibility'

export default {
  name: 'OwlPicker',
  mixins: [visibilityMixin],
  components: {
    OwlDrawer
  }
}
</script>