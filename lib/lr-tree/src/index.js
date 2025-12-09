"use strict";
const index_vue_vue_type_script_lang = require("./index.vue_vue_type_script_lang.js");
const _pluginVue2_normalizer = require("../../_virtual/_plugin-vue2_normalizer.js");
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("div", { ref: "containerRef", staticClass: "lr-tree-select--container" }, [_c("div", { ref: "contentRef", staticClass: "lr-tree-select-container", style: `--lr-tree-bg-color: ${_vm.backgroundColor}; --lr-tree-border-color: ${_vm.borderColor};` }, [_c("div", { staticClass: "lr-tree-select-e", style: { minWidth: _vm.canvasMinWidth } }), _c("div", { ref: "canvasRef", staticClass: "lr-tree-select-canvas", style: `transform: scale(${_vm.scale ? _vm.scaleValue : 1})` }, [_c("LrTreeNode", { attrs: { "data": _vm.dataSource, "mode": _vm.mode, "arrow": _vm.arrow }, scopedSlots: _vm._u([{ key: "node", fn: function({ data }) {
    return [_vm._t("node", null, { "data": data })];
  } }], null, true) })], 1)]), _vm.scale ? _c("div", { staticClass: "lr-tree-select-operate" }, [_c("span", { on: { "click": function($event) {
    return _vm.toScale("+", 0.15);
  } } }, [_vm._v("+")]), _c("i", [_vm._v(_vm._s(Math.round(_vm.scaleValue * 100)) + "%")]), _c("span", { staticStyle: { "padding-bottom": "14px", "font-size": "36px" }, on: { "click": function($event) {
    return _vm.toScale("-", 0.15);
  } } }, [_vm._v(" - ")])]) : _vm._e()]);
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
const LrTree = __component__.exports;
module.exports = LrTree;
