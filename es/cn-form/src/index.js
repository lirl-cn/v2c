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
import normalizeComponent from "../../_virtual/_plugin-vue2_normalizer.js";
const _sfc_main = {
  name: "cn-form",
  components: {
    FormItem: () => import("./form-item.js")
  },
  props: {
    labelSuffix: {
      type: String,
      default: void 0
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Number,
      default: 1
    },
    layout: {
      type: String,
      default: "grid"
    },
    data: {
      type: Array,
      default: () => []
    },
    initialValues: {
      type: Object,
      default: () => ({})
    },
    size: {
      type: String,
      default: "small"
    },
    labelWidth: {
      type: Number,
      default: 120
    }
  },
  data() {
    return {
      needDefaultValueArrayTypes: ["date-months", "checkbox"],
      formModel: {},
      rules: {}
    };
  },
  watch: {
    data: {
      handler(val) {
        const rules = val.reduce((pre, cur) => {
          this.$set(
            this.formModel,
            cur.name || cur.dataIndex || cur.key,
            cur.initialValue || (this.needDefaultValueArrayTypes.indexOf(cur.type) !== -1 ? [] : void 0)
          );
          pre[cur.name || cur.dataIndex || cur.key] = cur.rules;
          return pre;
        }, {});
        this.rules = rules;
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    _validate() {
      return __async(this, null, function* () {
        return new Promise((resolve, reject) => __async(this, null, function* () {
          const valid = yield this.$refs["formRef"].validate();
          if (valid) {
            console.log(valid);
            resolve(__spreadValues({}, this.formModel));
          } else {
            reject();
          }
        }));
      });
    },
    _validateField(fields = void 0) {
      return __async(this, null, function* () {
        return new Promise((resolve, reject) => {
          this.$refs["formRef"].validateField(fields, (valid) => {
            if (!valid) {
              if (typeof fields === "string") {
                resolve(this.formModel[fields]);
              } else {
                const results = fields.reduce((pre, cur) => {
                  pre[cur] = this.formModel[cur];
                  return pre;
                }, {});
                resolve(results);
              }
            } else {
              reject();
            }
          });
        });
      });
    },
    validateFields(fields) {
      if (fields) {
        return this._validateField(fields);
      } else {
        return this._validate();
      }
    },
    getFieldsValue() {
      return __spreadValues({}, this.formModel);
    },
    getFieldValue(key) {
      return this.formModel[key];
    },
    setFieldValue(key, value) {
      this.$set(
        this.formModel,
        key,
        value
      );
    },
    setFieldsValue(fields) {
      if (typeof fields === "object") {
        Object.keys(fields).forEach((key) => {
          this.setFieldValue(key, fields[key]);
        });
      }
    },
    resetFields() {
      this.$refs["formRef"].resetFields();
    }
  }
};
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
  ] }, [_c("el-form", { ref: "formRef", attrs: { "inline": _vm.layout === "inline", "model": _vm.formModel, "rules": _vm.rules, "size": _vm.size, "label-width": `${_vm.labelWidth}px`, "label-suffix": _vm.labelSuffix, "hide-required-asterisk": _vm.hideRequiredAsterisk, "disabled": _vm.disabled } }, [_vm._l(_vm.data, function({
    name,
    title,
    placeholder,
    type,
    clearable,
    options,
    formItemProps,
    fieldItemProps
  }) {
    return _c("form-item", { key: name, attrs: { "name": name, "title": title, "clearable": clearable, "placeholder": placeholder, "type": type, "options": options, "fieldItemProps": fieldItemProps, "formItemProps": formItemProps, "formModel": _vm.formModel }, scopedSlots: _vm._u([{ key: `${name}FormExtra`, fn: function() {
      return [_vm._t(`${name}FormExtra`)];
    }, proxy: true }, { key: `${name}CustomFormComponent`, fn: function({ fieldItemProps: fieldItemProps2, formModel, onChange, name: name2, value }) {
      return [_vm._t(`${name2}CustomFormComponent`, null, { "fieldItemProps": fieldItemProps2, "formModel": formModel, "onChange": onChange, "name": name2, "value": value })];
    } }], null, true) });
  }), _vm._t("default")], 2)], 1);
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
const CnForm = __component__.exports;
export {
  CnForm as default
};
