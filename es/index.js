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
  const { elementUIConfig = {} } = config;
  Vue.use(ElementUI, __spreadValues({ locale: _default }, elementUIConfig));
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$CN_V2C_TABLE_CONFIG = __spreadValues(__spreadValues({}, defaultTableConfig), config.table);
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
