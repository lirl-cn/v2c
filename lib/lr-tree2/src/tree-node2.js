"use strict";
const treeNode2_vue_vue_type_script_lang = require("./tree-node2.vue_vue_type_script_lang.js");
const _pluginVue2_normalizer = require("../../_virtual/_plugin-vue2_normalizer.js");
var _sfc_render = function render() {
  var _a, _b, _c2, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("div", { staticClass: "lr-tree-node-container2" }, [_vm._t("node", function() {
    return [_vm._v(" " + _vm._s(_vm.renderText(_vm.data)) + " ")];
  }, { "data": _vm.data, "ids": (_c2 = _vm.baseKey ? [_vm.baseKey, (_a = _vm.data) == null ? void 0 : _a.id].join(_vm.SPACER) : (_b = _vm.data) == null ? void 0 : _b.id) == null ? void 0 : _c2.split(_vm.SPACER) }), ((_e = (_d = _vm.data) == null ? void 0 : _d.children) == null ? void 0 : _e.length) > 1 ? _c("i") : _vm._e(), ((_g = (_f = _vm.data) == null ? void 0 : _f.children) == null ? void 0 : _g.length) > 1 ? _c("div", { staticClass: "lr-tree-node--inner2" }, _vm._l((_h = _vm.data) == null ? void 0 : _h.children, function(node) {
    var _a2, _b2;
    return _c("div", { key: node.id }, [_c("LrTreeNode2", { attrs: { "data": node, "base-key": _vm.baseKey ? [_vm.baseKey, (_a2 = _vm.data) == null ? void 0 : _a2.id].join(_vm.SPACER) : (_b2 = _vm.data) == null ? void 0 : _b2.id }, scopedSlots: _vm._u([{ key: "node", fn: function({ data, ids }) {
      return [_vm._t("node", null, { "data": data, "ids": ids })];
    } }], null, true) })], 1);
  }), 0) : ((_j = (_i = _vm.data) == null ? void 0 : _i.children) == null ? void 0 : _j.length) === 1 ? _c("div", [_c("div", { staticClass: "lr-tree-node--inner2-c", staticStyle: { "position": "relative", "left": "-11px" } }, [_c("LrTreeNode2", { attrs: { "data": (_k = _vm.data.children) == null ? void 0 : _k[0], "base-key": _vm.baseKey ? [_vm.baseKey, (_l = _vm.data) == null ? void 0 : _l.id].join(_vm.SPACER) : (_m = _vm.data) == null ? void 0 : _m.id }, scopedSlots: _vm._u([{ key: "node", fn: function({ data, ids }) {
    return [_vm._t("node", null, { "data": data, "ids": ids })];
  } }], null, true) })], 1)]) : _vm._e()], 2);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ _pluginVue2_normalizer(
  treeNode2_vue_vue_type_script_lang,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const LrTreeNode2 = __component__.exports;
module.exports = LrTreeNode2;
