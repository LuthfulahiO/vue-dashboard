// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueSVGIcon from 'vue-svgicon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown, faBars, faArrowUp, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

library.add(faArrowDown, faBars, faArrowUp, faComments);

Vue.use(BootstrapVue);
Vue.use(VueSVGIcon);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
