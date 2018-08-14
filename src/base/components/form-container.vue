<template>
  <el-form ref="form" :model="model" :rules="rules" :show-message="showMessage" >
    <slot></slot>
  </el-form>
</template>


<script>
  export default {
    computed:{
      showMessage(){
          return !this._readonly
      },
      validate(){
        return new Promise((resolve,reject)=>{
          this.$refs.form.validate((valid) => {
            if (valid) {
              resolve(true);
            } else {
              reject(false);
              return false;
            }
          });
        });
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
      rules:null
    }
  }
</script>
