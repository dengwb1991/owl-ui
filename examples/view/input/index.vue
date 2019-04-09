<template>
  <owl-page>
    <div class="examples-input">
      <owl-input :placeholder="placeholder"
                 :type="_type"
                 :disabled="arr[0].type"
                 :readonly="arr[1].type"
                 :clearable="arr[2].type"
                 :maxLength="maxLength"
                 :eye="showEye"
                 @focus="focusHandle"
                 @blur="blurHandle"
                 @change="changeHandle"
                 @eyeToggle="eyeHandle"
                 v-model="val"/>
      <p class="value-wrap">Type: {{_type}} Value：{{val}}</p>

      <owl-prop-switch v-for="item in arr"
                       :key="item.name"
                       :name="item.name"
                       v-model="item.type"/>
      <br>
      <owl-prop-switch name="password"
                       v-model="password"/>
      <owl-prop-switch v-if="password"
                       name="show eye"
                       v-model="showEye"/>
      <br>
      <owl-prop-switch name="telphone"
                       v-model="tel"/>
      <owl-prop-switch v-if="tel"
                       name="tel length"
                       v-model="phoneLength"/>
      <br>
      <h2>layout</h2>
      <owl-input-group text="姓名">
        <owl-input placeholder="请输入"/>
      </owl-input-group>
    </div>
  </owl-page>
</template>

<script>
import OwlPropSwitch from '../../components/owl-prop-switch'
export default {
  components: {
    OwlPropSwitch
  },
  data () {
    return {
      val: '',
      placeholder: '请输入',
      disabledType: false,
      arr: [
        { name: 'disabled', type: false },
        { name: 'readonly', type: false },
        { name: 'clearable', type: true }
      ],
      password: false,
      showEye: true,
      tel: false,
      phoneLength: false,
      maxLength: null
    }
  },
  computed: {
    _type () {
      switch (true) {
        case this.tel:
          return 'tel'
        case this.password:
          return 'password'
        default: return 'text'
      }
    }
  },
  methods: {
    focusHandle (event) {
      console.log('focus', event)
    },
    blurHandle (event) {
      console.log('blur', event)
    },
    changeHandle (event) {
      console.log('change', event)
    },
    eyeHandle (type) {
      console.log('toggle', type)
    }
  },
  watch: {
    tel (val) {
      if (val) {
        this.password = false
        this.val = ''
      }
      this.phoneLength = val
    },
    phoneLength (val) {
      this.maxLength = val ? 11 : null
    },
    password (val) {
      if (val) {
        this.tel = false
        this.phoneLength = false
      }
    }
  }
}
</script>
<style lang="less" scoped>
.examples-input {
  padding: 30px;
  .value-wrap {
    font-size: 28px;
    padding: 30px 0;
  }
}
</style>