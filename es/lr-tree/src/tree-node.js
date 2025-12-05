import _sfc_main from "./tree-node.vue_vue_type_script_lang.js";
import normalizeComponent from "../../_virtual/_plugin-vue2_normalizer.js";
var _sfc_render = function render() {
  var _a, _b, _c2, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "lr-tree-node-container" }, [_vm._t("node", function() {
    return [_vm._v(" " + _vm._s(_vm.renderText(_vm.data)) + " ")];
  }, { "data": _vm.data, "ids": (_c2 = _vm.baseKey ? [_vm.baseKey, (_a = _vm.data) == null ? void 0 : _a.id].join(_vm.SPACER) : (_b = _vm.data) == null ? void 0 : _b.id) == null ? void 0 : _c2.split(_vm.SPACER) }), ((_e = (_d = _vm.data) == null ? void 0 : _d.children) == null ? void 0 : _e.length) ? _c("i") : _vm._e(), ((_g = (_f = _vm.data) == null ? void 0 : _f.children) == null ? void 0 : _g.length) > 1 ? _c("div", { staticClass: "lr-tree-node--inner" }, _vm._l((_h = _vm.data) == null ? void 0 : _h.children, function(node) {
    var _a2, _b2;
    return _c("div", { key: node.id }, [!(_vm.arrow === false || node.arrow === false) ? _c("i", { staticClass: "lr-tree-node-arrow" }) : _vm._e(), _c("LrTreeNode", { attrs: { "data": node, "arrow": _vm.arrow, "base-key": _vm.baseKey ? [_vm.baseKey, (_a2 = _vm.data) == null ? void 0 : _a2.id].join(_vm.SPACER) : (_b2 = _vm.data) == null ? void 0 : _b2.id }, scopedSlots: _vm._u([{ key: "node", fn: function({ data, ids }) {
      return [_vm._t("node", null, { "data": data, "ids": ids })];
    } }], null, true) })], 1);
  }), 0) : ((_j = (_i = _vm.data) == null ? void 0 : _i.children) == null ? void 0 : _j.length) === 1 ? _c("div", { staticStyle: { "padding-left": "8px" } }, [_c("div", { staticStyle: { "position": "relative" } }, [!(_vm.arrow === false || ((_m = (_l = (_k = _vm.data) == null ? void 0 : _k.children) == null ? void 0 : _l[0]) == null ? void 0 : _m.arrow) === false) ? _c("i", { staticClass: "lr-tree-node-arrow" }) : _vm._e(), _c("LrTreeNode", { attrs: { "data": (_n = _vm.data.children) == null ? void 0 : _n[0], "base-key": _vm.baseKey ? [_vm.baseKey, (_o = _vm.data) == null ? void 0 : _o.id].join(_vm.SPACER) : (_p = _vm.data) == null ? void 0 : _p.id }, scopedSlots: _vm._u([{ key: "node", fn: function({ data, ids }) {
    return [_vm._t("node", null, { "data": data, "ids": ids })];
  } }], null, true) })], 1)]) : _vm._e()], 2);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const LrTreeNode = __component__.exports;
export {
  LrTreeNode as default
};
