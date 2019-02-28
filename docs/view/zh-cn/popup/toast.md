# Toast

> 信息提示浮框

* 有两种调用方式：

> 1、无需引入组件直接调用`api`；

> 2、采用引入组件使用（示例只介绍第一种方式）

---

## 示例

* 默认调用

```html
<owl-button @click="show"
            text="show default"/>
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
<owl-button @click="show"
            text="show 1s"/>
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

## Props 配置

 参数 | 说明 | 类型 | 默认值 | 可选值
 --- | ---  | --- | --- | ---
 visible | 显示/隐藏, 支持`.sync`关键字 |  boolean | false | true/false
 text | 展示文案 | string | - | -
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