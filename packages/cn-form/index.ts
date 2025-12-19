import type { VueConstructor } from 'vue';
import CnForm from './src/index.vue';

export * from './src/index.vue';

(CnForm as any).install = function (Vue: VueConstructor) {
    Vue.component(CnForm.name || 'CnForm', CnForm);
};
export default CnForm;