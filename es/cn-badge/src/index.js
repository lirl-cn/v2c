import _sfc_main from "./index.vue_vue_type_script_lang.js";
import normalizeComponent from "../../_virtual/_plugin-vue2_normalizer.js";
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("span", { staticClass: "cn-badge-container" }, [!!_vm.status ? _c("span", { class: ["cn-badge-status-dot", `cn-badge-status-${_vm.status}`] }) : _vm._e(), _c("span", { staticClass: "ant-badge-status-text" }, [_vm._v(_vm._s(_vm.text))])]);
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
const CnBadge = __component__.exports;
export {
  CnBadge as default
};
