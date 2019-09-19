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

* 设置默认值

```html
<owl-button @click="show">show</owl-button>
```

```js
export default {
  data () {
    return {
      pickerData: ['Google', 'IBM', 'Apple', 'Facebook', 'Baidu'],
      result: 'Apple',
      picker: null
    }
  },
  methods: {
    show () {
      this.picker.show()
    }
  },
  created () {
    this.picker = this.$picker({
      $props: {
        data: this.pickerData
      },
      $events: {
        confirm: data => {
          this.result = data
          console.log('confirm:', data)
        },
        cancel: data => {
          console.log('cancel:', data)
        }
      }
    }).setData(this.result)
  }
}
```

* 设置多列数据

```html
<owl-button @click="show">show</owl-button>
```

```js
export default {
  data () {
    return {
      pickerData: [['星期六', '星期日'], ['上午', '中午', '下午']],
      // pickerData: [
      //   [
      //     { key: '6', value: '星期六' },
      //     { key: '7', value: '星期日' }
      //   ],
      //   [
      //     { key: 'forenoon', value: '上午' },
      //     { key: 'noon', value: '中午' },
      //     { key: 'afternoon', value: '下午' },
      //   ]
      // ],
      result: null,
      picker: null
    }
  },
  methods: {
    show () {
      this.picker.show()
    }
  },
  created () {
    this.picker = this.$picker({
      $props: {
        data: this.pickerData
      },
      $events: {
        confirm: data => {
          this.result = data
          console.log('confirm:', data)
        },
        cancel: data => {
          console.log('cancel:', data)
        },
        callback: data => {
          console.log('callback:', data)
        }
      }
    })
    /**
     * [object, String] .setData(['星期日', '中午'])
     * [object, Object] .setData(['7', 'noon'])
     */
  }
}
```

* title 部分使用 `slot` 插槽

```html
<owl-button @click="show">show</owl-button>

<owl-picker ref="picker"
            :data="pickerData"
            :visible.sync="visible">
  <template slot='title'>
    <div class="title-wrap">
      <p @click="cancel">取消</p>
      <p @click="confirm">确定</p>
    </div>
  </template>
</owl-picker>
```

```js
export default {
  data () {
    return {
      pickerData: ['Google', 'IBM', 'Apple', 'Facebook', 'Baidu'],
      result: 'Google',
      visible: false
    }
  },
  methods: {
    show () {
      // or this.$refs.picker.show()
      this.visible = true
    },
    cancel () {
      this.$refs.picker.cancel()
    },
    confirm () {
      this.result = this.$refs.picker.confirm()
    }
  }
}
```

## Props 配置

 参数 | 说明 | 类型 | 默认值 | 可选值
 --- | ---  | --- | --- | ---
 visible | 显示/隐藏, 支持`.sync`关键字 |  boolean | false | true/false
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
callback | 显示或隐藏时触发，返回当前visible值 | -
confirm | 点击确认触发，返回当前选中的值 | -
cancel | 点击取消触发，回到上次滚动位置 | -

## 实例方法

事件名  | 说明 | 参数
---- | --- | ---
setData | 设置默认值 | 选择器值，如果为多列，传入数组。如果数据为对象，该值为key
show | 显示 | -
hide | 隐藏 | -