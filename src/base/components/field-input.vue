<template>
  <form-item :label="label" :prop="prop" :width="width" :rules="cRules">
    <el-input :type="type" v-model="copyVal"
              :rows="cRows" :placeholder="placeholder"
              :readonly="cReadonly" :disabled="cDisabled"
              :autofocus="cAutofocus" :resize="resize"
              @change="change" @blur="blur" @focus="focus"
    ></el-input>
  </form-item>
</template>

<script>
  import FormItem from './form-item.vue';
  import {initmixinBosInput} from '../common/mixinBosInput';
  export default {
    mixins:[initmixinBosInput],
    components:{FormItem},
    props: {
      rules:{
        default:null
      },
      resize: {
        type: String,
        default: ''
      },
      autofocus: {
        type: [Boolean, String],
        default: false
      },
      placeholder: {
        type: String,
        default: ''
      },
      readonly: {
        type: [Boolean, String],
        default: false
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      rows: {
        type: [Number, String],
        default: 2
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    computed: {
      cRows(){
        return this.transformNumber(this.rows)
      },
      cAutofocus(){
        return this.transformBoolean(this.autofocus);
      },
      cDisabled(){
        return this.transformBoolean(this.disabled);
      },
      cReadonly(){
        return this.transformBoolean(this.readonly,true);
      }
    }
  }
</script>


