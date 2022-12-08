import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import baseUi, { MessageBox } from '../es'
import request from 'umi-request';
import baseUi from '../packages';
// import '../es/style.css'
import '@/styles/element-variables.scss';
import '@/styles/global.scss';
Vue.config.productionTip = false
Vue.use(baseUi, {
  table: {
    request
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')