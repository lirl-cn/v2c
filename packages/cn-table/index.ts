import type { VueConstructor } from 'vue';
import CnTable from './src/index.vue';
(CnTable as any).install = function (Vue: VueConstructor) {
    Vue.component(CnTable.name, CnTable);
};
export default CnTable;