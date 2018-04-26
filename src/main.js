import Vue from 'vue'
import App from './App.vue'
import vueEnterInput from './lib/index.js'
// import {focus, model} from './directives'
// Vue.directive('focus',focus)
// Vue.directive('my-model',model)
Vue.use(vueEnterInput)
new Vue({
  el: '#app',
  render: h => h(App)
})
