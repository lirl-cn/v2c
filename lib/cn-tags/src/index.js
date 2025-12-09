"use strict";
const index_vue_vue_type_script_lang = require("./index.vue_vue_type_script_lang.js");
const _pluginVue2_normalizer = require("../../_virtual/_plugin-vue2_normalizer.js");
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("div", { staticClass: "cn-tags-container" }, [_vm.showAll && _vm.mode === "checkbox" ? _c("span", { class: [
    "cn-tags-item",
    {
      "cn-tags-item-active": _vm.value && _vm.value.length === 1 && _vm.value[0] === _vm.showAll.value
    }
  ], on: { "click": _vm.onClickAll } }, [_vm._v(" " + _vm._s(_vm.showAll.label) + " ")]) : _vm._e(), _vm._l(_vm.options, function({ label, value: val }) {
    return _c("span", { key: val, class: [
      "cn-tags-item",
      {
        "cn-tags-item-active": _vm.mode === "checkbox" ? _vm.value && Array.isArray(_vm.value) && _vm.value.indexOf(val) !== -1 : _vm.value === val
      }
    ], on: { "click": function($event) {
      return _vm.onClick(val);
    } } }, [_vm._v(_vm._s(label))]);
  })], 2);
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
const CnTags = __component__.exports;
module.exports = CnTags;
