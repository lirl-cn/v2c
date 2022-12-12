import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import baseUi, { MessageBox } from '../es'
import request from 'umi-request';
import baseUi from '../es';
// import '../es/style.css'
import '@/styles/element-variables.scss';
import '@/styles/global.scss';
Vue.config.productionTip = false
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
    setting: false,
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')