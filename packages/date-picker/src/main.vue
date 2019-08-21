<template>
  <div class="owl-date-picker">
    <owl-picker ref="picker"
                :visible.sync="isVisible"
                :lockScroll="lockScroll"
                :maskClosable="maskClosable"
                :zIndex="zIndex"
                :maskStyle="maskStyle"
                :containerStyle="containerStyle">
      <template slot=title>
        <div class="owl-picker-choose">
            <div class="owl-picker-cancel" @click="cancel">取消</div>
            <div class="owl-picker-title">{{title}}</div>
            <div class="owl-picker-confirm" @click="confirm">确定</div>
        </div>
      </template>
      <template slot="wheel">
        <div class="owl-picker-wheel-wrap">
          <picker-wheel ref="year"
                        :data="years"
                        @valueIndex="_resetDay"/>
          <picker-wheel ref="month"
                        :data="months"
                        @valueIndex="_resetDay"/>
          <picker-wheel ref="day"
                        :data="days"/>
        </div>
      </template>
    </owl-picker>
  </div>
</template>

<script>
import OwlPicker from '../../picker/src/main.vue'
import PickerWheel from 'components/picker-wheel'
import visibilityMixin from 'mixins/visibility'

export default {
  name: 'OwlDatePicker',
  mixins: [visibilityMixin],
  components: {
    OwlPicker,
    PickerWheel
  },
  props: {
    value: String,
    format: {
      type: String,
      default: 'yyyy年/MM月/dd日'
    },
    min: {
      type: [Date, Array],
      default () {
        return new Date('1970/4/10')
      }
    },
    max: {
      type: [Date, Array],
      default () {
        return new Date('2020/10/15')
      }
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
      data: {},
      years: [],
      months: [],
      days: [],
      minDate: {}, // year、month、day
      maxDate: {},
      dateFormat: []
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
    show () {
      this.isVisible = true
      this.$refs.year.show()
      this.$refs.month.show()
      this.$refs.day.show()
      return this
    },
    cancel () {
      this.$refs.year.cancel()
      this.$refs.month.cancel()
      this.$refs.day.cancel()
      this.hide()
    },
    confirm () {
      const year = this.$refs.year.confirm()
      const month = this.$refs.month.confirm()
      const day = this.$refs.day.confirm()
      this.$emit('confirm', [year.key, month.key, day.key])
      this.hide()
      return [year.key, month.key, day.key]
    },
    /**
     * 重置天数
     */
    _resetDay () {
      let year = this.$refs.year.confirm()
      let month = this.$refs.month.confirm()
      let day = this.$refs.day.confirm()
      const maxDay = this._dayOfmonth(year.key, month.key)
      if (year.key === this.minDate.year) {
        this._resetData('months', this.minDate.month, 12)
        this.$refs.month.setData(null, 0)
        if (month.key <= this.minDate.month) {
          this._resetData('days', this.minDate.day, maxDay)
          if (day.key < this.minDate.day) {
            this.$refs.day.setData(null, 0)
          }
        } else {
          this._resetData('days', 1, maxDay)
        }
        return
      }
      if (year.key === this.maxDate.year) {
        this._resetData('months', 1, this.maxDate.month)
        if (month.key > this.maxDate.month) {
          this.$refs.month.setData(null, 0)
        }
        if (month.key >= this.maxDate.month) {
          let dd = +this.maxDate.day > +maxDay ? maxDay : this.maxDate.day
          this._resetData('days', 1, dd)
          if (day.key > +dd) {
            this.$refs.day.setData(null, 0)
          }
        } else {
          this._resetData('days', 1, maxDay)
        }
        return
      }
      if (this.months.length !== 12) {
        this._resetData('months', 1, 12)
        this.$refs.month.setData(null, 0)
      }
      if (+day.key > maxDay) {
        this.$refs.day.setData(null, 0)
      }
      this._resetData('days', 1, maxDay)
    },
    /**
     * 重新计算数组长度
     * key: years、months、days
     */
    _resetData (key, min, max) {
      let arr = []
      for (let i = 0, len = max - min; i <= len; i++) {
        arr.push({
          key: min + i,
          value: this._dateFormat(key, min + i)
        })
      }
      this[key] = arr
    },
    /**
     * 日期展示格式化
     * key: years、months、days
     */
    _dateFormat (key, value) {
      let val = null
      let str = null
      switch (key) {
        case 'years':
          str = this.dateFormat[0].match(/y+/)[0]
          val = this.dateFormat[0].replace(str, String(value).substr(4 - str.length))
          break
        case 'months':
          str = this.dateFormat[1].match(/M+/)[0]
          val = this.dateFormat[1].replace(str, str.length === 1 ? value : ('00' + value).substr((String(value)).length))
          break
        case 'days':
          str = this.dateFormat[2].match(/d+/)[0]
          val = this.dateFormat[2].replace(str, str.length === 1 ? value : ('00' + value).substr((String(value)).length))
          break
      }
      return val
    },
    _dayOfmonth (year, month) {
      const isLeapYear = (year) => {
        return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))
      }
      let day = 0
      switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          day = 31
          break
        case 4:
        case 6:
        case 9:
        case 11:
          day = 30
          break
        case 2:
          day = 28 + isLeapYear(year)
          break
      }
      return day
    },
    /**
     * 数据初始化
     */
    _initDateArray () {
      this._resetData('years', this.minDate.year, this.maxDate.year)
      let minMonth = 1
      let maxMonth = 12
      let minDay = 1
      let maxDay = 31
      if (this.data.year === this.minDate.year) {
        minMonth = this.minDate.month
        minDay = this.minDate.day
      }
      if (this.data.year === this.maxDate.year) {
        maxMonth = this.maxDate.month
        maxDay = this.maxDate.day
      }
      this._resetData('months', minMonth, maxMonth)
      this._resetData('days', minDay, maxDay)
      this.$nextTick(() => {
        this.$refs.year.setData(this.data.year)
        this.$refs.month.setData(this.data.month)
        this.$refs.day.setData(this.data.day)
        this._resetDay()
      })
    },
    /**
     * 初始化最小日期和最大日期
     */
    _initMinMax () {
      const format = (date, key) => {
        let d = this[date] ? this[date] : this.min
        if (Object.prototype.toString.call(d) === '[object Array]') {
          d = new Date(this[date] ? this[date] : this.min)
        }
        this[key] = {
          year: d.getFullYear(),
          month: d.getMonth() + 1,
          day: d.getDate()
        }
      }
      format('min', 'minDate')
      format('max', 'maxDate')
      format('value', 'data')
    }
  },
  created () {
    this.dateFormat = this.format.split('/')
    this._initMinMax()
    this._initDateArray()
  }
}
</script>