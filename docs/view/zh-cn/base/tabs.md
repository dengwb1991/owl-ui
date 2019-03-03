# Tabs

> 选型卡

---

## 示例

* 默认

```html
<owl-tabs :data="data"
          :active.sync="active"
          @callback="callback"/>
```

```js
export default {
  data () {
    return {
      data: ['Google', 'IBM'],
      active: 0
    }
  },
  methods: {
    callback (val) {
      console.log(val)
    }
  }
}
```

* 不使用下划线

```html
<owl-tabs :data="data"
          :active.sync="active"
          :lineUse="lineUse"
          @callback="callback"/>
```

```js
export default {
  data () {
    return {
      data: ['Google', 'IBM', 'Apple', 'Oracle'],
      active: 0,
      lineUse: false
    }
  }
}
```

* 多元素 & 修改样式

```html
<owl-tabs :data="data"
          :active.sync="active"
          :initCallback="initCallback"
          :tabWidth="tabWidth"
          :tabHeight="tabHeight"
          :lineWidth="lineWidth"
          @callback="callback"/>
```

```js
export default {
  data () {
    return {
      data: ['Google', 'IBM', 'Apple', 'Oracle', 'Facebook', 'Baidu'],
      active: 0,
      tabWidth: '100px',
      tabHeight: '40px',
      lineWidth: '30px'
    }
  }
}
```

* 数据对象

```html
<owl-tabs :data="data"
          :active.sync="active"
          :initCallback="initCallback"
          :lineWidth="lineWidth"
          :highlight="highlight"
          :lineColor="lineColor"
          @callback="callback"/>
```

```js
export default {
  data () {
    return {
      data: [{key: 'Google'}, {key: 'IBM'}, {key: 'Apple'}, {key: 'Oracle'}, {key: 'Facebook'}, {key: 'Baidu'}],
      active: 1,
      name: 'key',
      lineWidth: '40px',
      highlight: '#24292e',
      lineColor: '#24292e'
    }
  }
}
```

* 自定义

```html
<owl-tabs :data="data"
          :active.sync="active"
          :initCallback="initCallback"
          :background="background"
          :activeStyle="activeStyle"
          :lineStyle="lineStyle"
          :name="name"
          @callback="callback"/>
```

```js
export default {
  data () {
    return {
      data: [{key: 'Google'}, {key: 'IBM'}, {key: 'Apple'}, {key: 'Oracle'}, {key: 'Facebook'}, {key: 'Baidu'}],
      active: 0,
      name: 'key',
      background: '#24292e',
      activeStyle: {
        'color': '#FFF',
        'font-family': 'PingFangSC-Medium'
      },
      lineStyle: {
        'width': '40px',
        'background': '#FFF',
        'height': '4px',
        'border-radius': '2px'
      },
      initCallback: true
    }
  }
}
```

## Props 配置

 参数 | 说明 | 类型 | 默认值 | 可选值
 --- | ---  | --- | --- | ---
 data | 选型卡数据 |  array | [] | -
 active | 选中元素的下标，支持`.sync`关键字 | number | 0 | -
 tabWidth | 标签宽度 | string | '110px' | -
 tabHeight | 标签高度 | string | '40px' | -
 tabColor | 标签字体颜色 | string | '#999' | -
 tabStyle | 标签自定义样式 | object | {} | -
 fontSize | 标签字体大小 | string | '14px' | -
 fontFamily | 标签字体库 | string | 'PingFangSC-Regular' | -
 name | 如果数据元素为对象，name作为对象的key值 | string | null | -
 background | 背景颜色 | string | '#FFF' | -
 highlight | 选中高亮颜色 | string | '#A5884D' | -
 activeStyle | 选中自定义样式 | object | {} | -
 lineUse | 是否使用线 | boolean | true | -
 lineHeight | 线高度 | string | '2px' | -
 lineWidth | 线宽度 | string | null | -
 lineColor | 线颜色 | string | '#A5884D' | -
 lineStyle | 线自定义样式 | object | {} | -
 initCallback | 是否初始化执行回调 | boolean | false | -

## 事件

事件名 | 说明 | 参数
---- | --- | ---
callback | 每次切换标签会执行 | 当前选中标签的值

## 实例方法

事件名  | 说明 | 参数
---- | --- | ---
getCurrData | 返回当前选中标签的值 | -
