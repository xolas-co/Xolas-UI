import Vue from 'vue';
import VueXolasUI from 'vue-xolas-ui';
import PortalVue from 'portal-vue';
import Example from './Example.vue';
import 'semantic-ui-css/semantic.min.css';

Vue.config.productionTip = false;
Vue.use(PortalVue);
Vue.use(VueXolasUI);

new Vue({
  render: h => h(Example),
}).$mount('#app');
