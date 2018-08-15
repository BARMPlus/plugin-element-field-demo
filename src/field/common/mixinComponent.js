
function outPutInfo(flag) {
  return flag ? true : "%s格式不正确";
}

export let extendRules = function (rules={}) {
  if(Object.prototype.toString.call(rules)!=='[object Object]')throw new Error('extendRule variable need Object');
  __RULES__=Object.assign({},__RULES__,rules);
};

let __RULES__ = {
  //验证对象，如果通过则返回bool型的true，否则返回验证不通过的提示字符串，其中可以带%s，以便进一步处理。
  email(value){
    return outPutInfo(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value));
  },
  mobile(value){  //手机号码验证
    return outPutInfo(/^[1][3578]\d{9}$/.test(value))
  },
  tel(value){   //座机号码验证
    return outPutInfo(/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(value))
  },
  cardId(value){
    return outPutInfo(/(^\d{15}$)|(^\d{17}(\d|x|X)$)/i.test(value))
  },
  integer(value){
    return outPutInfo(/^\d+$/.test(value))
  }
};

export let formRulesMixin = {
  data() {
    return {
      R: __RULES__
    }
  },

  methods: {
    r(required) {//规则组合器
      var context = this;
      var add = function (trigger, checkerandtiparray) {
        var addItem = function (rule, errormsg, trigger) {
          this.rules.push({checker: rule, required: this.defaultRequired, context, errormsg, trigger});
        }

        var tip = null, checker = null;
        for (var i = 0; i < checkerandtiparray.length; i++) {

          if (typeof(checkerandtiparray[i]) == 'function') {
            checker = checkerandtiparray[i];
          } else {
            tip = checkerandtiparray[i];
          }

          if (checker != null) {
            addItem.call(this, checker, tip, trigger);
            tip = null, checker = null;
          }
        }
      }

      var ruler = {
        defaultRequired: false,//默认是不做必须校验要求
        rules: [],
        blur: function () {
          add.call(this, 'blur', arguments);
          return this
        },
        change: function () {
          add.call(this, 'change', arguments);
          return this
        },
        all: function () {
          add.call(this, '', arguments);
          return this
        },
        r: function (required) {
          this.defaultRequired = !!required;
          return this;
        }
      };
      return ruler.r(required);
    },
    mutate(mutation, variables) {
      return this.$apollo.mutate({
        mutation: mutation,
        variables: variables,
      });
    }
  },
};
