<template>
  <div role="application" aria-label="Chrome color picker" :class="['vc-chrome', disableAlpha ? 'vc-chrome__disable-alpha' : '']">
    <div class="vc-chrome-saturation-wrap">
      <saturation v-model="colors" @change="childChange"></saturation>
    </div>
    <div class="vc-chrome-body">
      <div class="vc-chrome-controls">
        <div class="vc-chrome-color-wrap">
          <div :aria-label="`current color is ${colors.hex}`" class="vc-chrome-active-color" :style="{background: activeColor}"></div>
          <checkboard v-if="!disableAlpha"></checkboard>
        </div>

        <div class="vc-chrome-sliders">
          <div class="vc-chrome-hue-wrap">
            <hue v-model="colors" @change="childChange"></hue>
          </div>
          <div class="vc-chrome-alpha-wrap" v-if="!disableAlpha">
            <alpha v-model="colors" @change="childChange"></alpha>
          </div>
        </div>
      </div>

      <div class="vc-chrome-fields-wrap" v-if="!disableFields">
        <div class="vc-chrome-fields" v-show="fieldsIndex === 0">
          <!-- hex -->
          <div class="vc-chrome-field">
            <ed-in v-if="!hasAlpha" label="hex" :value="colors.hex" @change="inputChange"></ed-in>
            <ed-in v-if="hasAlpha" label="hex" :value="colors.hex8" @change="inputChange"></ed-in>
          </div>
        </div>
        <div class="vc-chrome-fields" v-show="fieldsIndex === 1">
          <!-- rgba -->
          <div class="vc-chrome-field">
            <ed-in label="r" :value="colors.rgba.r" @change="inputChange"></ed-in>
          </div>
          <div class="vc-chrome-field">
            <ed-in label="g" :value="colors.rgba.g" @change="inputChange"></ed-in>
          </div>
          <div class="vc-chrome-field">
            <ed-in label="b" :value="colors.rgba.b" @change="inputChange"></ed-in>
          </div>
          <div class="vc-chrome-field" v-if="!disableAlpha">
            <ed-in label="a" :value="colors.a" :arrow-offset="0.01" :max="1" @change="inputChange"></ed-in>
          </div>
        </div>
        <div class="vc-chrome-fields" v-show="fieldsIndex === 2">
          <!-- hsla -->
          <div class="vc-chrome-field">
            <ed-in label="h" :value="hsl.h" @change="inputChange"></ed-in>
          </div>
          <div class="vc-chrome-field">
            <ed-in label="s" :value="hsl.s" @change="inputChange"></ed-in>
          </div>
          <div class="vc-chrome-field">
            <ed-in label="l" :value="hsl.l" @change="inputChange"></ed-in>
          </div>
          <div class="vc-chrome-field" v-if="!disableAlpha">
            <ed-in label="a" :value="colors.a" :arrow-offset="0.01" :max="1" @change="inputChange"></ed-in>
          </div>
        </div>
        <!-- btn -->
        <div class="vc-chrome-toggle-btn" role="button" aria-label="Change another color definition" @click="toggleViews">
          <div class="vc-chrome-toggle-icon">
            <svg style="width:24Px; height:24Px" viewBox="0 0 24 24"
              @mouseover="showHighlight"
              @mouseenter="showHighlight"
              @mouseout="hideHighlight">
              <path fill="#333" d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" />
            </svg>
          </div>
          <div class="vc-chrome-toggle-icon-highlight" v-show="highlight"></div>
        </div>
        <!-- btn -->
      </div>
    </div>
  </div>
</template>

<script>
import colorMixin from '../mixins/color'
import editableInput from './common/editable-input.vue'
import saturation from './common/saturation.vue'
import hue from './common/hue.vue'
import alpha from './common/alpha.vue'
import checkboard from './common/checkboard.vue'

