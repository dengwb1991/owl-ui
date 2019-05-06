# Select

> 表单选择组件。使用v-model对数据双向绑定，非原生。

---

## 示例

* 默认

```html
<owl-select v-model="result"
            :data="data"
            title="选择器"
            placeholder="请选择"/>
```

```js
export default {
  data () {
    return {
      data: [1, 2, 3, 4, 5, 6],
      result: null
    }
  }
}
```

* 对象元素

```html
<owl-select v-model="result"
            :data="data"
            title="选择器"
            placeholder="请选择"/>
```

```js
export default {
  data () {
    return {
      data: [
        { key: '001', value: 'Cat' },
        { key: '002', value: 'Dog' },
        { key: '003', value: 'Pig' },
        { key: '004', value: 'Cow' },
        { key: '005', value: 'Sheep' },
        { key: '006', value: 'Owl' }
      ],
      result: null
    }
  }
}
```

* 设置默认值

```html
<owl-select v-model="result"
            :data="data"
            title="选择器"
            placeholder="请选择"/>
```

```js
export default {
  data () {
    return {
      data: [
        { key: '001', value: 'Cat' },
        { key: '002', value: 'Dog' },
        { key: '003', value: 'Pig' },
        { key: '004', value: 'Cow' },
        { key: '005', value: 'Sheep' },
        { key: '006', value: 'Owl' }
      ],
      result: '006'
    }
  }
}
```

## Props 配置

 参数 | 说明 | 类型 | 默认值 | 可选值
 --- | ---  | --- | --- | ---
 v-model | select值，双向数据绑定 | string | - | -
 data | 选择器数据 | array | [] | -
 title | 选择器标题 | string | - | -
 lockScroll | 显示组件时是否禁用`body`滚动 |boolean | true | true/false
 maskClosable | 当单击遮罩层时是否隐藏组件 | boolean | true | true/false
 zIndex | 元素的堆叠顺序 | number | 100 | -
 maskStyle | 自定义遮罩层样式 | object | - | -
 containerStyle | 自定义内容区样式 | object | - | -

## 事件

事件名 | 说明 | 参数
---- | --- | ---
callback | 显示或隐藏时触发 | true / false
confirm | 点击确认触发，返回当前选中的值 | data
cancel | 点击取消触发，返回上次确认或默认的值 | data

## 实例方法

事件名  | 说明 | 参数
---- | --- | ---
show | 显示 | -
hide | 隐藏 | -