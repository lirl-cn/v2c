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
import { defineComponent } from "vue";
import { Message } from "element-ui";
const mapToOptions = (valueEnum) => {
  if (!valueEnum)
    return void 0;
  return Object.keys(valueEnum).map((value) => {
    var _a;
    return {
      value,
      label: (_a = valueEnum[value]) == null ? void 0 : _a.text
    };
  });
};
const _sfc_main = defineComponent({
  name: "LTablePlus",
  props: {
    columns: {
      type: Array,
      required: true,
      default: () => []
    },
    action: {
      type: String,
      required: false,
      default: void 0
    },
    request: {
      type: Function,
      required: false,
      default: void 0
    },
    method: {
      type: String,
      required: false,
      default: void 0
    },
    params: {
      type: Object,
      required: false,
      default: void 0
    },
    stripe: {
      type: Boolean,
      required: false,
      default: void 0
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
      default: true
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
    hideOnSinglePage: {
      type: Boolean,
      required: false,
      default: void 0
    },
    formatResponse: {
      type: Function,
      required: false,
      default: void 0
    },
    createText: {
      type: [String, Boolean],
      required: false,
      default: false
    },
    hideSearch: {
      type: Boolean,
      required: false,
      default: false
    },
    searchLayout: {
      type: String,
      required: false,
      default: "inline"
    },
    searchBtnSize: {
      type: String,
      required: false,
      default: "small"
    },
    searchGrid: {
      type: Number,
      required: false,
      default: 4
    },
    searchFormat: {
      type: Function,
      required: false,
      default: void 0
    },
    searchDateRangeSuffix: {
      type: Array,
      required: false,
      default: () => ["StartTime", "EndTime"]
    },
    formWidth: {
      type: String,
      required: false,
      default: "600px"
    },
    title: {
      type: String,
      required: false,
      default: void 0
    },
    createFun: {
      type: Function,
      required: false,
      default: void 0
    },
    updateFun: {
      type: Function,
      required: false,
      default: void 0
    }
  },
  emits: ["select"],
  computed: {
    showHeader() {
      return Boolean(!this.hideSearch || this.createText || this.$slots.searchOperate);
    },
    tableParams() {
      return __spreadValues(__spreadValues({}, this.ownParams), this.params);
    },
    tableColumns() {
      var _a;
      return (_a = this.columns) == null ? void 0 : _a.filter((item) => !item.hideInTable).map((item) => __spreadProps(__spreadValues({}, item), {
        render: item.render ? item.render : item.valueEnum ? (text) => {
          var _a2;
          return ((_a2 = item.valueEnum[text]) == null ? void 0 : _a2.text) || "-";
        } : void 0
      }));
    },
    searchColumns() {
      return this.columns.filter((item) => item.dataIndex !== "operate" && item.hideInSearch !== true).map((item) => {
        const options = item.searchOptions || item.options || mapToOptions(item.valueEnum);
        return __spreadProps(__spreadValues({}, item), {
          title: item.searchTitle || item.title,
          name: item.searchName || item.dataIndex,
          type: options ? "select" : item.searchType || item.formType,
          options
        });
      });
    },
    formColumns() {
      return this.columns.filter((item) => item.dataIndex !== "operate" && item.hideInForm !== true).map((item) => {
        var _a;
        const options = item.formOptions || item.options || mapToOptions(item.valueEnum);
        return __spreadProps(__spreadValues({}, item), {
          title: item.formTitle || item.title,
          name: item.formName || item.dataIndex,
          type: options ? "select" : item.formType,
          options,
          initialValue: (_a = this.detail) == null ? void 0 : _a[item.dataIndex],
          rules: item.formRules
        });
      });
    },
    searchDateRange() {
      return this.searchColumns.reduce((pre, cur) => {
        if (cur.type === "daterange" || cur.type === "date-range") {
          pre.add(cur.name);
        }
        return pre;
      }, /* @__PURE__ */ new Set());
    }
  },
  data() {
    return {
      searchRef: void 0,
      tableRef: void 0,
      formRef: void 0,
      ownParams: {},
      addVisible: false,
      detail: void 0
    };
  },
  methods: {
    search() {
      return __async(this, null, function* () {
        var _a, _b;
        const values = yield this.searchRef.getFieldsValue();
        for (let key in values) {
          if (this.searchDateRange.has(key) && values[key]) {
            values[key + this.searchDateRangeSuffix[0]] = values[key][0];
            values[key + this.searchDateRangeSuffix[1]] = values[key][1] ? `${(_b = (_a = values[key][1]) == null ? void 0 : _a.split(" ")) == null ? void 0 : _b[0]} 23:59:59` : void 0;
            delete values[key];
          }
        }
        this.ownParams = this.searchFormat ? this.searchFormat(values) : values;
      });
    },
    reset() {
      return __async(this, null, function* () {
        yield this.searchRef.resetFields();
        this.ownParams = {};
      });
    },
    edit(record) {
      this.detail = record;
      this.addVisible = true;
    },
    onSubmit() {
      return __async(this, null, function* () {
        var _a, _b;
        const values = yield this.formRef.validateFields();
        const response = yield this.detail ? (_a = this.updateFun) == null ? void 0 : _a.call(this, __spreadValues(__spreadValues({}, this.detail || {}), values)) : (_b = this.createFun) == null ? void 0 : _b.call(this, values);
        if (response == null ? void 0 : response.success) {
          this.addVisible = false;
          this.reload();
        } else {
          Message.error(response == null ? void 0 : response.msg);
        }
      });
    },
    closeAddModal() {
      this.addVisible = false;
      this.detail = void 0;
    },
    onTableSelect(value) {
      this.$emit("select", value);
    },
    reload() {
      var _a;
      (_a = this.$refs["tableRef"]) == null ? void 0 : _a.reload();
    },
    doLayout() {
      var _a;
      (_a = this.$refs["tableRef"]) == null ? void 0 : _a.doLayout();
    },
    clearSelectRows() {
      var _a;
      (_a = this.$refs["tableRef"]) == null ? void 0 : _a.clearSelectRows();
    },
    getSelectedRows() {
      var _a;
      return (_a = this.$refs["tableRef"]) == null ? void 0 : _a.getSelectedRows();
    },
    getParams() {
      var _a;
      return (_a = this.$refs["tableRef"]) == null ? void 0 : _a.getParams();
    },
    getDataSource() {
      var _a;
      return (_a = this.$refs["tableRef"]) == null ? void 0 : _a.getDataSource();
    },
    toggleRowSelection(row) {
      var _a;
      (_a = this.$refs["tableRef"]) == null ? void 0 : _a.toggleRowSelection(row);
    }
  },
  expose: ["reload", "doLayout", "clearSelectRows", "getSelectedRows", "getParams", "getDataSource", "toggleRowSelection"]
});
export {
  _sfc_main as default
};
