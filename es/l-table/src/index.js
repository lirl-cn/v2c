import _sfc_main from "./index.vue_vue_type_script_lang.js";
import normalizeComponent from "../../_virtual/_plugin-vue2_normalizer.js";
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("div", { directives: [{ name: "loading", rawName: "v-loading", value: _vm.pageLoading, expression: "pageLoading" }], class: [
    "l-table-container",
    { "l-table-selection-radio-container": _vm.selectType === "radio" }
  ] }, [_c("div", { class: [
    "l-table-content",
    {
      "l-table-content-empty": _vm.isTableEmpty && !_vm.emptyInTable
    }
  ], style: _vm._noPadding ? "padding: 0" : void 0 }, [_vm.isTableEmpty && !_vm.emptyInTable && !_vm.pageLoading ? [_vm._t("empty", function() {
    return [_c("b-empty", { attrs: { "title": "\u6682\u65E0\u6570\u636E" } })];
  })] : [_c("el-table", _vm._b({ ref: "tableRef", style: `width: 100%; ${_vm.tableStyle || ""}`, attrs: { "stripe": _vm._stripe, "data": _vm.dataSource || _vm.ownDataSource, "height": "100%", "empty-text": _vm._empty, "border": _vm._border, "row-key": _vm._rowKey, "tree-props": _vm.treeProps, "load": _vm.load, "lazy": Boolean(_vm.load), "tooltip-effect": "light" }, on: { "select": _vm.onSelect, "selection-change": _vm.onSelectionChange }, scopedSlots: _vm._u([!_vm.pageLoading ? { key: "empty", fn: function() {
    return [_vm._t("empty", function() {
      return [_vm._v(" " + _vm._s(_vm._empty) + " ")];
    })];
  }, proxy: true } : null], null, true) }, "el-table", _vm.attrs, false), [_vm.selection ? _c("el-table-column", { attrs: { "type": "selection", "reserve-selection": true, "width": "40", "align": "center", "selectable": _vm.selectableFun } }) : _vm._e(), Boolean(_vm.showIndex) ? _c("el-table-column", { attrs: { "type": "index", "align": "center", "index": _vm.calcIndex, "label": _vm.indexText, "class-name": "l-table-index-text", "width": "65" } }) : _vm._e(), _vm._l(_vm.columns, function({
    title,
    dataIndex,
    valueType,
    minWidth,
    width,
    ellipsis,
    fixed,
    align = "center",
    render: render2
  }) {
    return _c("el-table-column", { key: dataIndex, attrs: { "prop": dataIndex, "label": title, "width": width, "min-width": minWidth, "fixed": fixed, "align": align, "show-overflow-tooltip": ellipsis === false ? false : true }, scopedSlots: _vm._u([{ key: "default", fn: function({ row }) {
      return [_vm._t(`${dataIndex}`, function() {
        return [_vm._v(" " + _vm._s(_vm.formatValue(row, dataIndex, valueType, render2)) + " ")];
      }, { "record": row, "text": row[dataIndex] })];
    } }], null, true) });
  })], 2)]], 2), (!_vm.isTableEmpty || _vm.emptyInTable) && !_vm.disabledPage ? _c("div", { staticClass: "l-table-pagination" }, [_c("el-pagination", { attrs: { "current-page": _vm.dParams[_vm._currentKey], "page-size": _vm.dParams[_vm._pageSizeKey], "layout": _vm.finallyLayout, "total": _vm.dParams.total, "hide-on-single-page": _vm._hideOnSinglePage }, on: { "update:currentPage": function($event) {
    return _vm.$set(_vm.dParams, _vm._currentKey, $event);
  }, "update:current-page": function($event) {
    return _vm.$set(_vm.dParams, _vm._currentKey, $event);
  }, "current-change": _vm.handleCurrentChange, "size-change": _vm.handlePageSizeChange } }, [_vm._t("l-table-pagination", function() {
    return [_c("span", { key: "1" }, [_vm._v(" " + _vm._s(_vm.dParams[_vm._currentKey]) + " / " + _vm._s(_vm.dParams[_vm._pageSizeKey]) + " ")])];
  })], 2)], 1) : _vm._e()]);
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
const LTable = __component__.exports;
export {
  LTable as default
};
