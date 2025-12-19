import type { VueConstructor } from 'vue';
import CContentContainer from './src/index.vue';
CContentContainer.install = function (Vue: VueConstructor) {
  Vue.component(CContentContainer.name || 'CContentContainer', CContentContainer);
};
export default CContentContainer;
