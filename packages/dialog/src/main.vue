<template>
  <transition name="fade">
    <div class="owl-dialog"
         v-show="isVisible">
      <div class="owl-dialog-mask"
           @click="handleMask"></div>
      <div class="owl-dialog-container">
        <div class="owl-dialog-content">
          <p v-html="content"></p>
          <slot></slot>
        </div>
        <div class="owl-dialog-btns">
          <div v-for="(btn, index) in btns"
               :key="index"
               @click.stop="handleBtn(btn)"
               :style="btn.color ? { color: btn.color } : null">
            {{btn.text}}
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import visibilityMixin from 'mixins/visibility'

export default {
  name: 'OwlDialog',
  mixins: [visibilityMixin],
  props: {
    content: {
      type: String,
      default: ''
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    btns: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleBtn ({ callback }) {
      !(callback && callback() === false) && this.hide()
    },
    handleMask () {
      this.maskClosable && this.hide()
    }
  }
}
</script>