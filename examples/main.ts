import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import baseUi, { MessageBox } from '../es'
import request from 'umi-request';
// import baseUi from '../packages';
import baseUi from '../es';
// import '../es/style.css'
import '@/styles/element-variables.scss';
import '@/styles/global.scss';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
// Element UI must be installed before using the component library
Vue.use(ElementUI)
Vue.use(baseUi, {
  table: {
    request,
    current: {
      key: 'page',
      format: (current: number) => current - 1
    },
    pageSize: {
      key: 'size',
    },
  },
  lTable: {
    request,
    currentKey: 'page',
    pageSizeKey: 'size',
    layout: 'total, prev, pager, next, jumper',
    border: true,
    stripe: false,
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
