# Range

> 范围滑块

---

## 示例

* 默认

```html
<owl-range v-model="val"
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

* 禁用

```html
<owl-range v-model="val"
           disabled/>
```

* 显示间断点
```html
<owl-range v-model="val"
           show-stops/>
```

## Props 配置

 参数 | 说明 | 类型 | 默认值 | 可选值
 --- | ---  | --- | --- | ---
 v-model | value值，双向数据绑定 | number | - | -
 min | 最小取值范围 | number | 0 | -
 max | 最大取值范围 | number | 100 | -
 step | 间隔长度 | number | 1 | -
 showStops | 是否显示间断点，建议在 step 不密集时使用 | boolean | false | true / false
 disabled | 禁用状态 | boolean | false | true / false
 color | 滑块区间颜色 | string | #57a3f3 | -
 backgroundColor | 滑块背景颜色 | string | #e8eaec | -
## 事件

事件名 | 说明 | 参数
---- | --- | ---
change | 滑动结束(touchend)时触发 | value
