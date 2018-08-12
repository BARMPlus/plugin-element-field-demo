export let initMixin = {
  data() {


    return {
      R: {
        //验证对象，如果通过则返回bool型的true，否则返回验证不通过的提示字符串，其中可以带%s，以便进一步处理。
        telchecker: function (value) {
          return /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value) ? true : "%s格式不正确";
        },
        passchecker: function (value) {
          return this.form.password1 && (this.form.password1 === value) ? true : "请再次输入一致的密码";
        }
      },
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

  }
};
