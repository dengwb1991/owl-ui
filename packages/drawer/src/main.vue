<template>
  <div class="owl-drawer">
    <transition name="fade">
      <div class="owl-drawer-mask"
           :style="maskStyle"
           @click="handleMask"
           v-show="isVisible"></div>
    </transition>
    <transition :name="`move-${placement}`">
      <div class="owl-drawer-container"
           :style="[container, containerStyle]" v-show="isVisible">
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script>

import visibilityMixin from 'mixins/visibility'

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
  computed: {
    container () {
      return STYLE[this.placement]
    }
  },
  methods: {
    handleMask () {
      if (!this.maskClosable) return
      this.hide()
    }
  }
}
</script>