"use strict";
require("../../cn-pagination/index.js");
require("../../cn-form/index.js");
const column = require("./column.js");
const _pluginVue2_normalizer = require("../../_virtual/_plugin-vue2_normalizer.js");
const index = require("../../cn-pagination/src/index.js");
const index$1 = require("../../cn-form/src/index.js");
const DEFAULT_RESPONSE_DATA = {
  success: true,
  data: [],
  page: { totalElements: 0 }
};
const _sfc_main = {
  name: "cn-table",
  components: {
    CnElPagination: index,
    CnForm: index$1,
    CnColumn: column
  },
  props: {
    tableClassName: String,
    setting: {
      type: [Array, Boolean]
    },
    resetText: {
      type: String | false,
      default: "\u91CD\u7F6E"
    },
    searchText: {
      type: String | false,
      default: "\u67E5\u8BE2"
    },
    rowKey: {
      type: String,
      default: void 0
    },
    searchType: {
      type: String,
      default: "grid"
    },
    searchColumns: {
      type: Number,
      default: 3
    },
    scroll: {
      type: Object | false,
      default: () => {
      }
    },
    action: String,
    onloadAutoRequest: {
      type: Boolean,
      default: true
    },
    showIndex: {
      type: void 0 | Boolean | Function,
      default: void 0
    },
    request: Function,
    method: {
      type: "GET" | "POST",
      default: "POST"
    },
    columns: {
      type: Array,
      default: () => []
    },
    dataSource: {
      type: Array,
      default: void 0
    },
    pagination: {
      type: [Boolean, Object],
      default: void 0
    },
    showPagination: {
      type: Boolean,
      default: true
    },
    defaultPageSize: {
      type: Number,
      default: 20
    },
    pageSizeOptions: {
      type: Array,
      default: () => [10, 20, 50, 100]
    },
    search: {
      type: [Boolean, Object],
      default: () => ({})
    },
    searchDateRangeExtra: {
      type: Array,
      default: () => ["StartTime", "EndTime"]
    },
    searchDateRangeExtraPlacement: {
      type: "start" | "end",
      default: "end"
    },
    data: {
      type: Object | Promise,
      default: () => ({})
    },
    actionRef: {
      type: Function,
      default: void 0
    },
    beforeSearchSubmit: {
      type: Function,
      default: void 0
    },
    formatResponse: {
      type: Function,
      default: void 0
    },
    onFetchDataError: {
      type: Function,
      default: void 0
    },
    watchReset: {
      type: Function,
      default: void 0
    },
    loading: Boolean,
    defaultExpandAllRows: Boolean,
    rowSelection: {
      type: Object,
      default: void 0
    },
    autoCalcWidth: {
      type: Boolean | Number,
      default: false
    }
  },
  data() {
    return {
      searchList: [],
      tableColumns: [],
      _pagination: {
        defaultCurrent: 1,
        current: 1,
        pageSize: this.defaultPageSize,
        total: 0,
        showTotal: (total) => `\u5171 ${total} \u6761`,
        pageSizeOptions: this.pageSizeOptions,
        showQuickJumper: true,
        showSizeChanger: true
      },
      searchTypesMap: {},
      ownDataSource: [],
      ownLoading: false,
      searchData: {},
      selectedRows: [],
      isFullScreen: false
    };
  },
  methods: {
    calcIndex(index2) {
      if (typeof this.showIndex === "function") {
        return this.showIndex({ index: index2, current: this.__pagination.current, pageSize: this.__pagination.pageSize, text: (this.__pagination.current - 1) * this.__pagination.pageSize + (index2 + 1) });
      }
      return (this.__pagination.current - 1) * this.__pagination.pageSize + (index2 + 1);
    },
    showSlot(dataIndex) {
      return Boolean(this.$scopedSlots[dataIndex]);
    },
    selectionLineChangeHandle(selectedRows) {
      this.$set(this, "selectedRows", selectedRows);
      if (this.rowSelection) {
        const { onChange } = this.rowSelection;
        if (onChange) {
          onChange(selectedRows);
        }
      }
    },
    formatValue(name, value) {
      if (value === void 0 || value === null || value === "") {
        return void 0;
      }
      switch (this.searchTypesMap[name].type) {
        case "date-range":
        case "date-month-range": {
          const rangeExtraPlacement = this.searchTypesMap[name].rangeExtraPlacement || this.__searchDateRangeExtraPlacement;
          const v = value || [];
          const params = {};
          const start = v[0] ? v[0].split(" ")[0] + " 00:00:00" : void 0;
          const end = v[1] ? v[1].split(" ")[0] + " 23:59:59" : void 0;
          if (rangeExtraPlacement === "start") {
            const rangeExtra = this.searchTypesMap[name].rangeExtra || this.__searchDateRangeExtra;
            params[`${rangeExtra[0]}${name}`] = start;
            params[`${rangeExtra[1]}${name}`] = end;
          } else {
            const rangeExtra = this.searchTypesMap[name].rangeExtra || this.__searchDateRangeExtra;
            params[`${name}${rangeExtra[0]}`] = start;
            params[`${name}${rangeExtra[1]}`] = end;
          }
          return params;
        }
        default: {
          return value;
        }
      }
    },
    async _onReset() {
      this.$refs["search-table-search-form"] && this.$refs["search-table-search-form"].resetFields();
      this.searchData = {};
      this.fetchDataSource(
        this.__pagination.defaultCurrent - 1,
        this.__pagination.pageSize,
        {}
      );
      this.watchReset && this.watchReset();
    },
    async reload() {
      this.fetchDataSource(
        this.__pagination.current - 1,
        this.__pagination.pageSize,
        {}
      );
    },
    setSearchFieldsValue(fields) {
      this.$refs["search-table-search-form"].setFieldsValue(fields);
    },
    async getSearchParams() {
      const values = await this.$refs["search-table-search-form"].getFieldsValue();
      const valueNames = Object.keys(values);
      let params = {};
      valueNames.length && valueNames.forEach((name) => {
        const value = this.formatValue(name, values[name]);
        if (this.searchTypesMap[name].type === "date-range" || this.searchTypesMap[name].type === "date-month-range") {
          params = { ...params, ...value };
        } else {
          params[name] = value;
        }
      });
      return params;
    },
    async onSearch() {
      const params = this.search ? await this.getSearchParams() : {};
      this.searchData = params;
      this.fetchDataSource(
        this.__pagination.defaultCurrent - 1,
        this.__pagination.pageSize,
        params
      );
    },
    handleTableChange(current, pageSize) {
      this.fetchDataSource(current - 1, pageSize);
    },
    async fetchDataSource(page, size, data, options) {
      this.ownLoading = true;
      let params = {
        ...await this.data,
        ...this.searchData,
        ...data,
        page,
        size
      };
      params = this.beforeSearchSubmit ? this.beforeSearchSubmit(params) : params;
      if (this.request) {
        let response = await this.request(params);
        response = this.formatResponse ? this.formatResponse(response) : response;
        this.ownLoading = false;
        this.$set(this, "ownDataSource", response.data);
        this._pagination = {
          ...this.__pagination,
          current: page + 1,
          pageSize: size,
          total: response.page ? response.page.totalElements || 0 : 0
        };
      } else {
        let response;
        try {
          response = await this.$CN_V2C_TABLE_CONFIG.request(this.action, {
            method: this.method,
            [this.method.toLocaleUpperCase() === "POST" ? "data" : "params"]: params,
            ...options
          });
          response = this.formatResponse ? this.formatResponse(response) : response;
        } catch (error) {
          response = this.onFetchDataError ? this.onFetchDataError(error) || DEFAULT_RESPONSE_DATA : this.formatResponse ? this.formatResponse(error, "error") || DEFAULT_RESPONSE_DATA : DEFAULT_RESPONSE_DATA;
          page = 0;
        }
        this.ownLoading = false;
        if (response.success) {
          this.$set(this, "ownDataSource", response.data);
          this._pagination = {
            ...this.__pagination,
            current: page + 1,
            pageSize: size,
            total: response.page ? response.page.totalElements || 0 : 0
          };
        } else {
          this.$set(this, "ownDataSource", []);
          this._pagination = {
            ...this.__pagination,
            current: 1,
            pageSize: size,
            total: 0
          };
        }
      }
    },
    deepRenderText(record, keys) {
      if (!record[keys[0]]) {
        return "-";
      }
      if (keys.length === 1) {
        return record[keys[0]];
      }
      return this.deepRenderText(record[keys[0]], keys.slice(1));
    },
    renderText(record, dataIndex, valueEnum) {
      const keys = dataIndex.split(".");
      let current;
      if (keys.length === 1) {
        current = valueEnum ? valueEnum[record[dataIndex]] : record[dataIndex];
      } else {
        current = valueEnum ? valueEnum[this.deepRenderText(record, keys)].text : this.deepRenderText(record, keys);
      }
      if (valueEnum && current) {
        return {
          text: current.text !== void 0 && current.text !== null ? current.text : "-",
          status: current.status
        };
      } else {
        return current !== void 0 && current !== null ? current : "-";
      }
    },
    formatGetStaticValue(key, oldKey) {
      var _a, _b, _c;
      return ((_b = (_a = this.$CN_V2C_TABLE_CONFIG) == null ? void 0 : _a.search) == null ? void 0 : _b[key]) || ((_c = this.search) == null ? void 0 : _c[key]) || this[oldKey || key];
    },
    toggleFullScreen() {
      this.isFullScreen = !this.isFullScreen;
      this.$nextTick(() => {
        if (this.isFullScreen) {
          this.$refs["cn-table--container"].requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      });
    }
  },
  mounted() {
    !this.dataSource && this.onloadAutoRequest && this.onSearch();
    if (this.actionRef && typeof this.actionRef === "function") {
      this.actionRef(this.ownActionRef);
    }
  },
  computed: {
    __pagination() {
      return typeof this.pagination === "object" ? {
        ...this._pagination,
        ...this.pagination
      } : { ...this._pagination };
    },
    __searchDateRangeExtraPlacement() {
      return this.formatGetStaticValue("dateRangeExtraPlacement", "searchDateRangeExtraPlacement");
    },
    __searchDateRangeExtra() {
      return this.formatGetStaticValue("dateRangeExtra", "searchDateRangeExtra");
    },
    __resetText() {
      return this.formatGetStaticValue("resetText");
    },
    __searchText() {
      return this.formatGetStaticValue("searchText");
    },
    __searchType() {
      return this.formatGetStaticValue("type", "searchType");
    },
    __searchColumns() {
      return this.formatGetStaticValue("columns", "searchColumns");
    },
    ownSearchList() {
      return [...this.searchList];
    },
    ownActionRef() {
      return {
        onSearch: this.onSearch,
        onReset: this._onReset,
        getSearchParams: this.getSearchParams,
        setSearchFieldsValue: this.setSearchFieldsValue,
        reload: this.reload,
        getSelectedRows: () => {
          return {
            selectedRows: this.selectedRows
          };
        }
      };
    }
  },
  watch: {
    loading(loading) {
      this.ownLoading = loading;
    },
    actionRef: {
      handler(val) {
        if (typeof val === "function") {
          val(this.ownActionRef);
        }
      }
    },
    columns: {
      handler(val) {
        const searchTypesMap = {};
        let searchList = this.search ? val.filter(
          ({ hideInSearch, dataIndex }) => dataIndex !== "operate" && !hideInSearch
        ).map((item) => {
          const type = item.valueType || (item.valueOptions || item.valueEnum ? "select" : "input");
          const name = item.searchName || item.name || item.dataIndex || item.key;
          let options = void 0;
          if (item.valueEnum) {
            options = Object.keys(item.valueEnum).map((key) => ({
              label: item.valueEnum[key].text,
              value: key
            }));
          }
          if (item.valueOptions) {
            options = item.valueOptions;
          }
          searchTypesMap[name] = {
            type,
            format: item.format,
            rangeExtra: item.rangeExtra,
            rangeExtraPlacement: item.rangeExtraPlacement,
            options
          };
          return {
            ...item,
            name,
            type,
            options,
            title: item.searchTitle || item.title,
            style: item.searchStyle
          };
        }) : [];
        this.$set(this, "searchTypesMap", searchTypesMap);
        this.$set(this, "searchList", searchList);
        this.$set(
          this,
          "tableColumns",
          val.filter(({ hideInTable }) => !hideInTable).map((item) => ({
            ...item,
            scopedSlots: item.scopedSlots || { customRender: item.dataIndex }
          }))
        );
        if (this.$refs["cn-table-container"]) {
          this.$nextTick(() => {
            this.$refs["cn-table-container"].doLayout();
          });
        }
      },
      immediate: true,
      deep: true
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { ref: "cn-table--container", staticClass: "cn-table--container" }, [_vm.search ? _c("div", { class: ["cn-table-search-container", { "cn-table-search-inline-container": _vm.__searchType === "inline" }] }, [_c("cn-form", { ref: "search-table-search-form", attrs: { "data": _vm.ownSearchList, "layout": _vm.__searchType, "columns": _vm.__searchColumns }, scopedSlots: _vm._u([_vm._l(_vm.ownSearchList, function({ name }) {
    return { key: `${name}FormExtra`, fn: function() {
      return [_vm._t(`${name}FormExtra`)];
    }, proxy: true };
  })], null, true) }, [_c("div", { class: [
    "cn-table-search-btn-container",
    { "cn-table-search-btn-block-container": _vm.__searchType === "block" }
  ] }, [_vm._t("operationsBtnPrefix"), _vm.__searchText !== false ? _c("el-button", { staticClass: "cn-table-search-btn-search", attrs: { "size": "small", "type": "primary" }, on: { "click": _vm.onSearch } }, [_vm._v(_vm._s(_vm.__searchText))]) : _vm._e(), _vm.__resetText !== false ? _c("el-button", { staticClass: "cn-table-search-btn-reset", attrs: { "size": "small" }, on: { "click": _vm._onReset } }, [_vm._v(_vm._s(_vm.__resetText))]) : _vm._e(), _vm._t("operationsBtnSuffix")], 2)])], 1) : _vm._e(), _c("div", { staticClass: "cn-table-head-container" }, [_c("div", { staticClass: "cn-table-head-title" }, [_vm._t("headTitle")], 2), _c("div", { staticClass: "cn-table-head-operation" }, [_vm._t("headOperation")], 2), _c("div", { staticClass: "cn-table-head-setting" }, [_c("i", { staticClass: "el-icon-help", attrs: { "title": "\u5168\u5C4F\u5207\u6362" }, on: { "click": _vm.toggleFullScreen } }), _c("i", { staticClass: "el-icon-refresh", attrs: { "title": "\u5237\u65B0" }, on: { "click": _vm.reload } })])]), _c("div", { staticClass: "cn-table-container" }, [_c("el-table", { directives: [{ name: "loading", rawName: "v-loading", value: _vm.ownLoading, expression: "ownLoading" }], key: _vm.__pagination.current, ref: "cn-table-container", class: _vm.tableClassName, attrs: { "data": _vm.dataSource || _vm.ownDataSource, "height": _vm.scroll ? _vm.scroll.y : void 0, "row-key": _vm.rowKey, "select-on-indeterminate": "", "size": "small", "border": true }, on: { "selection-change": _vm.selectionLineChangeHandle } }, [_vm.rowSelection ? _c("el-table-column", { attrs: { "type": "selection", "width": "48" } }) : _vm._e(), Boolean(_vm.showIndex) ? _c("el-table-column", { attrs: { "type": "index", "index": _vm.calcIndex, "class-name": "cn--text-center", "width": "46" } }) : _vm._e(), _vm._l(_vm.tableColumns, function({
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
  }, index2) {
    return _c("cn-column", { key: title + dataIndex + index2, attrs: { "width": width, "minWidth": minWidth, "className": className, "ellipsis": ellipsis, "fixed": fixed, "title": title, "dataIndex": dataIndex, "status": status, "valueEnum": valueEnum, "children": children, "rend": render2, "autoCalcWidth": _vm.autoCalcWidth }, scopedSlots: _vm._u([_vm.showSlot(scopedSlots.customRender || dataIndex) ? { key: dataIndex, fn: function({ text, record }) {
      return [_vm._t(scopedSlots.customRender || dataIndex, null, { "record": record, "text": text })];
    } } : null], null, true) });
  })], 2)], 1), _vm.showPagination && (_vm.dataSource || _vm.ownDataSource).length !== 0 ? _c("div", { staticClass: "cn-table-pagination-container" }, [_c("cn-el-pagination", { attrs: { "current": _vm.__pagination.current, "page-size": _vm.__pagination.pageSize, "pageSizeOptions": _vm.pageSizeOptions, "total": _vm.__pagination.total }, on: { "change": _vm.handleTableChange } })], 1) : _vm._e()]);
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
const CnTable = __component__.exports;
module.exports = CnTable;
