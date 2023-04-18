"use strict";
const index_vue_vue_type_script_lang = require("./index.vue_vue_type_script_lang.js");
const _pluginVue2_normalizer = require("../../_virtual/_plugin-vue2_normalizer.js");
var _sfc_render = function render() {
  var _a, _b;
  var _vm = this, _c = _vm._self._c;
  return _c("div", { ref: "cn-table--container", staticClass: "cn-table--container" }, [_vm.search ? _c("div", { class: [
    "cn-table-search-container",
    { "cn-table-search-inline-container": _vm.__searchType === "inline" }
  ] }, [_c("cn-form", { ref: "search-table-search-form", attrs: { "data": _vm.ownSearchList, "layout": _vm.__searchType, "columns": _vm.___searchColumns, "labelWidth": _vm.__searchLabelWidth }, scopedSlots: _vm._u([_vm._l(_vm.ownSearchList, function({ name }) {
    return { key: `${name}FormExtra`, fn: function() {
      return [_vm._t(`${name}FormExtra`)];
    }, proxy: true };
  }), _vm._l(_vm.ownSearchList, function({ name }) {
    return { key: `${name}CustomFormComponent`, fn: function({
      fieldItemProps,
      formModel,
      onChange,
      value
    }) {
      return [_vm._t(`${name}CustomFormComponent`, null, { "fieldItemProps": fieldItemProps, "formModel": formModel, "onChange": onChange, "value": value })];
    } };
  })], null, true) }, [_c("div", { class: [
    "cn-table-search-btn-container",
    { "cn-table-search-btn-block-container": _vm.__searchType === "block" }
  ], style: _vm.__searchType === "grid" && _vm.isSearchOpen ? { "grid-column": `span ${_vm.__searchBtnContainerSpan}` } : void 0 }, [_vm._t("operationsBtnPrefix"), _vm.__searchText !== false ? _c("el-button", { staticClass: "cn-table-search-btn-search", attrs: { "size": "small", "type": "primary" }, on: { "click": _vm.onSearch } }, [_vm._v(_vm._s(_vm.__searchText))]) : _vm._e(), _vm.__resetText !== false ? _c("el-button", { staticClass: "cn-table-search-btn-reset", attrs: { "size": "small" }, on: { "click": _vm._onReset } }, [_vm._v(_vm._s(_vm.__resetText))]) : _vm._e(), _vm._t("operationsBtnSuffix"), _vm.__searchType === "grid" && _vm.allSearchSpans > _vm.___searchColumns - 1 ? [_vm.isSearchOpen ? _c("a", { staticClass: "cn-table-search-operation", on: { "click": () => _vm.toggleSearchPanel(false) } }, [_vm._v(_vm._s(_vm.__closeText) + " "), _c("i", { staticClass: "el-icon-arrow-up" })]) : _c("a", { staticClass: "cn-table-search-operation", on: { "click": () => _vm.toggleSearchPanel(false) } }, [_vm._v(_vm._s(_vm.__openText) + " "), _c("i", { staticClass: "el-icon-arrow-down" })])] : _vm._e()], 2)])], 1) : _vm._e(), _vm.__setting !== false || _vm.$scopedSlots["headTitle"] || _vm.$scopedSlots["headOperation"] ? _c("div", { staticClass: "cn-table-head-container" }, [_c("div", { staticClass: "cn-table-head-title" }, [_vm._t("headTitle", function() {
    return [_vm._v(_vm._s(_vm.title))];
  })], 2), _c("div", { staticClass: "cn-table-head-operation" }, [_vm._t("headOperation")], 2), _vm.__setting !== false ? _c("div", { staticClass: "cn-table-head-setting" }, [Array.isArray(_vm.__setting) && _vm.__setting.indexOf("fullScreen") !== -1 ? _c("i", { staticClass: "el-icon-help", attrs: { "title": _vm.othersTextEnum["setting-fullScreen"] || "\u5168\u5C4F\u5207\u6362" }, on: { "click": _vm.toggleFullScreen } }) : _vm._e(), Array.isArray(_vm.__setting) && _vm.__setting.indexOf("reload") !== -1 ? _c("i", { staticClass: "el-icon-refresh", attrs: { "title": _vm.othersTextEnum["setting-reload"] || "\u5237\u65B0" }, on: { "click": _vm.reload } }) : _vm._e()]) : _vm._e()]) : _vm._e(), _c("div", { staticClass: "cn-table-container" }, [((_a = _vm.selectedRows) == null ? void 0 : _a.length) ? _c("div", { staticClass: "cn-table-alert-container" }, [_c("div", { staticClass: "cn-table-alert-info-content" }, [_vm._t("alertInfoContent", function() {
    var _a2, _b2, _c2, _d, _e, _f, _g, _h, _i, _j;
    return [_vm._v(" " + _vm._s(((_a2 = _vm.rowSelection) == null ? void 0 : _a2.selectText) || ((_c2 = (_b2 = _vm.$CN_V2C_TABLE_CONFIG) == null ? void 0 : _b2.rowSelection) == null ? void 0 : _c2.selectText) || "\u5DF2\u9009") + " " + _vm._s((_d = _vm.selectedRows) == null ? void 0 : _d.length) + " " + _vm._s(((_e = _vm.rowSelection) == null ? void 0 : _e.itemText) || ((_g = (_f = _vm.$CN_V2C_TABLE_CONFIG) == null ? void 0 : _f.rowSelection) == null ? void 0 : _g.itemText) || "\u9879") + " "), _c("a", { on: { "click": _vm._clearSelectRows } }, [_vm._v(" " + _vm._s(((_h = _vm.rowSelection) == null ? void 0 : _h.cancelSelectText) || ((_j = (_i = _vm.$CN_V2C_TABLE_CONFIG) == null ? void 0 : _i.rowSelection) == null ? void 0 : _j.cancelSelectText) || "\u53D6\u6D88\u9009\u62E9") + " ")])];
  }, { "selectedRows": _vm.selectedRows })], 2), _c("div", { staticClass: "cn-table-alert-info-options" }, [_vm._t("alertInfoOptions", function() {
    var _a2, _b2, _c2, _d, _e, _f, _g, _h;
    return [((_a2 = _vm.rowSelection) == null ? void 0 : _a2.onBatchDelete) ? _c("a", { on: { "click": function($event) {
      var _a3, _b3;
      (_b3 = (_a3 = _vm.rowSelection) == null ? void 0 : _a3.onBatchDelete) == null ? void 0 : _b3.call(_a3, _vm.selectedRows);
    } } }, [_vm._v(_vm._s(((_b2 = _vm.rowSelection) == null ? void 0 : _b2.batchDeleteText) || ((_d = (_c2 = _vm.$CN_V2C_TABLE_CONFIG) == null ? void 0 : _c2.rowSelection) == null ? void 0 : _d.batchDeleteText) || "\u6279\u91CF\u5220\u9664"))]) : _vm._e(), ((_e = _vm.rowSelection) == null ? void 0 : _e.onBatchDownload) ? _c("a", { on: { "click": function($event) {
      var _a3, _b3;
      (_b3 = (_a3 = _vm.rowSelection) == null ? void 0 : _a3.onBatchDownload) == null ? void 0 : _b3.call(_a3, _vm.selectedRows);
    } } }, [_vm._v(_vm._s(((_f = _vm.rowSelection) == null ? void 0 : _f.batchDownloadText) || ((_h = (_g = _vm.$CN_V2C_TABLE_CONFIG) == null ? void 0 : _g.rowSelection) == null ? void 0 : _h.batchDownloadText) || "\u5BFC\u51FA\u6570\u636E"))]) : _vm._e()];
  }, { "selectedRows": _vm.selectedRows })], 2)]) : _vm._e(), _c("el-table", { directives: [{ name: "loading", rawName: "v-loading", value: _vm.ownLoading, expression: "ownLoading" }], key: _vm.__pagination.current, ref: "cn-table-container", class: _vm.tableClassName, attrs: { "data": _vm.dataSource || _vm.ownDataSource, "height": _vm.scroll ? _vm.scroll.y : void 0, "row-key": _vm.rowKey, "select-on-indeterminate": "", "size": "small", "border": true }, on: { "selection-change": _vm.selectionLineChangeHandle } }, [_vm.rowSelection ? _c("el-table-column", { attrs: { "type": "selection", "class-name": "cn--text-center", "width": "48" } }) : _vm._e(), Boolean(_vm.showIndex) ? _c("el-table-column", { attrs: { "type": "index", "index": _vm.calcIndex, "label": _vm.othersTextEnum["table-index"] || "\u5E8F\u53F7", "class-name": "cn--text-center", "width": "56" } }) : _vm._e(), _vm._l(_vm.tableColumns, function({
    title,
    dataIndex,
    width,
    minWidth,
    ellipsis,
    fixed,
    valueEnum,
    status,
    scopedSlots = {},
    children,
    className,
    render: render2
  }, index) {
    return _c("cn-column", { key: title + dataIndex + index, attrs: { "width": width, "minWidth": minWidth, "className": className, "ellipsis": ellipsis, "fixed": fixed, "title": title, "dataIndex": dataIndex, "status": status, "valueEnum": valueEnum, "children": children, "rend": render2, "autoCalcWidth": _vm.autoCalcWidth }, scopedSlots: _vm._u([_vm.showSlot(scopedSlots.customRender || dataIndex) ? { key: dataIndex, fn: function({ text, record, index: ind }) {
      return [_vm._t(scopedSlots.customRender || dataIndex, null, { "record": record, "text": text, "index": ind })];
    } } : null], null, true) });
  })], 2)], 1), _vm.pagination !== false && (_vm.dataSource || _vm.ownDataSource).length !== 0 ? _c("div", { staticClass: "cn-table-pagination-container" }, [_c("cn-el-pagination", { attrs: { "onChange": _vm.handleTableChange, "current": _vm.__pagination.current, "page-size": _vm.__pagination.pageSize, "pageSizeOptions": (_b = _vm.__pagination) == null ? void 0 : _b.pageSizeOptions, "total": _vm.__pagination.total } })], 1) : _vm._e()]);
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
const CnTable = __component__.exports;
module.exports = CnTable;
