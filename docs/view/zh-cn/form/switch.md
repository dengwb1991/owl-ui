# Switch

> 滑动开关，用于切换 `on/off` 状态

---

## 示例

* 默认样式，支持初始化执行callback回调

```html
<owl-switch v-model="val"
            :initCallback="true"
            @callback="handle">
  {{val}}
</owl-switch>
```

```js
export default {
  data () {
    return {
      val: false
    }
  },
  methods: {
    handle (val) {
      console.log(val)
    }
  }
}
```

* 更改颜色

```html
<owl-switch v-model="val"
            :color="color">
  {{this.color}}
</owl-switch>
```

```js
export default {
  data () {
    return {
      val: true,
      color: '#584628'
    }
  }
}
```

* 禁用状态

```html
<owl-switch v-model="val" disabled>disabled</owl-switch>
```

## Props 配置

 参数 | 说明 | 类型 | 默认值 | 可选值
 --- | ---  | --- | --- | ---
 v-model | 开关状态，双向数据绑定 | boolean | false | true / false
 color | 开启时颜色样式 | string | #4B90FF | -
 disabled | 是否禁用 | boolean | false | true / false
 initCallback | 是否初始化执行回调 | boolean | false | true / false

 ## 事件

事件名 | 说明 | 参数
---- | --- | ---
callback | 切换状态会触发，返回当前状态值 | -
