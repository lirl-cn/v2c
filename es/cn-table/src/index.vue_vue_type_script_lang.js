var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
import "../../cn-form/index.js";
import "../../cn-pagination/index.js";
import CnColumn from "./column.js";
import CnPagination from "../../cn-pagination/src/index.js";
import CnForm from "../../cn-form/src/index.js";
const DEFAULT_RESPONSE_DATA = {
  success: true,
  data: [],
  total: 0
};
const HIDDEN_CLASS_NAME = "cn-form-item-hidden";
const _sfc_main = {
  name: "cn-table",
  components: {
    CnElPagination: CnPagination,
    CnForm,
    CnColumn
  },
  props: {
    tableClassName: String,
    setting: {
      type: [Array, Boolean],
      default: () => ["reload", "fullScreen"]
    },
    othersTextEnum: {
      type: [Object, void 0],
      default: () => ({
        "setting-reload": "\u5237\u65B0",
        "setting-fullScreen": "\u5168\u5C4F\u5207\u6362",
        "table-index": "\u5E8F\u53F7"
      })
    },
    resetText: {
      type: [String, Boolean],
      default: "\u91CD\u7F6E"
    },
    searchText: {
      type: [String, Boolean],
      default: "\u67E5\u8BE2"
    },
    openText: {
      type: [String],
      default: "\u5C55\u5F00"
    },
    closeText: {
      type: [String],
      default: "\u6536\u8D77"
    },
    title: {
      type: [String, Boolean],
      default: ""
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
      type: [Object, Boolean]
    },
    action: String,
    onloadAutoRequest: {
      type: Boolean,
      default: true
    },
    showIndex: {
      type: [Boolean, Function],
      default: void 0
    },
    request: Function,
    method: {
      type: String,
      default: void 0
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
      default: true
    },
    searchDateRangeExtra: {
      type: Array,
      default: () => ["StartTime", "EndTime"]
    },
    searchDateRangeExtraPlacement: {
      type: String,
      default: "end"
    },
    data: {
      type: [Object, Promise],
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
    catchFetchDataError: {
      type: Function,
      default: void 0
    },
    watchReset: {
      type: Function,
      default: void 0
    },
    loading: Boolean,
    rowSelection: {
      type: Object,
      default: void 0
    },
    emptyText: {
      type: String,
      default: "-"
    },
    autoCalcWidth: {
      type: [Boolean, Number],
      default: false
    }
  },
  data() {
    return {
      searchList: [],
      tableColumns: [],
      ownPagination: {
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
      _cacheSearchValues: {},
      selectedRows: [],
      isFullScreen: false,
      isSearchOpen: true,
      isSetDefaultSelectedRowed: false,
      autoCalcSearchSpans: [
        [513, 1],
        [785, 2],
        [1230, 3],
        [1880, 4],
        [Infinity, 5]
      ],
      autoSearchColumns: 3,
      allSearchSpans: 0,
      isInit: false
    };
  },
  methods: {
    clearSelection() {
      this.$refs["cn-table-container"].clearSelection();
      this.$set(this, "selectedRows", []);
    },
    toggleSelection(rows) {
      if (rows && rows.length) {
        rows.forEach((row) => {
          this.$refs["cn-table-container"].toggleRowSelection(
            row,
            true
          );
        });
        this.selectedRows = rows;
      }
    },
    setDefaultSelectedRow() {
      var _a, _b, _c, _d;
      if (this.isSetDefaultSelectedRowed || !((_a = this.rowSelection) == null ? void 0 : _a.defaultSelectedRows)) {
        const rows = (_b = this.selectedRows) == null ? void 0 : _b.map((item) => {
          var _a2;
          const i = (_a2 = this.ownDataSource) == null ? void 0 : _a2.filter(
            (it) => it[this.rowKey || "id"] === item[this.rowKey || "id"]
          );
          if (i.length) {
            return i[0];
          } else {
            return item;
          }
        });
        this.toggleSelection(rows);
      } else {
        if (!((_c = this.rowSelection) == null ? void 0 : _c.defaultSelectedRows))
          return;
        const rows = (_d = this.ownDataSource) == null ? void 0 : _d.filter(
          (item) => {
            var _a2, _b2;
            return ((_b2 = (_a2 = this.rowSelection) == null ? void 0 : _a2.defaultSelectedRows) == null ? void 0 : _b2.indexOf(
              item[this.rowKey || "id"]
            )) !== -1;
          }
        );
        this.toggleSelection(rows);
        this.isSetDefaultSelectedRowed = true;
      }
    },
    calcIndex(index) {
      if (typeof this.showIndex === "function") {
        return this.showIndex({
          index,
          current: this.__pagination.current,
          pageSize: this.__pagination.pageSize,
          text: (this.__pagination.current - 1) * this.__pagination.pageSize + (index + 1)
        });
      }
      return (this.__pagination.current - 1) * this.__pagination.pageSize + (index + 1);
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
        case "date-range": {
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
    _onReset() {
      return __async(this, null, function* () {
        this.$refs["search-table-search-form"] && (yield this.$refs["search-table-search-form"].resetFields());
        this.searchData = {};
        this._cacheSearchValues = {};
        yield this.clearSelection();
        if (typeof this.search === "object" && this.search.beforeReset) {
          yield this.search.beforeReset();
        }
        this.onSearch();
        this.watchReset && this.watchReset();
      });
    },
    reload() {
      return __async(this, null, function* () {
        this.fetchDataSource(
          this.__pagination.current,
          this.__pagination.pageSize,
          {}
        );
      });
    },
    preData() {
      return __async(this, null, function* () {
        this.jump(
          this.__pagination.current > 1 ? this.__pagination.current - 1 : 1
        );
      });
    },
    jump(current) {
      return __async(this, null, function* () {
        this.fetchDataSource(current, this.__pagination.pageSize, {});
      });
    },
    setSearchFieldsValue(fields) {
      this.$refs["search-table-search-form"].setFieldsValue(fields);
    },
    getSearchParams() {
      return __async(this, null, function* () {
        let values = yield this.$refs["search-table-search-form"].getFieldsValue();
        if (!this.isSearchOpen) {
          const showItems = this.searchList.filter(
            (item) => {
              var _a, _b, _c;
              return !((_a = item.formItemProps) == null ? void 0 : _a.class) || ((_c = (_b = item.formItemProps) == null ? void 0 : _b.class) == null ? void 0 : _c.indexOf(HIDDEN_CLASS_NAME)) === -1;
            }
          ).map((item) => item.name);
          values = __spreadValues(__spreadValues({}, this._cacheSearchValues), showItems.reduce((pre, cur) => {
            pre[cur] = values[cur];
            return pre;
          }, {}));
        }
        const valueNames = Object.keys(values);
        let params = {};
        valueNames.length && valueNames.forEach((name) => {
          var _a, _b;
          const value = this.formatValue(name, values[name]);
          if (((_a = this.searchTypesMap[name]) == null ? void 0 : _a.type) === "date-range" || ((_b = this.searchTypesMap[name]) == null ? void 0 : _b.type) === "date-month-range") {
            params = __spreadValues(__spreadValues({}, params), value);
          } else {
            params[name] = value;
          }
        });
        return params;
      });
    },
    onSearch() {
      return __async(this, null, function* () {
        const params = this.search ? yield this.getSearchParams() : {};
        this.searchData = params;
        this.clearSelection();
        this.fetchDataSource(
          this.__pagination.defaultCurrent,
          this.__pagination.pageSize,
          params
        );
      });
    },
    handleTableChange(current, pageSize) {
      this.fetchDataSource(current, pageSize);
    },
    fetchDataSource(current, pageSize, data, options) {
      return __async(this, null, function* () {
        var _a;
        this.ownLoading = true;
        let params = __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, yield this.data), this.searchData), data), {
          [this.$CN_V2C_TABLE_CONFIG.current.key]: this.$CN_V2C_TABLE_CONFIG.current.format ? this.$CN_V2C_TABLE_CONFIG.current.format(current) : current,
          [this.$CN_V2C_TABLE_CONFIG.pageSize.key]: this.$CN_V2C_TABLE_CONFIG.pageSize.format ? this.$CN_V2C_TABLE_CONFIG.pageSize.format(pageSize) : pageSize
        });
        params = this.beforeSearchSubmit ? this.beforeSearchSubmit(params) : params;
        if (this.request) {
          let response = yield this.request(params);
          response = this.formatResponse ? this.formatResponse(response) : response;
          this.ownLoading = false;
          this.$set(this, "ownDataSource", response.data);
          this.ownPagination = __spreadProps(__spreadValues({}, this.__pagination), {
            current,
            pageSize,
            total: response.total || 0
          });
          this.$nextTick(() => {
            this.setDefaultSelectedRow();
          });
        } else {
          let response;
          try {
            response = yield this.$CN_V2C_TABLE_CONFIG.request(
              this.action || "/",
              __spreadValues({
                method: this.__method,
                [this.__method.toLocaleUpperCase() === "POST" ? "data" : "params"]: params
              }, options)
            );
            response = this.formatResponse ? yield this.formatResponse(response) : response;
          } catch (error) {
            (_a = this.catchFetchDataError) == null ? void 0 : _a.call(this, error);
            response = DEFAULT_RESPONSE_DATA;
            current = 1;
          }
          this.ownLoading = false;
          if (response.success !== false) {
            this.$set(this, "ownDataSource", response.data);
            this.ownPagination = __spreadProps(__spreadValues({}, this.__pagination), {
              current,
              pageSize,
              total: response.total || 0
            });
            this.$nextTick(() => {
              this.setDefaultSelectedRow();
            });
          } else {
            this.$set(this, "ownDataSource", []);
            this.ownPagination = __spreadProps(__spreadValues({}, this.__pagination), {
              current: 1,
              pageSize,
              total: 0
            });
          }
        }
      });
    },
    deepRenderText(record, keys) {
      if (!record[keys[0]]) {
        return this.emptyText;
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
          text: current.text !== void 0 && current.text !== null ? current.text : this.emptyText,
          status: current.status
        };
      } else {
        return current !== void 0 && current !== null ? current : this.emptyText;
      }
    },
    toggleSearchPanel(reload = false) {
      return __async(this, null, function* () {
        const values = yield this.$refs["search-table-search-form"].getFieldsValue();
        if (!reload && this.isSearchOpen || reload && !this.isSearchOpen) {
          this._cacheSearchValues = values;
          let spans = 0;
          this.searchList = this.searchList.map((item) => {
            var _a, _b, _c;
            spans += item.span || 1;
            if (spans < this.___searchColumns) {
              return __spreadProps(__spreadValues({}, item), {
                formItemProps: __spreadProps(__spreadValues({}, item.formItemProps), {
                  class: (_b = (_a = item.formItemProps) == null ? void 0 : _a.class) == null ? void 0 : _b.replaceAll(HIDDEN_CLASS_NAME, "").trim()
                })
              });
            } else {
              return __spreadProps(__spreadValues({}, item), {
                formItemProps: __spreadProps(__spreadValues({}, item.formItemProps), {
                  class: ((_c = item.formItemProps) == null ? void 0 : _c.class) ? `${item.formItemProps.class} ${HIDDEN_CLASS_NAME}` : HIDDEN_CLASS_NAME
                })
              });
            }
          });
          if (!reload) {
            this.isSearchOpen = !this.isSearchOpen;
          }
          this.$nextTick(() => {
            const showItems = this.searchList.filter(
              (item) => {
                var _a, _b, _c;
                return !((_a = item.formItemProps) == null ? void 0 : _a.class) || ((_c = (_b = item.formItemProps) == null ? void 0 : _b.class) == null ? void 0 : _c.indexOf(HIDDEN_CLASS_NAME)) === -1;
              }
            ).map((item) => item.name);
            this.$refs["search-table-search-form"].setFieldsValue(__spreadValues({}, showItems.reduce((pre, cur) => {
              pre[cur] = values[cur];
              return pre;
            }, {})));
          });
        } else {
          const showItems = this.searchList.filter(
            (item) => {
              var _a, _b, _c;
              return !((_a = item.formItemProps) == null ? void 0 : _a.class) || ((_c = (_b = item.formItemProps) == null ? void 0 : _b.class) == null ? void 0 : _c.indexOf(HIDDEN_CLASS_NAME)) === -1;
            }
          ).map((item) => item.name);
          this.searchList = this.searchList.map((item) => {
            var _a, _b;
            return __spreadProps(__spreadValues({}, item), {
              formItemProps: __spreadProps(__spreadValues({}, item.formItemProps), {
                class: (_b = (_a = item.formItemProps) == null ? void 0 : _a.class) == null ? void 0 : _b.replaceAll(HIDDEN_CLASS_NAME, "").trim()
              })
            });
          });
          if (!reload) {
            this.isSearchOpen = !this.isSearchOpen;
          }
          this.$nextTick(() => {
            this.$refs["search-table-search-form"].setFieldsValue(__spreadValues(__spreadValues({}, this._cacheSearchValues), showItems.reduce((pre, cur) => {
              pre[cur] = values[cur];
              return pre;
            }, {})));
          });
        }
      });
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
    },
    formatGetStaticValue(key, oldKey) {
      var _a, _b, _c, _d, _e;
      return (_e = (_d = (_b = (_a = this.$CN_V2C_TABLE_CONFIG) == null ? void 0 : _a.search) == null ? void 0 : _b[key]) != null ? _d : this.search === false ? false : (_c = this.search) == null ? void 0 : _c[key]) != null ? _e : this[oldKey || key];
    },
    resize() {
      var _a;
      const clientWidth = ((_a = this.$refs["cn-table--container"]) == null ? void 0 : _a.getBoundingClientRect().width) || window.innerWidth || document.body.clientWidth;
      for (let i = 0; i < this.autoCalcSearchSpans.length; i++) {
        const [width, span] = this.autoCalcSearchSpans[i];
        if (clientWidth <= width) {
          this.autoSearchColumns = span;
          return;
        }
      }
    },
    onMountedFetchData() {
      const timer = setTimeout(() => {
        if (this.isInit) {
          !this.dataSource && this.onloadAutoRequest && this.onSearch();
          clearTimeout(timer);
        } else {
          clearTimeout(timer);
          this.onMountedFetchData();
        }
      }, 500);
    }
  },
  mounted() {
    this.onMountedFetchData();
    if (this.actionRef && typeof this.actionRef === "function") {
      this.actionRef(this.ownActionRef);
    }
    if (this.__searchType === "grid" && this._autoCalcSearchColumns) {
      window.addEventListener("resize", this.resize);
      this.resize();
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },
  computed: {
    _autoCalcSearchColumns() {
      var _a;
      return typeof this.search === "object" && ((_a = this.search) == null ? void 0 : _a.autoCalcColumns) !== false || this.search !== false;
    },
    __method() {
      return this.method || this.$CN_V2C_TABLE_CONFIG.method;
    },
    __setting() {
      var _a, _b;
      return (_b = (_a = this.$CN_V2C_TABLE_CONFIG) == null ? void 0 : _a.setting) != null ? _b : this.setting;
    },
    __pagination() {
      return typeof this.pagination === "object" ? __spreadValues(__spreadProps(__spreadValues({}, this.ownPagination), {
        pageSizeOptions: this.pageSizeOptions
      }), this.pagination) : __spreadProps(__spreadValues({}, this.ownPagination), { pageSizeOptions: this.pageSizeOptions });
    },
    __searchDateRangeExtraPlacement() {
      return this.formatGetStaticValue(
        "dateRangeExtraPlacement",
        "searchDateRangeExtraPlacement"
      );
    },
    __searchDateRangeExtra() {
      return this.formatGetStaticValue(
        "dateRangeExtra",
        "searchDateRangeExtra"
      );
    },
    __resetText() {
      return this.formatGetStaticValue("resetText");
    },
    __searchText() {
      return this.formatGetStaticValue("searchText");
    },
    __openText() {
      return this.formatGetStaticValue("openText");
    },
    __closeText() {
      return this.formatGetStaticValue("closeText");
    },
    __searchType() {
      return this.formatGetStaticValue("type", "searchType");
    },
    __searchLabelWidth() {
      return this.formatGetStaticValue("labelWidth");
    },
    __searchColumns() {
      return this.formatGetStaticValue("columns", "searchColumns");
    },
    ___searchColumns() {
      return this._autoCalcSearchColumns ? this.autoSearchColumns : this.__searchColumns;
    },
    __searchBtnContainerSpan() {
      const i = this.allSearchSpans % this.___searchColumns;
      return this.___searchColumns - i;
    },
    ownSearchList() {
      return [...this.searchList];
    },
    ownActionRef() {
      return {
        reload: this.reload,
        search: this.onSearch,
        reset: this._onReset,
        onSearch: this.onSearch,
        onReset: this._onReset,
        getSearchParams: () => __async(this, null, function* () {
          return __spreadProps(__spreadValues({}, yield this.getSearchParams()), {
            [this.$CN_V2C_TABLE_CONFIG.current.key]: this.$CN_V2C_TABLE_CONFIG.current.format ? this.$CN_V2C_TABLE_CONFIG.current.format(
              this.ownPagination.current
            ) : this.ownPagination.current,
            [this.$CN_V2C_TABLE_CONFIG.pageSize.key]: this.$CN_V2C_TABLE_CONFIG.pageSize.format ? this.$CN_V2C_TABLE_CONFIG.pageSize.format(
              this.ownPagination.pageSize
            ) : this.ownPagination.pageSize
          });
        }),
        setSearchFieldsValue: this.setSearchFieldsValue,
        onReload: this.reload,
        getSelectedRows: () => {
          return {
            selectedRows: this.selectedRows
          };
        },
        resetSelectedRows: () => {
          this.clearSelection();
        },
        setSelectedRows: this.toggleSelection
      };
    }
  },
  watch: {
    autoSearchColumns: {
      handler() {
        this.$nextTick(() => {
          this.toggleSearchPanel(true);
        });
      }
    },
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
        return __async(this, null, function* () {
          const searchTypesMap = {};
          let allSearchSpans = 0;
          let searchList = this.search ? yield Promise.all(
            val.filter(
              ({ hideInSearch, dataIndex }) => dataIndex !== "operate" && !hideInSearch
            ).map((item) => __async(this, null, function* () {
              var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
              const type = item.valueType || (item.valueOptions || item.fetchOptions || item.valueEnum ? "select" : "input");
              const name = item.searchName || item.name || item.dataIndex || item.key;
              let options = [];
              if (item.fetchOptions && typeof item.fetchOptions === "function") {
                let responseOpt;
                try {
                  responseOpt = yield (_a = item.fetchOptions) == null ? void 0 : _a.call(item);
                } catch (error) {
                  console.error(
                    item.dataIndex,
                    "\u5728fetchOptions\u65F6\u53D1\u751F\u9519\u8BEF",
                    error
                  );
                }
                if (Array.isArray(responseOpt)) {
                  item.valueOptions = responseOpt;
                } else if (typeof responseOpt === "object") {
                  item.valueEnum = responseOpt;
                }
              }
              if (item.valueEnum) {
                options = Object.keys(item.valueEnum).map((key) => {
                  var _a2;
                  return {
                    label: (_a2 = item.valueEnum) == null ? void 0 : _a2[key].text,
                    value: key
                  };
                });
              }
              if (item.valueOptions) {
                options = item.valueOptions;
              }
              searchTypesMap[name] = {
                type,
                rangeExtra: item.rangeExtra,
                rangeExtraPlacement: item.rangeExtraPlacement,
                options
              };
              let span = item.span;
              if ((_b = item.formItemProps) == null ? void 0 : _b.style) {
                if (typeof ((_c = item.formItemProps) == null ? void 0 : _c.style) === "string" && ((_d = item.formItemProps) == null ? void 0 : _d.style.indexOf("grid-column")) !== -1) {
                  let gridColumnSpan = (_e = item.formItemProps) == null ? void 0 : _e.style.split("grid-column:")[1].split("span ")[1];
                  if (gridColumnSpan.indexOf(";") !== -1) {
                    gridColumnSpan = gridColumnSpan.split(";")[0];
                  }
                  span = Number(gridColumnSpan);
                } else {
                  if (Object.prototype.toString.call(
                    (_f = item.formItemProps) == null ? void 0 : _f.style
                  ) === "[object Object]" && (((_g = item.formItemProps) == null ? void 0 : _g.style["grid-column"]) || ((_h = item.formItemProps) == null ? void 0 : _h.style["gridColumn"]))) {
                    let gridColumnSpan = (_k = (((_i = item.formItemProps) == null ? void 0 : _i.style["grid-column"]) || ((_j = item.formItemProps) == null ? void 0 : _j.style["gridColumn"])).split(" ")) == null ? void 0 : _k[1];
                    span = Number(gridColumnSpan);
                  }
                }
              }
              const style = item.span ? typeof ((_l = item.formItemProps) == null ? void 0 : _l.style) === "string" ? `${item.formItemProps}; grid-column: span ${span};` : __spreadProps(__spreadValues({}, (_m = item.formItemProps) == null ? void 0 : _m.style), {
                "grid-column": `span ${span}`
              }) : void 0;
              allSearchSpans += span || 1;
              return __spreadProps(__spreadValues({}, item), {
                name,
                type,
                options,
                formItemProps: __spreadProps(__spreadValues({}, item.formItemProps), {
                  style
                }),
                span,
                title: item.searchTitle || item.title,
                style: item.searchStyle
              });
            }))
          ) : [];
          this.allSearchSpans = allSearchSpans;
          this.$set(this, "searchTypesMap", searchTypesMap);
          this.$set(this, "searchList", searchList);
          this.$set(
            this,
            "tableColumns",
            val.filter(({ hideInTable }) => !hideInTable).map((item) => __spreadProps(__spreadValues({}, item), {
              scopedSlots: item.scopedSlots || { customRender: item.dataIndex }
            }))
          );
          if (this.$refs["cn-table-container"]) {
            this.$nextTick(() => {
              this.isInit = true;
              this.$refs["cn-table-container"].doLayout();
            });
          }
        });
      },
      immediate: true,
      deep: true
    }
  }
};
export {
  _sfc_main as default
};
