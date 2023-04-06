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
    actionRef: {
      type: Function,
      default: void 0
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
        const initialValues = this.getFieldsValue();
        const rules = val.reduce((pre, cur) => {
          var _a, _b;
          this.$set(
            this.formModel,
            cur.name || cur.dataIndex || cur.key,
            (_b = (_a = initialValues[cur.name]) != null ? _a : cur.initialValue) != null ? _b : this.needDefaultValueArrayTypes.indexOf(cur.type) !== -1 ? [] : void 0
          );
          pre[cur.name || cur.dataIndex || cur.key] = cur.rules;
          return pre;
        }, {});
        this.rules = rules;
      },
      immediate: true,
      deep: true
    },
    actionRef: {
      handler(val) {
        val && val(this.ownActionRef);
      },
      immediate: true,
      deep: true
    }
  },
  computed: {
    ownActionRef() {
      return {
        validateFields: this.validateFields,
        getFieldsValue: this.getFieldsValue,
        getFieldValue: this.getFieldValue,
        setFieldValue: this.setFieldValue,
        setFieldsValue: this.setFieldsValue,
        resetFields: this.resetFields
      };
    }
  },
  methods: {
    _validate() {
      return __async(this, null, function* () {
        return new Promise((resolve, reject) => __async(this, null, function* () {
          const valid = yield this.$refs["formRef"].validate();
          if (valid) {
            resolve(__spreadValues({}, this.formModel));
          } else {
            reject();
          }
        }));
      });
    },
    _validateField() {
      return __async(this, arguments, function* (fields = []) {
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
export {
  _sfc_main as default
};
