// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueXolasUI from 'vue-xolas-ui';
import PortalVue from 'portal-vue';
import App from './App';
import router from './router';
import markdownSupport from './markdownSupport';
import docs from './components';

Vue.config.productionTip = false;
Vue.use(markdownSupport);
Vue.use(PortalVue);
Vue.use(VueXolasUI);
Vue.use(docs);

const root = new Vue({
  components: { App },
  router,
  template: '<App/>',
  provide: {
    xui: {
      api: {
        base: 'https://api.semantic-ui.com',
        api: {
          search: '/search/{value}',
          'search category': '/search/category/{value}',
        },
        onResponse(response) {
          return response.results;
        },
      },
    },
  },
});

document.addEventListener('DOMContentLoaded', () => {
  root.$mount('#app');
  document.dispatchEvent(new Event('vue-post-render'));
});
