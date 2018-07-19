

import Vue from 'vue'
import App from './App'

import ElementField from './base';
Vue.use(ElementField);

Vue.config.productionTip = false;



new Vue({
  el: '#app',
  render: h => h(App)
});
