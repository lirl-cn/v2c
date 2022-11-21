import CnForm from './src/index.vue'
import type { VueConstructor } from 'vue'
CnForm.install = function (Vue: VueConstructor) {
    Vue.component(CnForm.name, CnForm);
};
export default CnForm;