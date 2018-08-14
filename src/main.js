

import Vue from 'vue'
import App from './App'

import ElementField from './base';
Vue.use(ElementField);

ElementField.extend({
  cs(value) {
    return value==='123456'? true : "字段值必须为123456";
  }
});


Vue.config.productionTip = false;



new Vue({
  el: '#app',
  render: h => h(App)
});
