
export let initMixin={
  data(){
    return {
      copyVal: ''
    }
  },
  props: {
    value: {},
    prop:{
      type:String,
      default:'',
    },
    width: {
      type: [Number, String],
      default: 3.3,
    },
    label: {
      type: String,
      default: ''
    }
  },
  created(){

    //console.log(this.$parent.$parent.readonly)
    //取到form-container组件的props
    // $parent=el-form，$parent.$parent=form-container
    this.copyVal = this.value;
  },
  methods:{
    change(val){
      this.$emit('change', val);
    },
    blur(event){
      this.$emit('blur', event);
    },
    focus(event){
      this.$emit('focus', event);
    },
    transformNumber(flag){
      return +flag;
    },
    transformBoolean(flag,set){
      if(set===true&&this.$parent.$parent._readonly)return true;
      //获取 form-container的_readonly，只有使用slot，$parent才能拿到
      //this.$parent为 el-form
      //this.$parent.$parent为 form-container
      if (typeof flag === 'string') {
        flag = (flag === 'true') ? true : false;
      }
      return flag;
    }
  },
  watch: {
    copyVal(newVal){
      this.$emit('input', newVal);
    }
  }
};
