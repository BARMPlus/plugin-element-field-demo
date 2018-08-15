

import Vue from 'vue'
import App from './App'




import ElementField from './field';
Vue.use(ElementField);

ElementField.extend({
  cs(value) {
    return value==='123456'? true : "字段值必须为123456";
  }
});
ElementField.upload({
  sts:'http://115.159.154.194:8080/sts',
  prefix: 'http://mlshopimage.oss-cn-shanghai.aliyuncs.com/',
});




Vue.config.productionTip = false;



new Vue({
  el: '#app',
  render: h => h(App)
});
