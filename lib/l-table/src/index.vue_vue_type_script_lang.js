"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const vue_runtime_esm = require("../../node_modules/vue/dist/vue.runtime.esm.js");
const dayjs_min = require("../../node_modules/dayjs/dayjs.min.js");
const index = require("../../utils/index.js");
const _sfc_main = vue_runtime_esm.defineComponent({
  name: "LTable",
  props: {
    columns: {
      type: Array,
      required: true,
      default: () => []
    },
    dataSource: {
      type: Array,
      required: false
    },
    emptyText: {
      type: String,
      required: false,
      default: void 0
    },
    empty: {
      type: String,
      required: false,
      default: void 0
    },
    stripe: {
      type: Boolean,
      required: false,
      default: void 0
    },
    emptyInTable: {
      type: Boolean,
      required: false,
      default: true
    },
    disabledPage: {
      type: Boolean,
      required: false,
      default: false
    },
    action: {
      type: String,
      required: false
    },
    border: {
      type: Boolean,
      required: false,
      default: void 0
    },
    selection: {
      type: Boolean,
      required: false,
      default: false
    },
    selectType: {
      type: String,
      required: false,
      default: "checkbox"
    },
    selectable: {
      type: Function,
      required: false
    },
    onSearchClearSelectedRows: {
      type: Boolean,
      required: false,
      default: false
    },
    noPadding: {
      type: Boolean,
      required: false,
      default: void 0
    },
    loading: {
      type: Boolean,
      required: false,
      default: void 0
    },
    hideOnSinglePage: {
      type: Boolean,
      required: false,
      default: void 0
    },
    load: {
      type: Function,
      required: false,
      default: void 0
    },
    treeProps: {
      type: Object,
      required: false,
      default: void 0
    },
    indexText: {
      type: String,
      required: false,
      default: "\u5E8F\u53F7"
    },
    showIndex: {
      type: [Boolean, Function],
      required: false,
      default: false
    },
    request: {
      type: Function,
      required: false,
      default: void 0
    },
    params: {
      type: Object,
      required: false,
      default: void 0
    },
    method: {
      type: String,
      required: false,
      default: void 0
    },
    autoLoadData: {
      type: Boolean,
      required: false,
      default: true
    },
    currentKey: {
      type: String,
      required: false,
      default: void 0
    },
    pageSizeKey: {
      type: String,
      required: false,
      default: void 0
    },
    defaultCurrentValue: {
      type: Number,
      required: false,
      default: void 0
    },
    defaultPageSizeValue: {
      type: Number,
      required: false,
      default: void 0
    },
    tableStyle: {
      type: String,
      required: false,
      default: void 0
    },
    layout: {
      type: String,
      required: false,
      default: void 0
    },
    rowKey: {
      type: String,
      required: false,
      default: void 0
    },
    formatResponse: {
      type: Function,
      required: false,
      default: void 0
    }
  },
  emits: ["select", "change"],
  computed: {
    _emptyText() {
      return this.commonCalcKeyVal("emptyText", "-");
    },
    _rowKey() {
      return this.commonCalcKeyVal("rowKey", "id");
    },
    _empty() {
      return this.commonCalcKeyVal("empty", "- \u6682\u65E0\u6570\u636E -");
    },
    _method() {
      return this.commonCalcKeyVal("method", "GET");
    },
    _stripe() {
      return this.commonCalcKeyVal("stripe", false);
    },
    _border() {
      return this.commonCalcKeyVal("border", true);
    },
    _noPadding() {
      return this.commonCalcKeyVal("noPadding", false);
    },
    _currentKey() {
      return this.commonCalcKeyVal("currentKey", "current");
    },
    _defaultCurrentValue() {
      return this.commonCalcKeyVal("defaultCurrentValue", 1);
    },
    _defaultPageSizeValue() {
      return this.commonCalcKeyVal("defaultPageSizeValue", 20);
    },
    _pageSizeKey() {
      return this.commonCalcKeyVal("pageSizeKey", "pageSize");
    },
    _hideOnSinglePage() {
      return this.commonCalcKeyVal("hideOnSinglePage", false);
    },
    DEFAULT_PAGINATION() {
      return {
        [this._currentKey]: this._defaultCurrentValue,
        [this._pageSizeKey]: this._defaultPageSizeValue
      };
    },
    pageLoading() {
      console.log("loading", this.loading, "_loading", this._loading);
      return this.loading !== void 0 ? this.loading : this._loading;
    },
    isTableEmpty() {
      var _a;
      return !((_a = this.dataSource || this.ownDataSource) == null ? void 0 : _a.length);
    },
    attrs() {
      return this.$attrs;
    },
    finallyLayout() {
      return this.commonCalcKeyVal("layout", "total, prev, pager, next, jumper, sizes");
    },
    tableFetch() {
      return this.$CN_V2C_LTABLE_CONFIG.request || fetch;
    },
    _formatResponse() {
      return this.formatResponse || this.$CN_V2C_LTABLE_CONFIG.formatResponse;
    }
  },
  data() {
    return {
      dParams: {
        total: 0
      },
      ownDataSource: [],
      _loading: true,
      selectedRows: []
    };
  },
  methods: {
    commonCalcKeyVal(key, defaultValue) {
      return this[key] !== void 0 ? this[key] : this.$CN_V2C_LTABLE_CONFIG[key] !== void 0 ? this.$CN_V2C_LTABLE_CONFIG[key] : defaultValue;
    },
    calcIndex(index2) {
      if (typeof this.showIndex === "function") {
        return this.showIndex({
          index: index2,
          current: this.dParams[this._currentKey],
          pageSize: this.dParams[this._pageSizeKey],
          text: (this.dParams[this._currentKey] - 1) * this.dParams[this._pageSizeKey] + (index2 + 1)
        });
      }
      return (this.dParams[this._currentKey] - 1) * this.dParams[this._pageSizeKey] + (index2 + 1);
    },
    doLayout() {
      this.$nextTick(() => {
        var _a;
        (_a = this.$refs["tableRef"]) == null ? void 0 : _a.doLayout();
      });
    },
    selectableFun(record, index2) {
      var _a, _b;
      return (_b = (_a = this.selectable) == null ? void 0 : _a.call(this, record, index2)) != null ? _b : true;
    },
    onSelect(_, row) {
      var _a;
      if (this.selectType === "radio") {
        (_a = this.$refs["tableRef"]) == null ? void 0 : _a.clearSelection();
        this.$nextTick(() => {
          var _a2;
          (_a2 = this.$refs["tableRef"]) == null ? void 0 : _a2.toggleRowSelection(row, true);
        });
      }
    },
    onSelectionChange(selection) {
      this.$nextTick(() => {
        this.selectedRows = selection;
        if (this.selectType === "radio") {
          this.$emit(
            "select",
            (selection == null ? void 0 : selection.length) > 1 ? selection[selection.length - 1] : selection[0]
          );
        } else {
          this.$emit("select", selection);
        }
      });
    },
    fetchData(params) {
      return __async(this, null, function* () {
        var _a, _b, _c;
        if (this.onSearchClearSelectedRows) {
          (_a = this.$refs["tableRef"]) == null ? void 0 : _a.clearSelection();
        }
        let response;
        this._loading = true;
        if (this.action) {
          response = yield this.tableFetch(this.action, {
            [this._method === "GET" ? "params" : "data"]: __spreadValues(__spreadValues({}, params), this.params),
            method: this.method
          }).catch((err) => {
            console.log(err);
            this._loading = false;
          });
        } else if (this.request) {
          response = yield this.request(__spreadValues(__spreadValues({}, params), this.params)).catch((eeee) => {
            console.log(eeee);
            this._loading = false;
          });
        }
        this._loading = false;
        if (response == null ? void 0 : response.success) {
          response = this._formatResponse ? this._formatResponse(response, "resolve") : response;
          this.$set(this, "ownDataSource", ((_b = response.meta) == null ? void 0 : _b.data) || []);
          this.dParams.total = response.total;
        } else {
          response = this._formatResponse ? this._formatResponse(response, "reject") : false;
          if (response) {
            this.$set(this, "ownDataSource", ((_c = response.meta) == null ? void 0 : _c.data) || []);
            this.dParams.total = response.total;
          } else {
            this.$set(this, "ownDataSource", []);
            this.dParams.total = 0;
          }
        }
        this.$nextTick(() => {
          this.doLayout();
        });
      });
    },
    search() {
      const _a = this.dParams, { total } = _a, params = __objRest(_a, ["total"]);
      this.fetchData(params);
    },
    handleCurrentChange(current) {
      this.dParams[this._currentKey] = current;
      this.search();
    },
    handlePageSizeChange(pageSize) {
      this.dParams[this._pageSizeKey] = pageSize;
      this.search();
    },
    formatValue(record, dataIndex, valueType, render) {
      if (index.isEmpty(record[dataIndex])) {
        return render ? render(record[dataIndex], record) : this._emptyText;
      }
      switch (valueType) {
        case "date": {
          return dayjs_min(Number(record[dataIndex])).format("YYYY-MM-DD");
        }
        case "date-time": {
          return dayjs_min(Number(record[dataIndex])).format("YYYY-MM-DD HH:mm:ss");
        }
        default: {
          return render ? render(record[dataIndex], record) : record[dataIndex];
        }
      }
    },
    reload() {
      this.search();
    },
    reset() {
      this.handleCurrentChange(1);
    },
    jumpPage(page) {
      this.handleCurrentChange(page);
    },
    clearSelectRows() {
      var _a;
      (_a = this.$refs["tableRef"]) == null ? void 0 : _a.clearSelection();
    },
    getParams() {
      return __spreadValues(__spreadValues({}, this.dParams), this.params);
    },
    getSelectedRows() {
      return [...this.selectedRows];
    },
    toggleRowSelection(row) {
      var _a;
      (_a = this.$refs["tableRef"]) == null ? void 0 : _a.toggleRowSelection(row, true);
    },
    getDataSource() {
      return this.ownDataSource;
    },
    onParamsActionChange() {
      this.dParams = __spreadValues(__spreadValues({}, this.dParams), this.DEFAULT_PAGINATION);
      this.fetchData(this.DEFAULT_PAGINATION);
    }
  },
  expose: ["clearSelectRows", "jumpPage", "reload", "reset", "getParams", "getSelectedRows", "doLayout", "toggleRowSelection", "getDataSource"],
  watch: {
    params: {
      handler() {
        this.onParamsActionChange();
      },
      deep: true
    },
    action: {
      handler() {
        this.onParamsActionChange();
      },
      deep: true
    }
  },
  mounted() {
    if (this.autoLoadData && !this.dataSource) {
      this.onParamsActionChange();
    }
    if (this.dataSource) {
      this._loading = false;
    }
    window.addEventListener("resize", this.doLayout);
  },
  destroyed() {
    window.removeEventListener("resize", this.doLayout);
  }
});
module.exports = _sfc_main;
