<template>
  <div class="owl-picker">
    <owl-drawer ref="drawer"
                :visible.sync="isVisible"
                :maskClosable="maskClosable"
                :lockScroll="lockScroll"
                :z-index="zIndex"
                @maskClose="cancel">
      <div class="owl-picker-choose">
        <div class="owl-picker-cancel" @click="cancel">取消</div>
        <div class="owl-picker-title">{{title}}</div>
        <div class="owl-picker-confirm" @click="confirm">确定</div>
      </div>
      <div class="owl-picker-wheel-wrap">
        <div class="owl-picker-wheel">
          <div class="owl-picker-container">
            <div class="owl-picker-grid"></div>
            <ul class="owl-picker-container-scroll"
                :style="scrollStyle"
                @touchstart.stop.prevent="onTouchStart($event)"
                @touchmove.stop.prevent="onTouchMove($event)"
                @touchend.stop.prevent="onTouchEnd($event)"
                @mousedown="onTouchStart($event, 'mounse')"
                @mousemove="onTouchMove($event, 'mounse')"
                @mouseup="onTouchEnd($event, 'mounse')"
                @mouseleave="onTouchEnd($event, 'mounse')">
              <li v-for="(item, index) in data"
                  :key="index">{{type ? item.value : item}}</li>
            </ul>
          </div>
        </div>
      </div>
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
  data () {
    return {
      transY: 0,        // 记录滑动位置距离
      startTop: 0,      // 记录开始滑动位置
      valIndex: null,   // 记录数组下标
      startScreenY: 0,  // 记录开始屏幕距离
      endScreenY: 0,    // 记录结束屏幕距离
      startTime: 0,     // 记录开始时间戳
      endTime: 0,       // 记录结束时间戳
      speed: 0,         // 记录速度
      duration: 0,
      mounseLock: true,
      type: Object.prototype.toString.call(this.data[0]) === '[object Object]'
    }
  },
  computed: {
    scrollStyle () {
      return {
        '-webkit-transform': `translate3d(0, ${this.transY}em, 0)`,
        'transition-duration': `${this.duration}ms`
      }
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
      const index = this.data.findIndex(item => {
        return String(this.type ? item.key : item) === String(val)
      })
      this.transY = index * -2
      this.valIndex = index
      return this
    },
    confirm () {
      this.$emit('confirm', this.data[this.valIndex || 0])
      this.isVisible = false
    },
    cancel () {
      this.isVisible = false

      this.$emit('cancel', this.oldValIndex !== void 0 ? this.data[this.oldValIndex] : void 0)
      this.transY = this.oldTransY
      this.valIndex = this.oldValIndex
    },
    show () {
      this.oldTransY = this.transY
      this.oldValIndex = this.valIndex
      this.isVisible = true
    },
    getPos (event) {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      return event.clientY + scrollTop
    },
    onTouchStart (event, name) {
      if (name === 'mounse') this.mounseLock = false

      this.startScreenY = name === 'mounse' ? this.getPos(event) : event.targetTouches[0].screenY
      this.startTime = Date.now()
      this.startTop = this.transY
    },
    onTouchMove (event, name) {
      if (name === 'mounse' && this.mounseLock) return

      this.endScreenY = name === 'mounse' ? this.getPos(event) : event.targetTouches[0].screenY
      this.endTime = Date.now()
      const moveY = (this.endScreenY - this.startScreenY) * 18 / 370
      this.transY = this.startTop + moveY
    },
    onTouchEnd (event, name) {
      if (name === 'mounse') {
        if (!this.mounseLock) {
          this.mounseLock = true
        } else {
          return
        }
      }

      const flag = (this.startScreenY - this.endScreenY) / (this.startTime - this.endTime)
      if (Math.abs(flag) <= 0.2) {
        this.speed = flag < 0 ? -0.08 : 0.08
      } else if (Math.abs(flag) <= 0.5) {
        this.speed = flag < 0 ? -0.16 : 0.16
      } else {
        this.speed = flag / 2
      }
      if (!this.transY) {
        this.transY = 0
      }
      this.rollGear()
    },
    rollGear () {
      let d = 0
      let stopGear = false
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        let pos = this.transY
        let speed = this.speed * Math.exp(-0.03 * d++)
        pos += speed
        if (Math.abs(speed) <= 0.1) {
          speed = 0.1
          let b = Math.round(pos / 2) * 2
          if (Math.abs(pos - b) < 0.02) {
            stopGear = true
          } else if (pos > b) {
            pos -= speed
          } else {
            pos += speed
          }
        }
        if (pos > 0) {
          pos = 0
          this.duration = 500
          stopGear = true
        }
        let minTop = -(this.data.length - 1) * 2
        if (pos < minTop) {
          pos = minTop
          this.duration = 500
          stopGear = true
        }
        if (stopGear) {
          let gearVal = Math.abs(pos) / 2
          this.valIndex = Math.round(gearVal)
          setTimeout(() => {
            this.duration = 0
          }, 200)
          clearInterval(this.interval)
        }
        this.transY = this.endTop = pos
      }, 30)
    }
  }
}
</script>