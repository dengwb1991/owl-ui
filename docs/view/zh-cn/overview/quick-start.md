# 快速上手

## 安装

```bash
npm install owl-ui -S
```

## 使用

### 全量加载

```js
import 'owl-ui/lib/flexible' // Mobile adaptive solution
import Vue from 'vue'
import Owl from 'owl-ui'
import 'owl-ui/lib/styles/owl-ui.css'

Vue.use(Owl)
```

### 按需加载

```js
/** main.js **/

import 'owl-ui/lib/flexible'
import Vue from 'vue'
import OwlButton from 'owl-ui/lib/button/button.js'
import 'owl-ui/lib/button/button.css'

Vue.use(OwlButton)


/** main.vue **/

<template>
  <owl-button :text="'按钮'"/>
</template>
```

<h3>注</h3>

* `styles/owl-ui.css` 为`rem单位`，所以配套使用`flexible.js`，单个组件命名样式同理也为`rem单位`。

* 若不想使用`flexible.js`，`每个组件或styles`文件夹内分别提供`px单位`样式文件。如`styles/owl-ui-px.css`、`button/button-px.css`。

