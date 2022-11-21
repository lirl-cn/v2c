import CnBadge from './src/index'
import type { VueConstructor } from 'vue'
(CnBadge as any).install = function (Vue: VueConstructor) {
    Vue.component(CnBadge.name, CnBadge);
};
export default CnBadge;