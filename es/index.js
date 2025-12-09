var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import "./styles/index.js";
import "./b-empty/index.js";
import "./c-content-container/index.js";
import "./c-modal/index.js";
import "./cn-badge/index.js";
import "./cn-form/index.js";
import CnPagination from "./cn-pagination/src/index.js";
import { default as default2 } from "./cn-pagination/src/index.js";
import "./cn-table/index.js";
import "./cn-tags/index.js";
import "./l-table/index.js";
import "./l-table-plus/index.js";
import "./lr-tree/index.js";
import "./lr-tree2/index.js";
import CnTags from "./cn-tags/src/index.js";
import { default as default3 } from "./cn-tags/src/index.js";
import CnBadge from "./cn-badge/src/index.js";
import { default as default4 } from "./cn-badge/src/index.js";
import CnTable from "./cn-table/src/index.js";
import { default as default5 } from "./cn-table/src/index.js";
import LrTree from "./lr-tree/src/index.js";
import { default as default6 } from "./lr-tree/src/index.js";
import LrTree2 from "./lr-tree2/src/index.js";
import { default as default7 } from "./lr-tree2/src/index.js";
import LTable from "./l-table/src/index.js";
import { default as default8 } from "./l-table/src/index.js";
import LTablePlus from "./l-table-plus/src/index.js";
import { default as default9 } from "./l-table-plus/src/index.js";
import BEmpty from "./b-empty/src/index.js";
import { default as default10 } from "./b-empty/src/index.js";
import CModal from "./c-modal/src/index.js";
import { default as default11 } from "./c-modal/src/index.js";
import CContentContainer from "./c-content-container/src/index.js";
import { default as default12 } from "./c-content-container/src/index.js";
import CnForm from "./cn-form/src/index.js";
import { default as default13 } from "./cn-form/src/index.js";
const components = [
  CnTags,
  CnPagination,
  CnBadge,
  CnForm,
  CnTable,
  LrTree,
  LrTree2,
  LTable,
  LTablePlus,
  BEmpty,
  CModal,
  CContentContainer
];
const defaultTableConfig = {
  request: () => {
    throw new Error("\u60A8\u672A\u914D\u7F6Ecn-table\u5168\u5C40request\u65B9\u6CD5");
  },
  current: {
    key: "current"
  },
  pageSize: {
    key: "pageSize"
  },
  method: "GET"
};
const install = function(Vue, config = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$CN_V2C_TABLE_CONFIG = __spreadValues(__spreadValues({}, defaultTableConfig), config.table);
  Vue.prototype.$CN_V2C_LTABLE_CONFIG = __spreadValues({}, config.lTable);
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export {
  default10 as BEmpty,
  default12 as CContentContainer,
  default11 as CModal,
  default4 as CnBadge,
  default13 as CnForm,
  default2 as CnPagination,
  default5 as CnTable,
  default3 as CnTags,
  default8 as LTable,
  default9 as LTablePlus,
  default6 as LrTree,
  default7 as LrTree2,
  install as default
};
