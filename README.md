# vue-enter-input

> a vue enter input
输入框中输入内容，之后回车，能够再次输入
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 安装

```JS
npm install vue-enter-input --save-dev
```
## 使用

```js
// ES6
import VueEnterInput from '../node_modules/vue-enter-input/dist/vue-enter-input.js'
// require
var vueEnterInput = require('../node_modules/vue-enter-input/dist/vue-enter-input.js')

Vue.use(vueEnterInput)

// 或者直接使用script导入
<script src="../node_modules/vue-enter-input/dist/vue-enter-input.js"></script>

// 作为组件的方式使用
<vue-enter-input></vue-enter-input>
```

### 配置

```html
   <vue-enter-input
   @get-data='getData'
    </vue-enter-input>
```
methods:{
getData(data){
console.log(data)
}
}
