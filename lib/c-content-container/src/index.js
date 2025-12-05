"use strict";
const index_vue_vue_type_script_lang = require("./index.vue_vue_type_script_lang.js");
const _pluginVue2_normalizer = require("../../_virtual/_plugin-vue2_normalizer.js");
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("div", { staticClass: "c-content--container", style: `${_vm.noPadding ? "padding: 0;" : ""}${_vm.noBgColor ? "background-color: transparent;" : ""}` }, [_c("div", { staticClass: "c-content--header" }, [_vm._t("header")], 2), _c("div", { staticClass: "c-content--body" }, [_vm._t("body")], 2), _c("div", { staticClass: "c-content--footer" }, [_vm._t("footer")], 2)]);
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
const CContentContainer = __component__.exports;
module.exports = CContentContainer;
