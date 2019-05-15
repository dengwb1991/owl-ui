<template>
  <div class="owl-drawer">
    <transition name="fade">
      <popup-mask :mask-style="maskStyle"
                  :z-index="zIndex"
                  @click="handleMask"
                  v-show="isVisible"/>
    </transition>
    <transition :name="`move-${placement}`">
      <div class="owl-drawer-container"
           :style="[container, containerStyle, { zIndex }]" v-show="isVisible">
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script>

import visibilityMixin from 'mixins/visibility'
import popupMask from 'components/popup-mask'

const STYLE = {
  down: {
    bottom: 0,
    left: 0,
    width: '100%',
    minHeight: '10em'
  },
  left: {
    bottom: 0,
    left: 0,
    minWidth: '4em',
    height: '100vh'
  },
  up: {
    top: 0,
    right: 0,
    width: '100%',
    minHeight: '10em'
  },
  right: {
    top: 0,
    right: 0,
    minWidth: '4em',
    height: '100vh'
  }
}

export default {
  name: 'OwlDrawer',
  mixins: [visibilityMixin],
  components: { popupMask },
  props: {
    maskClosable: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'down' // up left right
    },
    lockScroll: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    container () {
      return STYLE[this.placement]
    }
  },
  methods: {
    handleMask () {
      if (!this.maskClosable) return
      this.hide()
      this.$emit('maskClose')
    }
  }
}
</script>