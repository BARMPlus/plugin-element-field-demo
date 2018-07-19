<template>
  <form-item :label="label" :prop="prop" :width="width">
    <el-radio-group v-model="copyVal" :disabled="cDisabled" :size="size"  @change="change">
      <el-radio :border="cBorder"
                v-for="item in list"
                :label="item.val||item" :key="item.val||item">{{item.key||item}}</el-radio>
    </el-radio-group>
  </form-item>
</template>

<script>
  import FormItem from './form-item.vue';
  import {initMixin} from '../common/mixin';
  export default {
    mixins: [initMixin],
    components: {
      FormItem
    },
    props: {
      size:{
        type:String
      },
      border: {
        type: [Boolean, String],
        default: false
      },
      list: {
        type: Array,
        default: null
      },
      disabled: {
        type: [Boolean, String],
        default: false
      }
    },
    computed: {
      cBorder(){
        return this.transformBoolean(this.border);
      },
      cDisabled(){
        return this.transformBoolean(this.disabled,true);
      }
    }
  }

</script>
