/**
 * Created by Administrator on 2018/8/14.
 */
let rules={
  pass: function (value) {
    return this.form.password1 && (this.form.password1 === value) ? true : "请再次输入一致的密码";
  }
};

export  default rules;
