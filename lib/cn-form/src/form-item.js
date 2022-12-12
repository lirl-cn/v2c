"use strict";
require("../../index.js");
const _pluginVue2_normalizer = require("../../_virtual/_plugin-vue2_normalizer.js");
require("../../cn-tags/index.js");
const index = require("../../cn-tags/src/index.js");
const _sfc_main = {
  components: { CnTags: index },
  props: {
    title: {
      type: String
    },
    separator: {
      type: String
    },
    placeholder: {
      type: String
    },
    startPlaceholder: {
      type: String
    },
    endPlaceholder: {
      type: String,
      default: "\u7ED3\u675F\u65E5\u671F"
    },
    type: {
      type: String,
      default: "input"
    },
    name: {
      type: String
    },
    options: {
      type: Array,
      default: void 0
    },
    hide: {
      type: Boolean,
      default: false
    },
    clearable: Boolean,
    formItemProps: {
      type: Object,
      default: void 0
    },
    fieldItemProps: {
      type: Object,
      default: () => ({})
    },
    formModel: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    onChange() {
      return this.fieldItemProps.onChange ? this.fieldItemProps.onChange : () => {
      };
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return !_vm.hide ? _c("el-form-item", _vm._b({ attrs: { "label": _vm.title, "prop": _vm.name } }, "el-form-item", _vm.formItemProps, false), [_vm.type === "switch" ? _c("el-switch", _vm._b({ model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-switch", _vm.fieldItemProps, false)) : _vm._e(), _vm.type === "slider" ? _c("el-slider", _vm._b({ model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-slider", _vm.fieldItemProps, false)) : _vm._e(), _vm.type === "datetime" ? _c("el-date-picker", _vm._b({ attrs: { "type": "datetime", "format": "yyyy-MM-dd HH:mm:ss", "value-format": "yyyy-MM-dd HH:mm:ss", "placeholder": _vm.placeholder || "\u9009\u62E9\u65E5\u671F\u65F6\u95F4" }, on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-date-picker", _vm.fieldItemProps, false)) : _vm._e(), _vm.type === "datetimerange" ? _c("el-date-picker", _vm._b({ attrs: { "type": "datetimerange", "format": "yyyy-MM-dd HH:mm:ss", "value-format": "yyyy-MM-dd HH:mm:ss", "start-placeholder": "\u5F00\u59CB\u65E5\u671F", "end-placeholder": "\u7ED3\u675F\u65E5\u671F", "range-separator": _vm.separator || "\u81F3", "placeholder": _vm.placeholder || "\u9009\u62E9\u65E5\u671F\u65F6\u95F4" }, on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-date-picker", _vm.fieldItemProps, false)) : _vm._e(), _vm.type === "date" ? _c("el-date-picker", _vm._b({ attrs: { "type": "date", "format": "yyyy-MM-dd", "value-format": "yyyy-MM-dd HH:mm:ss", "placeholder": _vm.placeholder || "\u9009\u62E9\u65E5\u671F" }, on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-date-picker", _vm.fieldItemProps, false)) : _vm._e(), _vm.type === "dates" ? _c("el-date-picker", _vm._b({ attrs: { "type": "dates", "format": "yyyy-MM-dd", "value-format": "yyyy-MM-dd HH:mm:ss", "placeholder": _vm.placeholder || "\u9009\u62E9\u591A\u4E2A\u65E5\u671F" }, on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-date-picker", _vm.fieldItemProps, false)) : _vm._e(), _vm.type === "week" ? _c("el-date-picker", _vm._b({ attrs: { "format": "yyyy \u7B2C WW \u5468", "value-format": "yyyy-MM-dd HH:mm:ss", "type": "week", "placeholder": _vm.placeholder || "\u9009\u62E9\u661F\u671F" }, on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-date-picker", _vm.fieldItemProps, false)) : _vm._e(), _vm.type === "date-month" || _vm.type === "month" ? _c("el-date-picker", _vm._b({ attrs: { "format": "yyyy-MM", "value-format": "yyyy-MM", "type": "month", "placeholder": _vm.placeholder || "\u9009\u62E9\u6708\u4EFD" }, on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-date-picker", _vm.fieldItemProps, false)) : _vm._e(), _vm.type === "date-year" || _vm.type === "year" ? _c("el-date-picker", _vm._b({ attrs: { "format": "yyyy", "value-format": "yyyy", "type": "year", "placeholder": _vm.placeholder || "\u9009\u62E9\u5E74\u4EFD" }, on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-date-picker", _vm.fieldItemProps, false)) : _vm._e(), _vm.type === "daterange" || _vm.type === "date-range" ? _c("el-date-picker", _vm._b({ attrs: { "type": "daterange", "format": "yyyy-MM-dd", "value-format": "yyyy-MM-dd HH:mm:ss", "range-separator": _vm.separator || "\u81F3", "start-placeholder": _vm.startPlaceholder || "\u5F00\u59CB\u65E5\u671F", "end-placeholder": _vm.endPlaceholder || "\u7ED3\u675F\u65E5\u671F" }, on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-date-picker", _vm.fieldItemProps, false)) : _vm._e(), _vm.type === "monthrange" || _vm.type === "month-range" ? _c("el-date-picker", _vm._b({ attrs: { "type": "monthrange", "format": "yyyy-MM", "value-format": "yyyy-MM", "range-separator": _vm.separator || "\u81F3", "start-placeholder": _vm.startPlaceholder || "\u5F00\u59CB\u6708\u4EFD", "end-placeholder": _vm.endPlaceholder || "\u7ED3\u675F\u6708\u4EFD" }, on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-date-picker", _vm.fieldItemProps, false)) : _vm._e(), _vm.type === "tags-checkbox" ? _c("cn-tags", _vm._b({ attrs: { "options": _vm.options }, on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "cn-tags", _vm.fieldItemProps, false)) : _vm._e(), _vm.type === "tags-radio" ? _c("cn-tags", _vm._b({ attrs: { "options": _vm.options, "mode": "radio" }, on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "cn-tags", _vm.fieldItemProps, false)) : _vm._e(), _vm.type === "select" ? _c("el-select", _vm._b({ staticStyle: { "min-width": "120px" }, attrs: { "placeholder": _vm.placeholder || "\u8BF7\u9009\u62E9", "clearable": _vm.clearable !== false, "filterable": "" }, on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-select", _vm.fieldItemProps, false), _vm._l(_vm.options, function({ label, value }) {
    return _c("el-option", { key: value, attrs: { "label": label, "value": value } });
  }), 1) : _vm._e(), _vm.type === "radio" ? _c("el-radio-group", _vm._b({ on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-radio-group", _vm.fieldItemProps, false), _vm._l(_vm.options, function({ label, value }) {
    return _c("el-radio", { key: value, attrs: { "label": value } }, [_vm._v(_vm._s(label))]);
  }), 1) : _vm._e(), _vm.type === "checkbox" ? _c("el-checkbox-group", _vm._b({ on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-checkbox-group", _vm.fieldItemProps, false), _vm._l(_vm.options || [], function({ label, value }) {
    return _c("el-checkbox", { key: value, attrs: { "label": value } }, [_vm._v(_vm._s(label))]);
  }), 1) : _vm._e(), _vm.type === "cascader" ? _c("el-cascader", _vm._b({ attrs: { "options": _vm.options }, on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-cascader", _vm.fieldItemProps, false)) : _vm._e(), _vm.type === "transfer" ? _c("el-transfer", _vm._b({ attrs: { "data": _vm.options }, on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-transfer", _vm.fieldItemProps, false)) : _vm._e(), _vm.type === "color" ? _c("el-color-picker", _vm._b({ on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-color-picker", _vm.fieldItemProps, false)) : _vm._e(), _vm.type === "rate" ? _c("el-rate", _vm._b({ on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-rate", _vm.fieldItemProps, false)) : _vm._e(), _vm.type === "input" ? _c("el-input", _vm._b({ attrs: { "placeholder": _vm.placeholder || "\u8BF7\u8F93\u5165" }, on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-input", _vm.fieldItemProps, false)) : _vm._e(), _vm.type === "textarea" ? _c("el-input", _vm._b({ attrs: { "type": "textarea", "placeholder": _vm.placeholder || "\u8BF7\u8F93\u5165" }, on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-input", _vm.fieldItemProps, false)) : _vm._e(), _vm.type === "number" ? _c("el-input-number", _vm._b({ attrs: { "placeholder": _vm.placeholder || "\u8BF7\u8F93\u5165" }, on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-input-number", _vm.fieldItemProps, false)) : _vm._e(), _vm.type === "upload" ? _c("el-upload", _vm._b({ on: { "change": _vm.onChange }, model: { value: _vm.formModel[_vm.name], callback: function($$v) {
    _vm.$set(_vm.formModel, _vm.name, $$v);
  }, expression: "formModel[name]" } }, "el-upload", _vm.fieldItemProps, false), [_c("el-button", { attrs: { "size": "small", "type": "primary" } }, [_vm._v("\u70B9\u51FB\u4E0A\u4F20")])], 1) : _vm._e(), _vm.type === "text" ? [_c("span", [_vm._v(_vm._s(_vm.formModel[_vm.name]))])] : _vm._e(), _vm.type === "custom" ? [_vm._t(`${_vm.name}CustomFormComponent`, null, { "fieldItemProps": _vm.fieldItemProps, "formModel": _vm.formModel, "name": _vm.name, "value": _vm.formModel[_vm.name], "onChange": (val) => _vm.$nextTick(() => _vm.formModel[_vm.name] = val) })] : _vm._e(), _vm._t(`${_vm.name}FormExtra`)], 2) : _vm._e();
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ _pluginVue2_normalizer(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const formItem = __component__.exports;
module.exports = formItem;
