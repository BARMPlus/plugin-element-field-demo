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
      }
    },
    methods:{
      validate(sCallback,eCallback){
        this.$refs.form.validate((valid) => {
          if (valid) {
            sCallback&&sCallback.call(this)
          } else {
            eCallback&&eCallback.call(this);
            return false;
          }
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
