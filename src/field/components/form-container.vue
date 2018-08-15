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
    methods:{

      gql(graphql, variables, sCallback){
        this.validate.then(()=>{
         try{
           this.mutate(graphql,variables).then((data) => {
             if (data.errors) {   //未通过服务端的表单验证
               alert("报错！");
             }
             else {
               sCallback.call(this, data);
             }
           }).catch((error) => {
             console.error(error);  //服务器错误或者网络状态问题
           })
         }
         catch(error){
             console.error(error);   //语法问题检测
         }
        }).catch(()=>{
          console.log('未通过检验');   //未通过客户端的表单验证
        });
      },

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
