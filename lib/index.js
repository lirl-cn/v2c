"use strict";
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
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const ElementUI = require("element-ui");
const zhCN = require("./node_modules/element-ui/lib/locale/lang/zh-CN.js");
require("./styles/index.js");
require("./cn-badge/index.js");
require("./cn-form/index.js");
const index$1 = require("./cn-pagination/src/index.js");
require("./cn-table/index.js");
require("./cn-tags/index.js");
const index = require("./cn-tags/src/index.js");
const index$2 = require("./cn-badge/src/index.js");
const index$3 = require("./cn-form/src/index.js");
const index$4 = require("./cn-table/src/index.js");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
const ElementUI__default = /* @__PURE__ */ _interopDefaultLegacy(ElementUI);
const components = [
  index,
  index$1,
  index$2,
  index$3,
  index$4
];
const defaultTableConfig = {
  request: fetch,
  current: {
    key: "current"
  },
  pageSize: {
    key: "pageSize"
  }
};
const install = function(Vue, config = {}) {
  Vue.use(ElementUI__default.default, zhCN);
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$CN_V2C_TABLE_CONFIG = __spreadValues(__spreadValues({}, defaultTableConfig), config.table);
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
exports.CnPagination = index$1;
exports.CnTags = index;
exports.CnBadge = index$2;
exports.CnForm = index$3;
exports.CnTable = index$4;
exports.default = install;
