"use strict";
const index_vue_vue_type_script_lang = require("./index.vue_vue_type_script_lang.js");
const _pluginVue2_normalizer = require("../../_virtual/_plugin-vue2_normalizer.js");
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { class: [
    "cn-form-container",
    {
      "cn-form-inline-container": _vm.layout === "inline",
      "cn-form-grid-container": _vm.layout === "grid",
      "cn-form-block-container": _vm.layout === "block",
      [`cn-form-grid-columns-${_vm.columns}`]: _vm.layout === "grid"
    }
  ] }, [_c("el-form", { ref: "formRef", attrs: { "inline": _vm.layout === "inline", "model": _vm.formModel, "rules": _vm.rules, "size": _vm.size, "label-width": `${_vm.labelWidth}px`, "label-suffix": _vm.labelSuffix, "hide-required-asterisk": _vm.hideRequiredAsterisk, "disabled": _vm.disabled, "validate-on-rule-change": false } }, [_vm._l(_vm.data, function({
    name,
    title,
    placeholder,
    type,
    clearable,
    options,
    formItemProps,
    hide,
    fieldItemProps
  }) {
    return _c("form-item", { key: name, attrs: { "hide": hide, "name": name, "title": title, "clearable": clearable, "placeholder": placeholder, "type": type, "options": options, "fieldItemProps": fieldItemProps, "formItemProps": formItemProps, "formModel": _vm.formModel, "customChangeFormModel": _vm.setFieldValue }, scopedSlots: _vm._u([{ key: `${name}FormExtra`, fn: function() {
      return [_vm._t(`${name}FormExtra`)];
    }, proxy: true }, { key: `${name}CustomFormComponent`, fn: function({ fieldItemProps: fieldItemProps2, formModel, onChange, value }) {
      return [_vm._t(`${name}CustomFormComponent`, null, { "fieldItemProps": fieldItemProps2, "formModel": formModel, "onChange": onChange, "value": value })];
    } }], null, true) });
  }), _vm._t("default")], 2)], 1);
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
const CnForm = __component__.exports;
module.exports = CnForm;
