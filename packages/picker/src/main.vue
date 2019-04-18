<template>
  <div class="owl-picker">
    <owl-drawer ref="drawer"
                :visible.sync="isVisible"
                :maskClosable="maskClosable"
                :z-index="zIndex">
      <div class="owl-picker-choose">
        <div class="owl-picker-cancel" @click="hide">取消</div>
        <div class="owl-picker-title">{{title}}</div>
        <div class="owl-picker-confirm">确定</div>
      </div>
      <div class="owl-picker-wheel-wrap">
        <div class="owl-picker-wheel">
          <div class="owl-picker-container">
            <div class="owl-picker-grid"></div>
            <ul class="owl-picker-container-scroll"
                :style="scrollStyle"
                @touchstart.stop.prevent="onTouchStart($event)"
                @touchmove.stop.prevent="onTouchMove($event)"
                @touchend.stop.prevent="onTouchEnd($event)">
              <li>1111</li>
              <li>2222</li>
              <li>3333</li>
              <li>4444</li>
              <li>5555</li>
              <li>6666</li>
              <li>7777</li>
              <li>8888</li>
              <li>9999</li>
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
    title: String,
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      transY: 0,        // 记录滑动位置距离
      startTop: 0,      // 记录开始滑动位置
      endTop: 0,        // 记录开始滑动位置
      valIndex: 0,      // 记录数组下标
      startScreenY: 0,  // 记录开始屏幕距离
      endScreenY: 0,    // 记录结束屏幕距离
      startTime: 0,     // 记录开始时间戳
      endTime: 0,       // 记录结束时间戳
      speed: 0,         // 记录速度
      duration: 0
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
  methods: {
    onTouchStart (event) {
      this.startScreenY = event.targetTouches[0].screenY
      this.startTime = Date.now()
      this.startTop = this.endTop
    },
    onTouchMove (event) {
      this.endScreenY = event.targetTouches[0].screenY
      this.endTime = Date.now()
      const moveY = (this.endScreenY - this.startScreenY) * 18 / 370
      this.endTop = this.transY = this.startTop + moveY
    },
    onTouchEnd (event) {
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
        let minTop = -(9 - 1) * 2
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