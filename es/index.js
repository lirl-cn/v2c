import ElementUI from "element-ui";
import _default from "./node_modules/element-ui/lib/locale/lang/zh-CN.js";
import "./styles/index.js";
import "./cn-badge/index.js";
import "./cn-form/index.js";
import CnPagination from "./cn-pagination/src/index.js";
import { default as default2 } from "./cn-pagination/src/index.js";
import "./cn-table/index.js";
import "./cn-tags/index.js";
import CnTags from "./cn-tags/src/index.js";
import { default as default3 } from "./cn-tags/src/index.js";
import CnBadge from "./cn-badge/src/index.js";
import { default as default4 } from "./cn-badge/src/index.js";
import CnForm from "./cn-form/src/index.js";
import { default as default5 } from "./cn-form/src/index.js";
import CnTable from "./cn-table/src/index.js";
import { default as default6 } from "./cn-table/src/index.js";
const components = [
  CnTags,
  CnPagination,
  CnBadge,
  CnForm,
  CnTable
];
const defaultTableConfig = {
  request: fetch
};
const install = function(Vue, config = {}) {
  Vue.use(ElementUI, _default);
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$CN_V2C_TABLE_CONFIG = {
    ...defaultTableConfig,
    ...config.table
  };
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export {
  default4 as CnBadge,
  default5 as CnForm,
  default2 as CnPagination,
  default6 as CnTable,
  default3 as CnTags,
  install as default
};
