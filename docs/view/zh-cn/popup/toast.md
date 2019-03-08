# Toast

> 信息提示浮框，常用于主动操作后的反馈提示。

* 有两种调用方式：

> 1、无需引入组件直接调用`api`；

> 2、采用引入组件使用（示例只介绍第一种方式）

---

## 示例

* 默认调用

```html
<owl-button @click="show">Show default</owl-button>
```

```js
export default {
  methods: {
    show () {
      const toast = this.$toast({
        $props: {
          text: '欢迎光临'
        },
        $events: {
          callback: e => console.log('callback:', e)
        }
      })
      toast.show()
    }
  }
}
```

* 设置时间

```html
<owl-button @click="show">Show 1s</owl-button>
```

```js
export default {
  methods: {
    show () {
      this.$toast({
        text: '欢迎光临',
        time: 1000
      }).show()
    }
  }
}
```

* 展示蒙层

```html
<owl-button @click="show">Show mask</owl-button>
```

```js
export default {
  methods: {
    show () {
      this.$toast({
        text: '当文字超过一行最长的限制后折行',
        maskVisible: true
      }).show()
    }
  }
}
```

* 展示成功提示

```html
<owl-button @click="show">Show success</owl-button>
```

```js
export default {
  methods: {
    show () {
      this.$toast({
        text: '成功提示',
        type: 'success'
      }).show()
    }
  }
}
```

* 展示失败提示

```html
<owl-button @click="show">Show failure</owl-button>
```

```js
export default {
  methods: {
    show () {
      this.$toast({
        text: '失败提示',
        type: 'failure'
      }).show()
    }
  }
}
```

* 展示警示提示

```html
<owl-button @click="show">Show caution</owl-button>
```

```js
export default {
  methods: {
    show () {
      this.$toast({
        text: '警示信息',
        type: 'caution'
      }).show()
    }
  }
}
```

## Props 配置

 参数 | 说明 | 类型 | 默认值 | 可选值
 --- | ---  | --- | --- | ---
 visible | 显示/隐藏, 支持`.sync`关键字 |  boolean | false | true/false
 text | 展示文案 | string | - | -
 type | 展示类型 | string | text | text/caution/failure/success
 time | 显示时间（单位毫秒）| number | 3000 | -
 maskVisible | 显示/隐藏遮罩层 |boolean | false | true/false
 zIndex | 元素的堆叠顺序 | number | 100 | -
 maskStyle | 自定义遮罩层样式 | object | - | -
 containerStyle | 自定义内容区样式 | object | - | -

## 事件

事件名 | 说明 | 参数
---- | --- | ---
callback | 显示或隐藏时触发，返回当前visible值 | -

## 实例方法

事件名  | 说明 | 参数
---- | --- | ---
show | 显示 | -
hide | 隐藏 | -