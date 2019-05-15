<template>
  <transition name="fade"
              @after-leave="afterLeaveHandle">
    <div class="owl-toast"
         :style="{ 'z-index': zIndex }"
         v-show="isVisible">
      <popup-mask :mask-style="maskStyle"
                  :z-index="zIndex"
                  v-show="maskVisible"/>
      <div class="owl-toast-container"
           :style="{ ...containerStyle, 'z-index': zIndex }">
        <p v-html="value || text" :class="[`owl-iconfont-${type}`]"></p>
      </div>
    </div>
  </transition>
</template>

<script>
import visibilityMixin from 'mixins/visibility'
import popupMask from 'components/popup-mask'

export default {
  name: 'OwlToast',
  mixins: [visibilityMixin],
  components: { popupMask },
  props: {
    value: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text' // caution、failure、success
    },
    time: {
      type: Number,
      default: 3000
    },
    maskVisible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    show () {
      if (this.isVisible || this.timer) return
      this.isVisible = true
      this.$nextTick(() => {
        if (this.time !== 0) {
          this.timer = setTimeout(() => {
            this.hide()
          }, this.time)
        }
      })
    },
    hide () {
      this.isVisible = false
      this.clearTimer()
    },
    clearTimer () {
      clearTimeout(this.timer)
      this.timer = null
    },
    afterLeaveHandle () {
      this.remove && this.remove()
    }
  },
  mounted () {
    this.value && this.show()
  }
}
</script>