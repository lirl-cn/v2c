import type { VueConstructor } from 'vue';
import CnBadge from './src/index.vue';
(CnBadge as any).install = function (Vue: VueConstructor) {
    Vue.component(CnBadge.name, CnBadge);
};
export default CnBadge;