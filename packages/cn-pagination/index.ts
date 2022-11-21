import CnPagination from './src/index'
import type { VueConstructor } from 'vue'
(CnPagination as any).install = function (Vue: VueConstructor) {
    Vue.component(CnPagination.name, CnPagination);
};
export default CnPagination;