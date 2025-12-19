import type { VueConstructor } from 'vue';
import LrTree from './src/index.vue';
LrTree.install = function (Vue: VueConstructor) {
  Vue.component(LrTree.name || 'LrTree', LrTree);
};
export default LrTree;
