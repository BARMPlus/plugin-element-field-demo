<template>
  <div id="app">
    <el-card class="box-card">
      <span @click="show"> click me </span>
      <span @click="readonlyClick">切换</span>
      <form-container :model="form" :rules="rules" :_readonly="readonly">
        <field-input label="名称" v-model="form.name"
                     prop="name" placeholder="请输入名称"></field-input>
        <field-input label="年龄"></field-input>
        <br/>
        <field-input label="密码" v-model="form.password1"></field-input>
        <field-input label="密码" v-model="form.password2"
                     prop="password2" type="password"></field-input>
        <br/>
        <field-checkbox label="选择" v-model="form.checkbox"
                        :list="arr" width="5" min="0" max="2"
        ></field-checkbox>
        <br>
        <field-input label="信息" v-model="form.info"
                     width="5" prop="info" type="textarea" resize="none"
                     rows="3"
        ></field-input>
        <field-radio label="单选" width="4.5"
                     :list="radioArr" v-model="form.radio" border="true"
        ></field-radio>
        <field-select label="下拉框" v-model="form.select"
                      :list="options" disabled="false"
                      multiple="true"
        ></field-select>
        <field-date-picker v-model="form.time" label="日期选择器" placeholder="请输入日期"
        ></field-date-picker>
        <br>
        <field-input label="年龄" width="2.5"></field-input>
        <field-input label="年龄" width="2.5"></field-input>
        <field-input label="年龄" width="2.5"></field-input>
        <field-input label="年龄" width="2.5"></field-input>
      </form-container>
    </el-card>

  </div>
</template>

<script>


  export default {
    name: 'App',
    data(){
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password1) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {

        readonly: false,
        form: {
          checkbox: [],
          name: '',
          info: 123456,
          time: ''
        },
        options: [
          {
            val: '选项1',
            key: '黄金糕',
            disabled: false
          }, {
            val: '选项2',
            key: '双皮奶'
          }, {
            val: '选项3',
            key: '蚵仔煎'
          }],
        radioArr: ['单选1', '单选2', '单选3'],
        arr: [{key: '选项1', val: 't1'}, {key: '选项2', val: 't2'}, {key: '选项3', val: 't3'}],
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          info: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ],
          password2: [
            {validator: validatePass2, trigger: 'change'}
          ]
        }
      }
    },

    methods: {
      readonlyClick(){
        this.readonly = !this.readonly;
      },
      show(){
        console.log(this.form)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  * {
    margin: 0;
    padding: 0;
  }

  .box-card {
    width: 80%;
    height: 500px;
    margin: 30px auto;
  }

</style>
