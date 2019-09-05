<template>
  <div class="owl-picker">
    <owl-drawer ref="drawer"
                :visible.sync="isVisible"
                :maskClosable="maskClosable"
                :lockScroll="lockScroll"
                :z-index="zIndex"
                :maskStyle="maskStyle"
                :containerStyle="containerStyle"
                @maskClose="cancel">
      <slot name="title">
        <div class="owl-picker-choose">
            <div class="owl-picker-cancel" @click="cancel">取消</div>
            <div class="owl-picker-title">{{title}}</div>
            <div class="owl-picker-confirm" @click="confirm">确定</div>
        </div>
      </slot>
      <slot name="wheel">
        <template v-if="count > 1">
          <div class="owl-picker-wheel-wrap">
            <picker-wheel v-for="(item, index) in data"
                          :key="index"
                          ref=wheel
                          :data="item"/>
          </div>
        </template>
        <template v-else>
          <picker-wheel ref="wheel"
                        :data="data"/>
        </template>
      </slot>
    </owl-drawer>
  </div>
</template>

<script>
import OwlDrawer from '../../drawer/src/main.vue'
import PickerWheel from 'components/picker-wheel'
import visibilityMixin from 'mixins/visibility'

const HANDLER_SHOW = 'show'
const HANDLER_CONFIRM = 'confirm'
const HANDLER_CANCEL = 'cancel'
const HANDLER_SET_DATA = 'setData'

export default {
  name: 'OwlPicker',
  mixins: [visibilityMixin],
  components: {
    OwlDrawer,
    PickerWheel
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
  computed: {
    count () {
      if (this._getFirstDataIsArray()) {
        return this.data.length
      } else {
        return 1
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
    _getFirstDataIsArray () {
      const firstData = this.data[0]
      return Object.prototype.toString.call(firstData) === '[object Array]'
    },
    _handler (instruction, val = []) {
      let data = null
      if (this._getFirstDataIsArray()) {
        let arr = []
        for (let i = 0, len = this.data.length; i < len; i++) {
          arr.push(this.$refs.wheel[i][instruction](val[i]))
        }
        data = arr
      } else {
        data = this.$refs.wheel[instruction](val)
      }
      return data
    },
    setData (val) {
      this._handler(HANDLER_SET_DATA, val)
      return this
    },
    confirm () {
      this.hide()
      const data = this._handler(HANDLER_CONFIRM)
      this.$emit(HANDLER_CONFIRM, data)
      return data
    },
    cancel () {
      this.hide()
      this._handler(HANDLER_CANCEL)
      this.$emit(HANDLER_CANCEL)
    },
    show () {
      this.isVisible = true
      this._handler(HANDLER_SHOW)
      return this
    }
  }
}
</script>