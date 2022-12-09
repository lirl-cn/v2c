"use strict";
const index_vue_vue_type_script_lang = require("./index.vue_vue_type_script_lang.js");
const _pluginVue2_normalizer = require("../../_virtual/_plugin-vue2_normalizer.js");
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("el-pagination", { staticClass: "cn-data-catalog-table-pagination", attrs: { "small": _vm.size === "small", "background": _vm.background, "current-page": _vm.current, "pageSize": _vm.pageSize, "total": _vm.total, "showSizeChanger": "", "pageSizes": _vm.pageSizeOptions, "how-quick-jumper": "", "layout": _vm.layout }, on: { "size-change": _vm.onSizeChange, "current-change": _vm.onCurrentChange, "prev-click": _vm.onCurrentChange, "next-click": _vm.onCurrentChange } });
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ _pluginVue2_normalizer(
  index_vue_vue_type_script_lang,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const CnPagination = __component__.exports;
module.exports = CnPagination;
