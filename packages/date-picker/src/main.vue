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
        <slot name="title">
          <div class="owl-picker-choose">
              <div class="owl-picker-cancel" @click="cancel">取消</div>
              <div class="owl-picker-title">{{title}}</div>
              <div class="owl-picker-confirm" @click="confirm">确定</div>
          </div>
        </slot>
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
    format: {
      type: String,
      default: 'yyyy/MM/dd'
    },
    min: {
      type: [Date, String],
      default () {
        return new Date('1970/1/1')
      }
    },
    max: {
      type: [Date, String],
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
    setData (value) {
      this._initMinMax(value, 'data')
      this.$nextTick(() => {
        this.$refs.year.setData(this.data.year)
        this.$refs.month.setData(this.data.month)
        this.$refs.day.setData(this.data.day)
        this._resetDay()
      })
      return this
    },
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
      this.$emit('cancel')
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
      let maxDay = this._dayOfmonth(year.key, month.key)
      if (year.key === this.minDate.year) {
        this._resetData('months', this.minDate.month, 12)
        if (month.key < this.minDate.month) {
          this.$refs.month.setData(null, 0)
          month.key = this.months[0].key
          maxDay = this._dayOfmonth(year.key, this.months[0].key)
        }
        this.$refs.month.setData(null, month.key - this.minDate.month)
        if (month.key > this.minDate.month) {
          this._resetData('days', 1, maxDay)
          if (+day.key > maxDay) {
            this.$refs.day.setData(null, 0)
          } else {
            this.$refs.day.setData(null, day.key - 1)
          }
        }
        if (month.key === this.minDate.month) {
          this._resetData('months', this.minDate.month, 12)
        }
        if (month.key <= this.minDate.month) {
          this._resetData('days', this.minDate.day, maxDay)
          this.$refs.day.setData(null, day.key - this.minDate.day < 0 ? 0 : day.key - this.minDate.day)
          if (+day.key > maxDay || +day.key < this.minDate.day) {
            this.$refs.day.setData(null, 0)
          }
        }
        return
      }
      if (year.key === this.maxDate.year) {
        this._resetData('months', 1, this.maxDate.month)
        if (month.key > this.maxDate.month) {
          this.$refs.month.setData(null, 0)
          maxDay = this._dayOfmonth(year.key, 1)
          this._resetData('days', 1, maxDay)
          this.$refs.day.setData(null, 0)
        }
        if (month.key <= this.maxDate.month) {
          this._resetData('days', 1, maxDay)
          if (+day.key > maxDay) {
            this.$refs.day.setData(null, 0)
          }
        }
        return
      }
      if (this.months.length !== 12) {
        if (+this.months[0] !== 1) {
          this._resetData('months', 1, 12)
          this.$refs.month.setData(null, month.key - 1)
          this._resetData('days', 1, maxDay)
          this.$refs.day.setData(null, day.key - 1)
        }
        return
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
    /**
     * 计算某年某月共几日
     */
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

      if (this._isEmpty(this.data)) {
        minMonth = this.minDate.month
        minDay = this.minDate.day
      }
      this._resetData('months', minMonth, maxMonth)
      this._resetData('days', minDay, this._dayOfmonth(this.minDate.year, this.minDate.month))
    },
    /**
     * 初始化最小日期和最大日期
     */
    _initMinMax (date, key) {
      let d = this[date] ? this[date] : date
      if (Object.prototype.toString.call(d) === '[object String]') {
        d = new Date(this[date] ? this[date] : date)
      }
      this[key] = {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate()
      }
    },
    _isEmpty (obj) {
      if (obj == null) return true
      if (obj.length > 0) return false
      if (obj.length === 0) return true
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) return false
      }
      return true
    }
  },
  created () {
    this.dateFormat = this.format.split('/')
    this._initMinMax('min', 'minDate')
    this._initMinMax('max', 'maxDate')
    this._initDateArray()
  }
}
</script>