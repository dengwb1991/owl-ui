<template>
  <owl-page>
    <div class="examples-input">
      <owl-input :placeholder="placeholder"
                 :type="_type"
                 :disabled="arr[0].type"
                 :readonly="arr[1].type"
                 :clearable="arr[2].type"
                 :eye="showEye"
                 v-model="val"/>
      <p class="value-wrap">Value：{{val}}</p>

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
      showEye: true
    }
  },
  computed: {
    _type () {
      return this.password ? 'password' : 'text'
    }
  }
}
</script>
<style lang="less" scoped>
.owl-input {
  padding: 20px 10px;
}
.examples-input {
  padding: 30px;
  .value-wrap {
    font-size: 28px;
    padding: 30px 0;
  }
}
</style>