import type { VueConstructor } from 'vue';
import LTablePlus from './src/index.vue';
LTablePlus.install = function (Vue: VueConstructor) {
  Vue.component(LTablePlus.name, LTablePlus);
};
export default LTablePlus;
