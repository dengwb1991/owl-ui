# DatePicker

> 日期选择器

* 有两种调用方式：

> 1、无需引入组件直接调用`api`；

> 2、采用引入组件使用

---

## 示例

* 默认

```html
<owl-button @click="show">show</owl-button>
```

```js
export default {
  data () {
    return {
      picker: null
    }
  },
  methods: {
    show () {
      this.picker.show()
    }
  },
  created () {
    this.picker = this.$datePicker({
      $events: {
        confirm: data => {
        },
        cancel: data => {
        },
        callback: data => {
        }
      }
    })
  }
}
```

* 更改日期格式

```html
<owl-button @click="show">show</owl-button>
```

```js
export default {
  methods: {
    show () {
      this.$datePicker({
        $props: {
          format: 'yyyy年/MM月/dd日'
        },
        $events: {
          confirm: data => {
          },
          cancel: data => {
          },
          callback: data => {
          }
        }
      }).show()
    }
  }
}
```

* 设置最小日期、最大日期

```html
<owl-button @click="show">show</owl-button>
```

```js
export default {
  methods: {
    show () {
      this.$datePicker({
        $props: {
          min: '1991/2/24', // or new Date('1991/2/24')
          max: '2019/8/22'
        },
        $events: {
          confirm: data => {
          },
          cancel: data => {
          },
          callback: data => {
          }
        }
      }).show()
    }
  }
}
```

* 设置默认值

```html
<owl-button @click="show">show</owl-button>
```

```js
export default {
  data () {
    return {
      picker: null
    }
  },
  methods: {
    show () {
      this.picker.show()
    }
  },
  created () {
    this.picker = this.$datePicker({
      $events: {
        confirm: data => {
        },
        cancel: data => {
        },
        callback: data => {
        }
      }
    }).setData('1991/2/24') // or new Date()
  }
}
```

* 引入形式

```html
<owl-button @click="show">show</owl-button>
<owl-date-picker :visible.sync="visible"/>
```

```js
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    show () {
      this.visible = true
    }
  }
}
```

## Props 配置

> 日期格式用 `/` 分开

 参数 | 说明 | 类型 | 默认值 | 可选值
 --- | ---  | --- | --- | ---
 visible | 显示/隐藏, 支持`.sync`关键字 |  boolean | false | true / false
 format | 数据日期格式展示 | string | yyyy/MM/dd | -
 min | 最小日期 | date / string | new Date('1970/1/1') | 1970/1/1
 max | 最大日期 | date / string | new Date('2020/10/15') | 2020/10/15
 title | 选择器标题 | string | - | -
 lockScroll | 显示组件时是否禁用`body`滚动 |boolean | true | true / false
 maskClosable | 当单击遮罩层时是否隐藏组件 | boolean | true | true / false
 zIndex | 元素的堆叠顺序 | number | 100 | -
 maskStyle | 自定义遮罩层样式 | object | - | -
 containerStyle | 自定义内容区样式 | object | - | -

 ## 事件

事件名 | 说明 | 参数
---- | --- | ---
callback | 显示或隐藏时触发，返回当前visible值 | -
confirm | 点击确认触发，返回当前选中的值 | -
cancel | 点击取消触发，回到上次滚动位置 | -

## 实例方法

事件名  | 说明 | 参数
---- | --- | ---
setData | 设置默认值 | 传入 Date 或 字符串，如果有时间设置用 '/' 分开
show | 显示 | -
hide | 隐藏 | -