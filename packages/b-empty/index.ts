import type { VueConstructor } from 'vue';
import BEmpty from './src/index.vue';
BEmpty.install = function (Vue: VueConstructor) {
  Vue.component(BEmpty.name, BEmpty);
};
export default BEmpty;
