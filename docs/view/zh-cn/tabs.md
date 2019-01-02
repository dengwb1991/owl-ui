# Tabs

## Install

``` bash
npm i dwb-vue-tab --save
```

## Mount

### mount with global

``` javascript
import Vue from 'vue'
import TabBar from 'dwb-vue-tab'

Vue.use(TabBar)
```

### mount with component

``` javascript
import { DwbVueTab } from 'dwb-vue-tab'

export default {
  components: {
    DwbVueTab
  }
}
```

## Props

 Attribute | Type | Default | Description 
 --- | ---  | --- | --- 
 data  | array | [] | for data rendered with tab-bar
 active | [number,string] | 0 | the element selected by default, supports the .sync modifier
 tabWidth | string | '110px' | tab-bar width
 tabHeight | string | '40px' | tab-bar height
 tabColor | string | '#999' | tab-bar color
 tabStyle | object | {} | custom style of tab-bar
 fontSize | string | '14px' | font size of tab-bar
 fontFamily | string | 'PingFangSC-Regular' | font family of tab-bar
 name | [string, obejct] | null | if the data-element is an object, render data with name
 background | string | '#FFF' | tab-bar background
 highlight | string | '#A5884D' | activated the colors shown
 activeStyle | object | {} | activated the style shown
 lineUse | boolean | true | use underlining or not
 lineHeight | string | '2px' | underline height
 lineWidth | [string, object] | null | underline width
 lineColor | string | '#A5884D' | underline color
 lineStyle | object | {} | custom style of underline
 initCallback | boolean | false | initialize execution callback
 
 ## Events

Attribute | Value | Description
---- | --- | ---
callback | (activated element) | execute when switching activation elements

## Demo

```html
<template>
    <DwbVueTab :data="tabs"
               :active.sync="active"
               :initCallback="initCallback"
               @callback="getData"/>
</template>
<script>
export default {
  data () {
    return {
      tabs: ['Tab', 'Bar'],
      active: 0,
      initCallback: true,
    }
  },
  methods: {
    getData (res) {
      console.log(res)
    }
  }
}
</script>
```


## Example
```bash
npm install

npm run dev
```

[[Vue Tab Bar]](http://vuetool.dengwb.com/#/tab)

[[More Example]](https://github.com/dengwb1991/Tool/tree/master/src/components/Tab)

## Author
[[Dengwb]](http://www.dengwb.com/app/welcome.html)
