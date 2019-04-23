# Picker

> 选择器

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
  methods: {
    show () {
      this.$picker({
        $props: {
          data: [1, 2, 3, 4, 5, 6]
        },
        $events: {
          confirm: data => {
            console.log('confirm:', data)
          },
          cancel: data => {
            console.log('cancel:', data)
          }
        }
      }).show()
    }
  }
}
```

* 对象元素

```html
<owl-button @click="show">show</owl-button>
```

```js
export default {
  methods: {
    show () {
      this.$picker({
        $props: {
          data: [
            { key: '001', value: 'Cat' },
            { key: '002', value: 'Dog' },
            { key: '003', value: 'Pig' },
            { key: '004', value: 'Cow' },
            { key: '005', value: 'Sheep' },
            { key: '006', value: 'Owl' }
          ],
        },
        $events: {
          confirm: data => {
            console.log('confirm:', data)
          },
          cancel: data => {
            console.log('cancel:', data)
          }
        }
      }).show()
    }
  }
}
```

## Props 配置

 参数 | 说明 | 类型 | 默认值 | 可选值
 --- | ---  | --- | --- | ---
 visible | 显示/隐藏, 支持`.sync`关键字 |  boolean | false | true/false
 data | 选择器数据 | Array | [] | -
 lockScroll | 显示组件时是否禁用`body`滚动 |boolean | true | true/false
 maskClosable | 当单击遮罩层时是否隐藏组件 | boolean | true | true/false
 zIndex | 元素的堆叠顺序 | number | 100 | -
 maskStyle | 自定义遮罩层样式 | object | - | -
 containerStyle | 自定义内容区样式 | object | - | -

## 事件

事件名 | 说明 | 参数
---- | --- | ---
callback | 显示或隐藏时触发，返回当前visible值 | visible
confirm | 点击确认触发，返回当前选中的值 | data
cancel | 点击取消触发，返回上次确认或默认的值 | data

## 实例方法

事件名  | 说明 | 参数
---- | --- | ---
show | 显示 | -
hide | 隐藏 | -