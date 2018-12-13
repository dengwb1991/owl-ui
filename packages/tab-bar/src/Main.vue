<template>
  <div class="owl-tab" :style="BaseStyle">
    <ul :style="[ulStyle, ulWidth, ulTransform, ulTransition]"
        @touchstart="doTouchStart($event)"
        @touchmove="doTouchMove($event)"
        @touchend="doTouchEnd($event)">
      <li ref="tab"
          v-for="(item, index) in data"
          :key="index"
          :class="index === activeIndex ? 'active' : ''"
          :style="index === activeIndex ? [activeColor, activeStyle] : defaultColor"
          @click="tap({ item, index })">
        {{name ? item[name] : item}}
      </li>
      <div ref="line"
           class="line"
           v-if="lineUse"
           :style="[underlineStyle, underlineLeft]"></div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OwlTabBar',
  data () {
    return {
      liWidth: 0,
      lineRealWidth: 0,
      tabTransX: 0,
      tabTransition: null,
      activeIndex: this.active,
      tabsIns: null,
      surplusWidth: 0
    }
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    tabWidth: {
      type: String,
      default: '110px'
    },
    tabHeight: {
      type: String,
      default: '40px'
    },
    tabColor: {
      type: String,
      default: '#999'
    },
    tabStyle: {
      type: Object,
      default: () => {
        return {}
      }
    },
    fontSize: {
      type: String,
      default: '14px'
    },
    fontFamily: {
      type: String,
      default: 'PingFangSC-Regular'
    },
    name: {
      type: [String, Object],
      default: null
    },
    active: {
      type: [Number, String],
      default: 0
    },
    background: {
      type: String,
      default: '#FFF'
    },
    highlight: {
      type: String,
      default: '#A5884D'
    },
    activeStyle: {
      type: Object,
      default: () => {
        return {}
      }
    },
    lineUse: {
      type: Boolean,
      default: true
    },
    lineHeight: {
      type: String,
      default: '2px'
    },
    lineWidth: {
      type: [String, Object],
      default: null
    },
    lineColor: {
      type: String,
      default: '#A5884D'
    },
    lineStyle: {
      type: Object,
      default: () => {
        return {}
      }
    },
    initCallback: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ulTransform () {
      return {
        '-webkit-transform': `translateX(${this.tabTransX}px)`
      }
    },
    ulTransition () {
      return {
        '-webkit-transition': this.tabTransition
      }
    },
    ulWidth () {
      const unitArr = this.tabWidth ? this.getUnitArr(this.tabWidth) : null
      const width = unitArr ? unitArr[1] : 0
      return {
        width: this.data.length > 4 ? `${this.data.length * width}${unitArr[2]}` : '100%'
      }
    },
    BaseStyle () {
      return {
        background: this.background,
        'font-size': this.fontSize,
        'font-family': this.fontFamily
      }
    },
    ulStyle () {
      return {
        height: this.tabHeight,
        'line-height': this.tabHeight,
        ...this.tabStyle
      }
    },
    defaultColor () {
      return {
        color: this.tabColor
      }
    },
    activeColor () {
      return {
        color: this.highlight
      }
    },
    underlineStyle () {
      return {
        width: !this.lineWidth ? `${this.liWidth}px` : this.lineWidth,
        height: this.lineHeight,
        background: this.lineColor,
        ...this.lineStyle
      }
    },
    underlineLeft () {
      return {
        left: `${this.activeIndex * this.liWidth + ((this.liWidth - this.lineRealWidth) / 2)}px`
      }
    }
  },
  methods: {
    doTouchStart (event) {
      event.stopPropagation()
      this.tabTransition = null
      this.tabsIns = {
        ...this.tabsIns,
        X: event.touches[0].pageX - parseFloat(this.tabTransX)
      }
    },
    doTouchMove (event) {
      if (this.data.length <= 4) return
      event.preventDefault()
      const surplusWidth = this.surplusWidth

      let transX = event.touches[0].pageX - this.tabsIns.X
      if (surplusWidth + event.touches[0].pageX - this.tabsIns.X < 0) {
        transX = -surplusWidth - (this.tabsIns.X - event.touches[0].pageX - surplusWidth) / 8
      } else if (transX > 0) {
        transX = transX / 8
      }
      this.tabTransX = transX
    },
    doTouchEnd (event) {
      if (this.tabTransX > 0) {
        this.tabTransX = 0
      } else if (this.tabTransX < -this.surplusWidth) {
        this.tabTransX = -this.surplusWidth
      }
      this.duration = '200ms'
    },
    getUnitArr (data) {
      return /^([0-9|\\.]+)([a-zA-Z]+)$/.exec(data)
    },
    getLiWidth () {
      this.liWidth = this.$refs.tab[0].offsetWidth
    },
    getLineRealWidth () {
      this.lineRealWidth = this.$refs.line && (this.$refs.line.offsetWidth || this.$refs.tab[0].offsetWidth)
    },
    tabPlace () {
      this.tabTransition = '-webkit-transform 0.4s linear 0s'
      const surplusWidth = this.surplusWidth = this.liWidth * this.data.length - document.body.scrollWidth
      const centerMarginLeft = parseInt((document.body.scrollWidth - this.liWidth) / 2)
      const bodyMarginLeft = parseInt(this.$refs.tab[this.activeIndex].offsetLeft + this.tabTransX)
      let shouldTranslateX = parseInt(this.tabTransX) - (bodyMarginLeft - centerMarginLeft)
      if (shouldTranslateX > 0 && shouldTranslateX + parseInt(this.tabTransX) > 0) {
        shouldTranslateX = 0
      } else if (shouldTranslateX > 0 && shouldTranslateX + parseInt(this.tabTransX) < 0) {
        shouldTranslateX = 0
      } else if (shouldTranslateX < -surplusWidth) {
        shouldTranslateX = -surplusWidth
      }
      this.tabTransX = shouldTranslateX
    },
    tap ({ item, index }) {
      if (index === this.activeIndex) return
      this.activeIndex = index

      this.$emit('update:active', index)
      this.$emit('callback', item)

      if (this.data.length <= 4) return

      this.tabPlace()
    },
    getCurrData () {
      this.$emit('callback', this.data[this.activeIndex])
    }
  },
  mounted () {
    this.getLiWidth()
    this.getLineRealWidth()
    this.tabPlace()

    this.initCallback && this.getCurrData()
  }
}
</script>

<style src="../assets/css/main.less" lang="less" scoped></style>
