# Range

> 滑块范围取值

---

## 示例

```html
<owl-range v-model="val"
           :disabled="disabled"
           :min="min"
           :max="max"
           :step="step"
           @change="change"/>
```

```js
export default {
  data () {
    return {
      val: 20,
      disabled: false,
      min: 0,
      max: 100,
      step: 1
    }
  },
  methods: {
    change (val) {}
  }
}
```

## Props 配置

 参数 | 说明 | 类型 | 默认值 | 可选值
 --- | ---  | --- | --- | ---
 v-model | value值，双向数据绑定 | number | - | -
 min | 最小取值范围 | number | 0 | -
 max | 最大取值范围 | number | 100 | -
 step | 间隔长度 | number | 1 | -
 disabled | 禁用状态 | boolean | false | true / false
 
## 事件

事件名 | 说明 | 参数
---- | --- | ---
change | 滑动结束(touchend)时触发 | value
