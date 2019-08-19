<template>
  <div class="color-picker">
    <div class="color-wrap"
         :style="bgColor"
         @click="onOff"></div>
    <color-base v-show="visible"
                v-dragging="{ prevent: false }"
                :value="value"
                @input="updateValue"/>
  </div>
</template>

<script>
import ColorBase from '../color-base'

export default {
  /**
   *  value: {
   *    hex: '#FFF'
   *  }
   */
  props: {
    value: Object
  },
  components: {
    ColorBase
  },
  data () {
    return {
      visible: false
    }
  },
  computed: {
    bgColor () {
      return {
        'background-color': this.value.hex,
        mounseLock: true,
        offsetLeft: 0,
        offsetTop: 0
      }
    }
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    },
    onOff () {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="less" scoped>
.vc-chrome {
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 100;
}
.color-wrap {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>