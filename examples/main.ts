import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import baseUi, { MessageBox } from '../es'
import baseUi, { MessageBox } from '../packages'
import request from 'umi-request';
// import '../es/style.css'
import '@/styles/element-variables.scss'
import '@/styles/global.scss'
Vue.config.productionTip = false
console.log(MessageBox)
Vue.use(baseUi, {
  table: {
    request
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')