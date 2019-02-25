<template>
    <transition name="fade">
      <div class="owl-toast" v-show="isVisible">
        <div class="owl-toast-mask">
        </div>
        <p v-html="text"></p>
      </div>
    </transition>
</template>

<script>
import visibilityMixin from 'mixins/visibility'

export default {
  name: 'OwlToast',
  mixins: [visibilityMixin],
  props: {
    text: {
      type: String,
      default: ''
    },
    time: {
      type: Number,
      default: 3000
    }
  },
  methods: {
    show () {
      this.isVisible = true
      this.$nextTick(() => {
        if (this.time !== 0) {
          this.timer = setTimeout(() => {
            this.hide()
          }, this.time)
        }
      })
    },
    hide() {
      this.isVisible = false
      this.clearTimer()
    },
    clearTimer() {
      clearTimeout(this.timer)
      this.timer = null
    }
  }
}
</script>