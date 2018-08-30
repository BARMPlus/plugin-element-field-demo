<template>
  <div id="app">

    <input type="text" v-model="a">

    <el-card class="card-box">
      <span @click="show"> click me </span>
      <span @click="readonlyClick">切换</span>
      <form-container ref="form" :model="form" :_readonly="readonly">
        <field-input v-model="form.desc" prop="desc"
                     :rules="r(true).all(R.mobile)" label="手机"
        ></field-input>
        <br/>
        <field-input label="新增规则" v-model="form.cs" prop="cs"
                     :rules="r(true).all(R.cs)"></field-input>
        <br/>
        <field-input label="密码" v-model="form.password1"></field-input>
        <field-input label="密码" v-model="form.password2" prop="password2"
                     :rules="r(true).change(rules.pass)"></field-input>
        <br/>

        <field-checkbox label="选择" v-model="form.checkbox"
                        :list="checkArr" width="5" min="0" max="2"
        ></field-checkbox>
        <br>
        <field-input label="信息" v-model="form.info"
                     width="5" prop="info" type="textarea" resize="none"
                     rows="3"></field-input>
        <field-radio label="单选" width="4.5"
                     :list="radioArr" v-model="form.radio" border="true"
        ></field-radio>
        <field-select label="下拉框" v-model="form.select"
                      :list="options" disabled="false"
                      multiple="true"
        ></field-select>
        <field-date-picker v-model="form.time" label="日期选择器" placeholder="请输入日期"
        ></field-date-picker>
        <field-image label="图片"  :max="10" v-model="form.fileList"></field-image>

        <field-rich-text v-model="form.text"></field-rich-text>
      </form-container>
      <el-button @click="submit" type="primary">提交</el-button>
    </el-card>
  </div>
</template>

<script>

  import rules from 'common/js/validate';






  export default {

    name: 'App',
    data() {
      return {
          a:true,
         rules,
        readonly: false,
        form: {
          fileList: "d7_FCKCVHbKhiHBnjfGW00",
          checkbox: []
        }
        ,
        options: [
          {
            val: '选项1',
            key: '黄金糕',
            disabled: false
          },
          {
            val: '选项2',
            key: '双皮奶'
          },
          {
            val: '选项3',
            key: '蚵仔煎'
          }],
        radioArr: ['单选1', '单选2', '单选3'],
        checkArr: [{key: '选项1', val: 't1'}, {key: '选项2', val: 't2'}, {key: '选项3', val: 't3'}],
      }
    },
    methods: {
      readonlyClick() {
        this.readonly = !this.readonly;
      },
      show() {
        console.log(this.form.fileList)
      },
      submit() {
     /*   this.$refs.form.validate.then(function(){
            console.log('success')
        }).catch(function(){
            console.log('fail')
        });
*/
      this.$refs.form.gql()

      }
    }

  }
</script>

<style lang="scss" rel="stylesheet/scss">
  * {
    margin: 0;
    padding: 0;
  }

  .card-box{
    width: 80%;
    height: 1000px;
    margin: 30px auto;
  }

</style>
