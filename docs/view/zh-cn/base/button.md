# Button

> 按钮，提供了多种状态、样式以及自定义

---

## 示例

* 默认按钮 `type: default`

```html
<owl-button @click="handle">Default Button</owl-button>
```

```js
export default {
  methods: {
    handle (event) {
      console.log('event', event)
    }
  }
}
```

* 禁用按钮 <p style="color: #C8C8C8;">click事件无效</p>

```html
<owl-button type="disabled">Disabled Button</owl-button>
```

* 高亮按钮

```html
<owl-button type="light">Light Button</owl-button>
```

* 内联按钮

```html
<owl-button :inline="true">Inline Button</owl-button>
```

* 外边框按钮

```html
<owl-button :outline="true">Outline Button</owl-button>
```

* 自定义样式按钮

```html
<owl-button :btnStyle="btnStyle">Custom Button</owl-button>
```

```js
export default {
  data () {
    return {
      btnStyle: {
        border: '1px solid #090A0D',
        background: '#584628',
        color: '#F1D024'
      }
    }
  }
}
```

## Props 配置

 参数 | 说明 | 类型 | 默认值 | 可选值
 --- | ---  | --- | --- | ---
 type | 按钮类型 | string | default | default / disabled / light
 inline | 是否内联 | boolean | false | true / false
 outline | 外边框 | boolean | false | true / false
 btnStyle | 自定义按钮样式 | object | - | -

## 事件

事件名 | 说明 | 参数
---- | --- | ---
click | 点击按钮会触发，返回event | -



