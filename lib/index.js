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
require("./styles/index.js");
require("./b-empty/index.js");
require("./c-content-container/index.js");
require("./c-modal/index.js");
require("./cn-badge/index.js");
require("./cn-form/index.js");
const index$5 = require("./cn-pagination/src/index.js");
require("./cn-table/index.js");
require("./cn-tags/index.js");
require("./l-table/index.js");
require("./l-table-plus/index.js");
require("./lr-tree/index.js");
require("./lr-tree2/index.js");
const index$7 = require("./cn-tags/src/index.js");
const index$3 = require("./cn-badge/src/index.js");
const index$6 = require("./cn-table/src/index.js");
const index$8 = require("./lr-tree/src/index.js");
const index$9 = require("./lr-tree2/src/index.js");
const index$a = require("./l-table/src/index.js");
const index$b = require("./l-table-plus/src/index.js");
const index = require("./b-empty/src/index.js");
const index$1 = require("./c-content-container/src/index.js");
const index$2 = require("./c-modal/src/index.js");
const index$4 = require("./cn-form/src/index.js");
const components = [
  index$7,
  index$5,
  index$3,
  index$4,
  index$6,
  index$8,
  index$9,
  index$a,
  index$b
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
exports.CnPagination = index$5;
exports.CnTags = index$7;
exports.CnBadge = index$3;
exports.CnTable = index$6;
exports.LrTree = index$8;
exports.LrTree2 = index$9;
exports.LTable = index$a;
exports.LTablePlus = index$b;
exports.BEmpty = index;
exports.CContentContainer = index$1;
exports.CModal = index$2;
exports.CnForm = index$4;
exports.default = install;
