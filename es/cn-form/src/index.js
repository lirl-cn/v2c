import normalizeComponent from "../../_virtual/_plugin-vue2_normalizer.js";
const _sfc_main = {
  name: "cn-form",
  components: {
    FormItem: () => import("./form-item.js")
  },
  props: {
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
    async _validate() {
      return new Promise(async (resolve, reject) => {
        const valid = await this.$refs["formRef"].validate();
        if (valid) {
          console.log(valid);
          resolve({ ...this.formModel });
        } else {
          reject();
        }
      });
    },
    async _validateField(fields = void 0) {
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
    },
    validateFields(fields) {
      if (fields) {
        return this._validateField(fields);
      } else {
        return this._validate();
      }
    },
    getFieldsValue() {
      return { ...this.formModel };
    },
    getFieldValue(key) {
      return this.formModel[key];
    },
    setFieldValue(key, value) {
      this.formModel[key] = value;
    },
    setFieldsValue(fields) {
      this.formModel = {
        ...this.formModel,
        ...fields
      };
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
  ] }, [_c("el-form", { ref: "formRef", attrs: { "inline": _vm.layout === "inline", "model": _vm.formModel, "rules": _vm.rules, "size": _vm.size, "label-width": `${_vm.labelWidth}px` } }, [_vm._l(_vm.data, function({
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
