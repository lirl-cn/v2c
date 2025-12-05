import _sfc_main from "./index.vue_vue_type_script_lang.js";
import normalizeComponent from "../../_virtual/_plugin-vue2_normalizer.js";
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("el-dialog", { attrs: { "title": _vm.title, "custom-class": ["c--model-dialog-container", _vm.className].filter((str) => !!str).join(" "), "visible": _vm.visible, "width": _vm.width || "600px", "destroy-on-close": _vm.destroyOnClose !== false, "append-to-body": "", "close-on-click-modal": false }, on: { "close": function($event) {
    return _vm.$emit("close");
  } }, scopedSlots: _vm._u([{ key: "footer", fn: function() {
    return [_vm._t("footer", function() {
      return [_vm.noFooter !== true ? _c("div", { staticClass: "cn-model-dialog-footer" }, [_c("el-button", { attrs: { "size": _vm.btnSize }, on: { "click": function($event) {
        return _vm.$emit("close");
      } } }, [_vm._v(" " + _vm._s(_vm.cancelText || "\u53D6 \u6D88") + " ")]), _c("el-button", { attrs: { "size": _vm.btnSize, "type": "primary" }, on: { "click": function($event) {
        return _vm.$emit("ok");
      } } }, [_vm._v(" " + _vm._s(_vm.okText || "\u786E \u5B9A") + " ")])], 1) : _vm._e()];
    })];
  }, proxy: true }], null, true) }, [_vm._t("default")], 2);
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
const CModal = __component__.exports;
export {
  CModal as default
};
