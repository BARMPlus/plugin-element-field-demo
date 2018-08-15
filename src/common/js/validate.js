/**
 * Created by Administrator on 2018/8/14.
 */
let rules={
  pass: function (value) {
    return this.form.password1 && (this.form.password1 === value) ? true : "请输入一致的密码(自定义规则)";
  }
};

export  default rules;
