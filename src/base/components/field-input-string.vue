<template>
  <el-form-item
    :label="label" :prop="prop" ref="formitem" :rules="cRules" :required="false">

    <el-input type="text" v-model="copyVal" class=""
              :rows="cRows" :placeholder="placeholder"
              :readonly="cReadonly" :disabled="cDisabled"
              :autofocus="cAutofocus" :resize="resize"
              @change="change" @blur="blur" @focus="focus"
    ></el-input>

  </el-form-item>
</template>

<script>
  import {initmixinBosInput} from '../common/mixinBosInput';


  export default {
    mixins:[initmixinBosInput],
    props: {
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
      cRows() {
        return this.transformNumber(this.rows)
      },
      cAutofocus() {
        return this.transformBoolean(this.autofocus);
      },
      cDisabled() {
        return this.transformBoolean(this.disabled);
      },
      cReadonly() {
        return this.transformBoolean(this.readonly, true);
      },
      cType() {
        return this.type;
      }
    },
    methods: {

    },


  }
</script>


