import type { VueConstructor } from 'vue';
import CnTags from './src/index.vue';
CnTags.install = function (Vue: VueConstructor) {
    Vue.component(CnTags.name, CnTags);
};
export default CnTags;