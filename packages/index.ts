import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/zh-CN';
import type { VueConstructor } from 'vue';
import './styles/index.scss';

import CnBadge from './cn-badge';
import CnForm from './cn-form';
import CnPagination from './cn-pagination/src/index.vue';
import CnTable from './cn-table';
import CnTags from "./cn-tags";

const components = [
  CnTags,
  CnPagination,
  CnBadge,
  CnForm,
  CnTable,
]
type configType = {
  table?: {
    request?: (params?: { [k: string]: any }) => Promise<{ success?: boolean, data: any[], total: number }>
    current?: {
      key?: string
      format?(current: number): number
    },
    pageSize?: {
      key?: string
      format?(pageSize: number): number
    },
  }
}
const defaultTableConfig = {
  request: fetch,
  current: {
    key: 'current',
    // format: (current:number) => current,
  },
  pageSize: {
    key: 'pageSize',
  },
}
const install = function (Vue: VueConstructor, config: configType = {}) {
  Vue.use(ElementUI, locale);
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$CN_V2C_TABLE_CONFIG = {
    ...defaultTableConfig,
    ...config.table,
  }
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  CnTags,
  CnPagination,
  CnBadge,
  CnForm,
  CnTable,
};
export default install