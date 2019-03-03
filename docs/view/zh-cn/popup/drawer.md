# Drawer

> 抽屉弹出层，

* 有两种调用方式：

> 1、无需引入组件直接调用`api`；

> 2、采用引入组件使用

---

## 示例

* 组件引入

```html
<owl-button @click="show"
            text="down"/>
<owl-drawer :visible.sync="visible"
            :placement="placement"
            @callback="callback">
  <p>内容部分</p>
</owl-drawer>
```

```js
export default {
  data () {
    return {
      placement: 'down',
      visible: false
    }
  },
  methods: {
    show () {
      this.visible = true
    },
    callback (val) {
      console.log('callback', val)
    }
  }
}
```

* 调用api

```html
<owl-button @click="show"
            text="left"/>
```

```js
export default {
  methods: {
    show () {
      this.$drawer({
        $props: {
          placement: 'left'
        },
        $events: {
          callback: e => console.log('$drawer callback', e)
        }
      }, createElement => {
        return [
          createElement('p', {
            'class': {
              'content': true
            }
          }, '内容部分')
        ]
      }).show()
    }
  }
}

```
## Props 配置

 参数 | 说明 | 类型 | 默认值 | 可选值
 --- | ---  | --- | --- | ---
 visible | 显示/隐藏, 支持`.sync`关键字 |  boolean | false | true/false
 placement | 弹出位置 | string | down | up/down/left/right
 lockScroll | 显示组件时是否禁用`body`滚动 |boolean | true | true/false
 maskClosable | 当单击遮罩层时是否隐藏组件 | boolean | true | true/false
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