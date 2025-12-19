import type { VueConstructor } from 'vue';
import LTable from './src/index.vue';

export * from './src/index.vue';
LTable.install = function (Vue: VueConstructor) {
  Vue.component(LTable.name || 'LTable', LTable);
};
export default LTable;
