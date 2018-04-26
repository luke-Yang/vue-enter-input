// import AwesomeInput from './AwesomeInput.vue'
import VueEnterInput from './VueEnterInput'
// const awesomeInput = {
//   install(Vue, options) {
//     Vue.component(AwesomeInput.name, AwesomeInput)
//   }
// }
const vueEnterInput = {
  install(Vue, options) {
    Vue.component(VueEnterInput.name, VueEnterInput)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueEnterInput);
}
export default vueEnterInput
