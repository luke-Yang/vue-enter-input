<template>
  <div class="enter-input">
    <div class="inline-block" v-for="(item,index) in inputList" :key="index">
      <span>{{item}}</span>
      <span style="vertical-align:middle;" @click="del(index)"><svg t="1501505446265" class="icon" style="" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1904" xmlns:xlink="http://www.w3.org/1999/xlink" width="12"
                 height="12">
                        <path
                          d="M550.659 490.565l324.395-324.386c10.945-10.945 10.945-28.699 0-39.644-10.948-10.95-28.704-10.95-39.648-0.004L511.01 450.916 186.625 126.53c-10.946-10.947-28.703-10.947-39.648 0-10.946 10.95-10.946 28.703 0 39.648l324.385 324.386-324.385 324.401c-10.946 10.944-10.946 28.703 0 39.65 10.945 10.943 28.702 10.943 39.648 0L511.01 530.213l324.396 324.401c10.944 10.944 28.7 10.944 39.648 0 10.945-10.946 10.945-28.705 0-39.649L550.66 490.565z"
                          p-id="1905"></path>
                    </svg></span>
    </div>
    <div class="inline-block" style="border: none">
      <input type="text" v-model="value" @keyup.enter="keyup" v-focus :style="{'width':width}" placeholder="请输入">
    </div>
  </div>
</template>

<script>
  import {focus} from '../directives'

  export default {
    name: 'vue-enter-input',
    data() {
      return {
        value: '',
        inputList: [],
        // width: '20px'
      }
    },
    computed:{
      width(){
        if(this.value.length===0){
          return '50px'
        }
        return this.value.length*12+10+'px'
      }
    },
    methods: {
      keyup() {
        this.inputList.push(this.value)
        this.value = ''
        this.$emit('get-data',this.inputList)
      },
      keyDown(){
        this.width = this.value.length*12+'px'
      },
      del(index){
        if(index>=0){
          this.inputList.splice(index,1)
          this.$emit('get-data',this.inputList)
        }
      }
    },
    directives: {
      focus
    }
  }
</script>

<style scoped>
  .enter-input {
    border: 1px solid green;
    /* border-radius: 4px; */
    padding: 5px;
    font-size: 12px;
  }

  .enter-input span {
    /*padding: 2px 5px;*/
    /*border-radius: 5px;*/
    /*border: 1px solid #c8d0c8;*/
    /*margin-right: 4px;*/
  }

  .enter-input input {
    outline: none;
  }

  .inline-block {
    display: inline-block;
    border: 1px solid #eee;
    padding: 2px 5px;
    margin: 2px;
    border-radius: 4px;
  }
</style>
