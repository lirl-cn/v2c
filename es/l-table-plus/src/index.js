import _sfc_main from "./index.vue_vue_type_script_lang.js";
import normalizeComponent from "../../_virtual/_plugin-vue2_normalizer.js";
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("c-content-container", { staticClass: "lrl-table-plus-container", attrs: { "no-padding": "" }, scopedSlots: _vm._u([_vm.showHeader ? { key: "header", fn: function() {
    return [!_vm.hideSearch ? _c("cn-form", { attrs: { "layout": _vm.searchLayout, "data": _vm.searchColumns, "actionRef": (node) => _vm.searchRef = node, "columns": _vm.searchGrid }, scopedSlots: _vm._u([_vm._l(_vm.searchColumns.filter(
      (item) => item.searchType === "custom"
    ), function({ dataIndex }) {
      return { key: `${dataIndex}CustomFormComponent`, fn: function({
        fieldItemProps,
        formModel,
        onChange,
        value
      }) {
        return [_vm._t(`${dataIndex}Search`, null, { "fieldItemProps": fieldItemProps, "formModel": formModel, "onChange": onChange, "value": value })];
      } };
    })], null, true) }, [_c("el-button", { attrs: { "size": _vm.searchBtnSize, "type": "primary" }, on: { "click": _vm.search } }, [_vm._v("\u67E5\u8BE2")]), _c("el-button", { attrs: { "size": _vm.searchBtnSize }, on: { "click": _vm.reset } }, [_vm._v("\u91CD\u7F6E")])], 1) : _vm._e(), _c("div", { staticClass: "lrl-table-search-right-opt" }, [_vm.createText ? _c("el-button", { attrs: { "type": "primary" }, on: { "click": function($event) {
      _vm.addVisible = true;
    } } }, [_vm._v(" " + _vm._s(_vm.createText) + " ")]) : _vm._e(), _vm._t("searchOperate")], 2)];
  }, proxy: true } : null, { key: "body", fn: function() {
    return [_c("l-table", { ref: "tableRef", attrs: { "action": _vm.action, "request": _vm.request, "method": _vm.method, "stripe": _vm.stripe, "showIndex": _vm.showIndex, "indexText": _vm.indexText, "border": _vm.border, "load": _vm.load, "treeProps": _vm.treeProps, "columns": _vm.tableColumns, "params": _vm.tableParams, "rowKey": _vm.rowKey, "currentKey": _vm.currentKey, "page-size-key": _vm.pageSizeKey, "default-current-value": _vm.defaultCurrentValue, "default-page-size-value": _vm.defaultPageSizeValue, "selection": _vm.selection, "selectType": _vm.selectType, "selectable": _vm.selectable, "formatResponse": _vm.formatResponse, "onSearchClearSelectedRows": _vm.onSearchClearSelectedRows, "hideOnSinglePage": _vm.hideOnSinglePage }, on: { "select": _vm.onTableSelect }, scopedSlots: _vm._u([_vm._l(_vm.tableColumns, function({ dataIndex }) {
      return { key: dataIndex, fn: function({ record }) {
        return [_vm._t(`${dataIndex}`, null, { "record": record, "text": record[dataIndex] })];
      } };
    })], null, true) }), _c("c-modal", { attrs: { "title": `${_vm.detail ? "\u7F16\u8F91" : "\u65B0\u589E"}${_vm.title || ""}`, "visible": _vm.addVisible, "width": _vm.formWidth }, on: { "close": _vm.closeAddModal, "ok": _vm.onSubmit } }, [_c("cn-form", { key: String(_vm.detail) + _vm.addVisible, attrs: { "data": _vm.formColumns, "actionRef": (node) => _vm.formRef = node }, scopedSlots: _vm._u([_vm._l(_vm.formColumns.filter(
      (item) => item.formType === "custom"
    ), function({ name }) {
      return { key: `${name}CustomFormComponent`, fn: function({
        fieldItemProps,
        formModel,
        onChange,
        value
      }) {
        return [_vm._t(`${name}Form`, null, { "fieldItemProps": fieldItemProps, "formModel": formModel, "onChange": onChange, "value": value })];
      } };
    })], null, true) })], 1)];
  }, proxy: true }], null, true) });
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
const LTablePlus = __component__.exports;
export {
  LTablePlus as default
};
