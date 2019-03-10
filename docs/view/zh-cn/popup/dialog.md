# Dialog

> 模态框组件，提供了多种交互形式。

* 有两种调用方式：

> 1、无需引入组件直接调用`api`；

> 2、采用引入组件使用（示例只介绍第一种方式）

---
## 示例

* 一个按钮配置

```html
<owl-button @click="show">One button</owl-button>
```

```js
export default {
  methods: {
    show () {
      this.$dialog({
        $props: {
          content: '内容部分',
          btns: [{
            text: '确定',
            callback: () => console.log('btn callback')
          }]
        },
        $events: {
          callback: e => console.log('visible callback', e)
        }
      }).show()
    },
  }
}
```

* 多个按钮配置

```html
<owl-button @click="show">Multiple button</owl-button>
```

```js
export default {
  methods: {
    show () {
      this.$dialog({
        content: '内容部分',
        btns: [
          {
            text: '取消',
            callback: () => console.log('cancel callback')
          },
          {
            text: '确定',
            color: '#4B90FF',
            callback: () => console.log('confirm callback')
          }
        ]
      }).show()
    },
  }
}
```

* 按钮点击无法关闭配置

```html
<owl-button @click="show">Click the button not to close</owl-button>
```

```js
export default {
  methods: {
    show () {
      this.$dialog({
        content: '内容部分',
        btns: [
          {
            text: '无法关闭',
            callback: () => {
              this.$toast({ text: '无法关闭' }).show()
              return false
            }
          },
          {
            text: '确定',
            color: '#4B90FF',
            callback: () => console.log('confirm callback')
          }
        ]
      }).show()
    },
  }
}
```

* 内容自定义

```html
<owl-button @click="show">Content slot</owl-button>
```

```js
import owl from 'images/common/owl.png'

export default {
  methods: {
    show () {
      this.$dialog({
        btns: [{ text: '确定' }]
      }, createElement => {
        return [
          createElement('img', {
            attrs: {
              src: this.owl
            }
          })
        ]
      }).show()
    },
  }
}
```


## Props 配置

 参数 | 说明 | 类型 | 默认值 | 可选值
 --- | ---  | --- | --- | ---
 visible | 显示/隐藏, 支持`.sync`关键字 |  boolean | false | true/false
 content | 展示内容 | string | - | -
 btns | 展示按钮 | array | [] | -
 lockScroll | 显示组件时是否禁用`body`滚动 |boolean | true | true/false
 maskClosable | 当单击遮罩层时是否隐藏组件 | boolean | true | true/false
 zIndex | 元素的堆叠顺序 | number | 100 | -
 maskStyle | 自定义遮罩层样式 | object | - | -
 containerStyle | 自定义内容区样式 | object | - | -

### btns 配置

* 可参照示例

 参数 | 说明 | 类型 | 默认值 | 可选值
 --- | ---  | --- | --- | ---
 text | 展示文案 | string | - | -
 color | 展示文案颜色 | string | - | -
 style | 展示文案自定义样式 | object | {} | -
 callback | 按钮点击执行回调函数 | function | - | -

 ## 事件

事件名 | 说明 | 参数
---- | --- | ---
callback | 显示或隐藏时触发，返回当前visible值 | -

## 实例方法

事件名  | 说明 | 参数
---- | --- | ---
show | 显示 | -
hide | 隐藏 | -