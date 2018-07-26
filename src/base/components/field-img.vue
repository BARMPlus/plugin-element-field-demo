<template>
  <form-item :label="label" :prop="prop" :width="width">
    <el-upload
      action="string"
      list-type="picture-card"
      :limit="max"
      :file-list="fileList"
      :disabled="cDisabled"
      :http-request="uploadSectionFile"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :before-upload="beforeAvatarUpload"
      :on-exceed="handleExceed">
      <i class="el-icon-plus"></i>
    </el-upload>

    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </form-item>
</template>

<script>
  import FormItem from './form-item.vue';
  import {initMixin} from '../common/mixin';
  import axios from 'axios'

  export default {
    mixins: [initMixin],
    components: {FormItem},
    props: {
      max: {
        type: Number,
        default: 0,
      },
      fileList: {
        type: Array,

      },
      sts: {
        type: String,
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
    },
    computed: {
      cDisabled() {
        return this.transformBoolean(this.disabled, true);
      },
    },
    data() {
      return {
        dialogVisible: false,
        dialogImageUrl: '',
        imgUrl: 'http://mlshopimage.oss-cn-shanghai.aliyuncs.com/',
        imgList: [],
      }
    },
    methods: {
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleRemove(file, fileList) {
        console.log(file);
        this.fileList.forEach((value, index) => {
          if (value.name == file.name) {
            this.fileList.splice(index, 1);
          }
        });
        this.$emit('imgList', this.fileList);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 ${this.max} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      uploadSectionFile(e) {
        let files = e.file;
        axios.get(this.sts).then((result) => {
          const client = new OSS({
            endpoint: 'http://oss-cn-shanghai.aliyuncs.com/',
            bucket: 'mlshopimage',
            accessKeyId: result.data.credentials.accessKeyId,
            accessKeySecret: result.data.credentials.accessKeySecret,
            stsToken: result.data.credentials.securityToken,
          });
          const storeAs = result.data.requestId;
          client.multipartUpload(storeAs, files).then((results) => {
            if (results.name) {
              let img = `${this.imgUrl}${results.name}`;
              this.fileList.push({name: results.name, url: img});
              this.$emit('imgList', this.fileList);
            }
          }).catch((err) => {
            console.log(err);
          });
        }).catch((err) => {
          console.log(err);
        });
      }
    },
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  /*.el-upload--picture-card{*/
  /*width: 50%;*/
  /*}*/
  /*.el-upload-list--picture-card .el-upload-list__item{*/
  /*width: 50%;*/
  /*}*/

</style>

