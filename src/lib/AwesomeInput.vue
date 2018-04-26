<template>
  <div>
    <input :type="type" v-focus :placeholder="placeholder" :readonly="readonly" :disabled="disabled"
           @blur="input($event.target.value)" :value="value">
  </div>

</template>

<script>
  export default {
    name: 'vue-enter-input',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: ''
      },
      readonly: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      value: {
        type: String
      }
    },
    data() {
      return {
        // value:'value'
      }
    },
    methods: {
      input(value) {
        this.$emit('update:value', value)
      }
    }
  }
</script>

<style scoped>
  input {
    outline: none;
    padding: 5px;
    border: 1px solid #eee;
    border-radius: 4px;
  }
</style>
