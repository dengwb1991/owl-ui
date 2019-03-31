# Input

> 输入框组件。使用v-model对数据双向绑定，支持多种类型。

---

## 示例

* 默认

```html
<owl-input v-model="val"
           placeholder="请输入"/>
```

```js
export default {
  data () {
    return {
      val: null
    }
  }
}
```

* 密码

```html
<owl-input type="password"
           v-mode="val"/>
```

* 手机号

```html
<owl-input type="tel"
           maxLength="13"
           v-mode="val"/>
```

## Props 配置

 参数 | 说明 | 类型 | 默认值 | 可选值
 --- | ---  | --- | --- | ---
 v-model | value值，双向数据绑定 | string | - | -
 type | 类型 | string | text | text / password / tel
 placeholder | 文本说明 | string | - | -
 disabled | 禁用状态 | boolean | false | true / false
 readonly | 只读状态 | boolean | false | true / false
 autofocus | 获得焦点（`warn兼容`） | boolean | false | true / false
 autocomplete | 自动补全（`warn兼容`） | boolean | false | true / false
 maxLength | 最大长度 | number | 60 | -
 clearable | 是否使用清空按钮 | boolean / object | true | true / false 
 eye | 密码眼睛不可见 | boolean / object | true | true / false

`clearable` 可配置为对象形式 `{ visible: true, blurHidden: true }`，其中 `visible` 控制是否显示，`blurHidden` 控制离焦后是否隐藏。

`eye` 可配置为对象形式 `{ open: true, reverse: false }`，其中 `open` 控制眼睛张开还是闭合，`reverse` 控制密码可见和眼睛开闭是否相反。

 ## 事件

事件名 | 说明 | 参数
---- | --- | ---
focus | 输入框聚焦后触发此事件，如果禁用状态，则不触发 | event事件对象
blur | 输入框失焦后触发此事件 | event事件对象
