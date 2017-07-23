# vue-lazy-render

[![GitHub issues](https://img.shields.io/github/issues/yeyuqiudeng/vue-check-all.svg)](https://github.com/yeyuqiudeng/vue-check-all/issues)
[![GitHub forks](https://img.shields.io/github/forks/yeyuqiudeng/vue-check-all.svg)](https://github.com/yeyuqiudeng/vue-check-all/network)
[![GitHub stars](https://img.shields.io/github/stars/yeyuqiudeng/vue-check-all.svg)](https://github.com/yeyuqiudeng/vue-check-all/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/yeyuqiudeng/vue-check-all.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

[![NPM](https://nodei.co/npm/vue-check-all.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-check-all/)

[English](https://github.com/yeyuqiudeng/vue-check-all/blob/master/README.md)

## Description

vue 全选组件。

## Dependence

* vue: ^2.3.0

## Installation

    npm install vue-check-all

## Usage

    import CheckAll from 'vue-check-all'
    Vue.use(CheckAll)

## Props

| 属性        |                    说明                    |   类型    |  默认值  |  必须  |
| --------- | :--------------------------------------: | :-----: | :---: | :--: |
| list      |                   数据源                    |  Array  |  []   | true |
| check-all | 全选状态控制，当为 `true` 时，表示列表中的数据全部被选中。组件初始化时，如果为 `true` ，则默认选中列表中的所有数据。 | Boolean | false | true |

## scopedSlot

| property          |               description                |   type   |
| ----------------- | :--------------------------------------: | :------: |
| list              | 这个不是数据源，包含 `checked` 和 `data` 两个属性，`checked` 为 `true` 时，表示数据源 `data` 被选中。 `data` 为源数据中的项。 |  Array   |
| selections        |                  被选中的数据                  |  Array   |
| select-all-change | 如果要手动更改 `checkAll` （包含 `v-model`），必须调用这个方法，如果在组件内部更改，可以直接在 `scope` 中取得此方法，在父组件中，可以用 `$refs` 来取得组件实例，再调用此方法。 | Function |


## Events

| name       |              description               |   params   |
| ---------- | :------------------------------------: | :--------: |
| selections | 如果列表中的某项选中状态有变动时，会触发此事件，所有选中的项会作为参数传出。 | selections |


## Example

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