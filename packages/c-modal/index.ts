import type { VueConstructor } from 'vue';
import CModal from './src/index.vue';
CModal.install = function (Vue: VueConstructor) {
  Vue.component(CModal.name || 'CModal', CModal);
};
export default CModal;
