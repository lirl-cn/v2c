import type { VueConstructor } from 'vue';
import LrTree2 from './src/index.vue';
LrTree2.install = function (Vue: VueConstructor) {
  Vue.component(LrTree2.name, LrTree2);
};
export default LrTree2;
