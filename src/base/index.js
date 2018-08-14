/**
 * Created by Administrator on 2018/7/17.
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import FormContainer from './components/form-container.vue';
import FieldInput from './components/field-input.vue';
import FieldCheckbox from './components/field-checkbox.vue';
import FieldRadio from './components/field-radio.vue';
import FieldSelect from './components/field-select.vue';
import FieldDatePicker from './components/field-date-picker.vue';
import FieldImg from './components/field-img.vue';

let componentsList = {
  'FormContainer': FormContainer,
  'FieldInput': FieldInput,
  'FieldCheckbox': FieldCheckbox,
  'FieldRadio': FieldRadio,
  'FieldSelect': FieldSelect,
  'FieldDatePicker': FieldDatePicker,
  'FieldImg': FieldImg
};


export default {
  install(Vue) {
    Vue.use(ElementUI);
    Object.keys(componentsList).map((name) => {
      Vue.component(name, componentsList[name]);
    });
  }
}




