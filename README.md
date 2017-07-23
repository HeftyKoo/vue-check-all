# vue-lazy-render

[![GitHub issues](https://img.shields.io/github/issues/yeyuqiudeng/vue-check-all.svg)](https://github.com/yeyuqiudeng/vue-check-all/issues)
[![GitHub forks](https://img.shields.io/github/forks/yeyuqiudeng/vue-check-all.svg)](https://github.com/yeyuqiudeng/vue-check-all/network)
[![GitHub stars](https://img.shields.io/github/stars/yeyuqiudeng/vue-check-all.svg)](https://github.com/yeyuqiudeng/vue-check-all/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/yeyuqiudeng/vue-check-all.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

[![NPM](https://nodei.co/npm/vue-check-all.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-check-all/)

## Description

vue check all component。

## Dependence

* vue: ^2.3.0

## Installation

    npm install vue-check-all

## Usage

    import CheckAll from 'vue-check-all'
    Vue.use(CheckAll)

## Props

| property  |               description                |  type   | default | required |
| --------- | :--------------------------------------: | :-----: | :-----: | :------: |
| list      |              The data list               |  Array  |   []    |   true   |
| check-all | If the list is all checked. If the value is true, the list will be all checked. Must use .sync modifier. | Boolean |  false  |   true   |

## scopedSlot

| property          |               description                |   type   |
| ----------------- | :--------------------------------------: | :------: |
| list              | The list contains the `checked` key and `data` key。If the `checked` is true, It means the `data` is checked |  Array   |
| selections        |       The items which are checked.       |  Array   |
| select-all-change | If you want to change the `checkAll` prop，you should call this function，to notify the component update selections. | Function |


## Events

| name       |               description                |   params   |
| ---------- | :--------------------------------------: | :--------: |
| selections | when list item's checked is change, will emit this event. | selections |


## Example

### 基础用法
```vue
<template>
	<check-all @selection-change="selectionChange" :list="list" :check-all.sync="checkAll">
      <template scope="scope">
        <label>
          <input type="checkbox" v-model="checkAll" @click="scope.checkAllChange">
          全选
        </label>
        <ul>
          <li v-for="item in scope.list" :key="item.data">
            <label>
              <input v-model="item.checked" type="checkbox">
              {{item.data}}
            </label>
          </li>
        </ul>
      </template>
    </check-all>
</template>

<script>
	export default {
      data () {
        return {
          list: [1,2,3],
          checkAll: true
        }
      },
      methods: {
        selectionChange (selections) {
          console.log(selections)
        }
      }
	}
</script>
```


## Development

    npm run dev
    npm run port
## Build

```javascript
npm run mb // mac build
npm run wb // window build
```

## License

[MIT](https://opensource.org/licenses/MIT)
