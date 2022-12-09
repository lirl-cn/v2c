import type { VueConstructor } from 'vue';
import CnPagination from './src/index.vue';
(CnPagination as any).install = function (Vue: VueConstructor) {
    Vue.component(CnPagination.name, CnPagination);
};
export default CnPagination;