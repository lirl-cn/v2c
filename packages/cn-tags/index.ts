import CnTags from './src/index.vue'
import type { VueConstructor } from 'vue'
CnTags.install = function (Vue: VueConstructor) {
    Vue.component(CnTags.name, CnTags);
};
export default CnTags;