export default {
  name: 'Color',
  mixins: [colorMixin],
  props: {
    disableAlpha: {
      type: Boolean,
      default: false
    },
    disableFields: {
      type: Boolean,
      default: false
    }
  },
  components: {
    saturation,
    hue,
    alpha,
    'ed-in': editableInput,
    checkboard
  },
  data () {
    return {
      fieldsIndex: 0,
      highlight: false
    }
  },
  computed: {
    hsl () {
      const { h, s, l } = this.colors.hsl
      return {
        h: h.toFixed(),
        s: `${(s * 100).toFixed()}%`,
        l: `${(l * 100).toFixed()}%`
      }
    },
    activeColor () {
      const rgba = this.colors.rgba
      return 'rgba(' + [rgba.r, rgba.g, rgba.b, rgba.a].join(',') + ')'
    },
    hasAlpha () {
      return this.colors.a < 1
    }
  },
  methods: {
    childChange (data) {
      this.colorChange(data)
    },
    inputChange (data) {
      if (!data) {
        return
      }
      if (data.hex) {
        this.isValidHex(data.hex) && this.colorChange({
          hex: data.hex,
          source: 'hex'
        })
      } else if (data.r || data.g || data.b || data.a) {
        this.colorChange({
          r: data.r || this.colors.rgba.r,
          g: data.g || this.colors.rgba.g,
          b: data.b || this.colors.rgba.b,
          a: data.a || this.colors.rgba.a,
          source: 'rgba'
        })
      } else if (data.h || data.s || data.l) {
        const s = data.s ? (data.s.replace('%', '') / 100) : this.colors.hsl.s
        const l = data.l ? (data.l.replace('%', '') / 100) : this.colors.hsl.l

        this.colorChange({
          h: data.h || this.colors.hsl.h,
          s,
          l,
          source: 'hsl'
        })
      }
    },
    toggleViews () {
      if (this.fieldsIndex >= 2) {
        this.fieldsIndex = 0
        return
      }
      this.fieldsIndex++
    },
    showHighlight () {
      this.highlight = true
    },
    hideHighlight () {
      this.highlight = false
    }
  }
}
</script>

<style>
.vc-chrome {
  background: #fff;
  border-radius: 2Px;
  box-shadow: 0 0 2Px rgba(0,0,0,.3), 0 4Px 8Px rgba(0,0,0,.3);
  box-sizing: initial;
  width: 225Px;
  font-family: Menlo;
  background-color: #fff;
}
.vc-chrome-controls {
  display: flex;
}
.vc-chrome-color-wrap {
  position: relative;
  width: 36Px;
}
.vc-chrome-active-color {
  position: relative;
  width: 30Px;
  height: 30Px;
  border-radius: 15Px;
  overflow: hidden;
  z-index: 1;
}
.vc-chrome-color-wrap .vc-checkerboard {
  width: 30Px;
  height: 30Px;
  border-radius: 15Px;
  background-size: auto;
}
.vc-chrome-sliders {
  flex: 1;
}
.vc-chrome-fields-wrap {
  display: flex;
  padding-top: 16Px;
}
.vc-chrome-fields {
  display: flex;
  margin-left: -6Px;
  flex: 1;
}
.vc-chrome-field {
  padding-left: 6Px;
  width: 100%;
}
.vc-chrome-toggle-btn {
  width: 32Px;
  text-align: right;
  position: relative;
}
.vc-chrome-toggle-icon {
  margin-right: -4Px;
  margin-top: 12Px;
  cursor: pointer;
  position: relative;
  z-index: 2;
}
.vc-chrome-toggle-icon-highlight {
  position: absolute;
  width: 24Px;
  height: 28Px;
  background: #eee;
  border-radius: 4Px;
  top: 10Px;
  left: 12Px;
}
.vc-chrome-hue-wrap {
  position: relative;
  height: 10Px;
  margin-bottom: 8Px;
}
.vc-chrome-alpha-wrap {
  position: relative;
  height: 10Px;
}
.vc-chrome-hue-wrap .vc-hue {
  border-radius: 2Px;
}
.vc-chrome-alpha-wrap .vc-alpha-gradient {
  border-radius: 2Px;
}
.vc-chrome-hue-wrap .vc-hue-picker, .vc-chrome-alpha-wrap .vc-alpha-picker {
  width: 12Px;
  height: 12Px;
  border-radius: 6Px;
  transform: translate(-6Px, -2Px);
  background-color: rgb(248, 248, 248);
  box-shadow: 0 1Px 4Px 0 rgba(0, 0, 0, 0.37);
}
.vc-chrome-body {
  padding: 16Px 16Px 12Px;
  background-color: #fff;
}
.vc-chrome-saturation-wrap {
  width: 100%;
  padding-bottom: 55%;
  position: relative;
  border-radius: 2Px 2Px 0 0;
  overflow: hidden;
}
.vc-chrome-saturation-wrap .vc-saturation-circle {
  width: 12Px;
  height: 12Px;
}

.vc-chrome-fields .vc-input__input {
  font-size: 11Px;
  color: #333;
  width: 100%;
  border-radius: 2Px;
  border: none;
  box-shadow: inset 0 0 0 1Px #dadada;
  height: 21Px;
  text-align: center;
}
.vc-chrome-fields .vc-input__label {
  text-transform: uppercase;
  font-size: 11Px;
  line-height: 11Px;
  color: #969696;
  text-align: center;
  display: block;
  margin-top: 12Px;
}

.vc-chrome__disable-alpha .vc-chrome-active-color {
  width: 18Px;
  height: 18Px;
}
.vc-chrome__disable-alpha .vc-chrome-color-wrap {
  width: 30Px;
}
.vc-chrome__disable-alpha .vc-chrome-hue-wrap {
  margin-top: 4Px;
  margin-bottom: 4Px;
}
</style>
