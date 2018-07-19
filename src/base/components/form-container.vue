<template>
  <el-form :model="model" :rules="rules" :show-message="showMessage">
    <slot></slot>
  </el-form>
</template>


<script>
  export default {
    computed:{
      showMessage(){
          return !this._readonly
      }
    },
    props: {
      _readonly:{
        type:Boolean,
        default: false
      },
      model: {
        type: Object,
        default: {}
      },
      rules: {
        type: Object,
        default: {}
      }
    }
  }
</script>
