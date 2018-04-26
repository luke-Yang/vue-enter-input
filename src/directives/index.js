const clickOutSide = {
  // clickOutSide: {
  bind (el, binding, vnode) {
    function documentHandler (e) {
      // console.log(e, 'e')
      if (el.contains(e.target)) {
        // console.log('is contains')
        return false
      }
      if (binding.expression) {
        // console.log(binding.expression, 'binding.expression')
        binding.value(e)
      }
    }

    // console.log(el, 'el')
    el.style.color = '#fff'
    el.__vueClickOutside__ = documentHandler
    document.addEventListener('click', documentHandler)
  },
  unbind (el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__)
    delete el.__vueClickOutside__
  }
  // }
}
const focus = {
  bind () {

  },
  inserted (el) {
    el.focus()
  }
}
const model = {
  bind: function (el, binding, vnode) {
    console.log(el.value, 'el')
    console.log(binding,'binding')
    el.value = binding.value
  },
  inserted: function () {},
  update: function () {},
  componentUpdated: function () {},
  unbind: function () {}
}
export {focus, model}
