<template>
  <div id="app">
    <el-card class="box-card">
      <span @click="show"> click me </span>
      <span @click="readonlyClick">切换</span>
      <form-container ref="form" :model="form" :_readonly="readonly">
        <field-input v-model="form.desc" prop="desc"
                     :rules="r(true).all(R.telchecker)" label="自我描述"
        ></field-input>
        <br/>
        <field-input label="密码" v-model="form.password1"></field-input>
        <field-input label="密码" v-model="form.password2" prop="password2" type="password"
                     :rules="r(true).change('定制提示哦',R.passchecker)"></field-input>
        <br/>
        <field-checkbox label="选择" v-model="form.checkbox"
                        :list="arr" width="5" min="0" max="2"
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
        <field-img label="图片" width="4" :max="2" @imgList="getList" :fileList="fileList" :sts="sts"></field-img>
      </form-container>
      <el-button @click="submit" type="primary">提交</el-button>
    </el-card>
  </div>
</template>

<script>
  import {initMixin} from './base/common/mixinComponent';


  export default {
    mixins: [initMixin],
    name: 'App',
    data() {
      return {
        desc: "aadsf",

        //文件格式{name,URL}
        fileList: [
          {
            name: "d7_FCKCVHbKhiHBnjfGW00",
            url: "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/d7_FCKCVHbKhiHBnjfGW00"
          }
        ],
        //服务器sts验证
        sts: 'http://115.159.154.194:8080/sts',
        readonly: false,
        form: {
          address: [
            {zipcode: '332500', name: '江西湖口'},
            {zipcode: '361005', name: '深圳蛇口'},
            {zipcode: '325035', name: '温州茶山'}
          ],
          checkbox: [],
          name: '',
          desc: '',
          info: 123456,
          time: ''
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
        arr: [{key: '选项1', val: 't1'}, {key: '选项2', val: 't2'}, {key: '选项3', val: 't3'}],
      }
    },


    methods: {
      readonlyClick() {
        this.readonly = !this.readonly;
      },
      show() {
        console.log(this.form)
      },
      getList(data) {
        console.log(data)
      },
      submit() {
        this.$refs.form.validate(function () {
          alert('success');
        }, function () {
          alert('fail');
        });
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
    height: 1000px;
    margin: 30px auto;
  }

</style>
