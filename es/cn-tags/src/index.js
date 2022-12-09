import normalizeComponent from "../../_virtual/_plugin-vue2_normalizer.js";
const _sfc_main = {
  name: "CnTags",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    showAll: {
      type: Object,
      default: void 0
    },
    value: {
      type: [Array, String, Number],
      default: void 0
    },
    options: {
      type: Array,
      default: () => []
    },
    mode: {
      type: "checkbox" | "radio",
      default: "checkbox"
    }
  },
  methods: {
    onClickAll() {
      this.$emit("change", [this.showAll.value]);
    },
    onClick(val) {
      if (this.mode === "checkbox") {
        let newValue = this.value || [];
        if (this.showAll && newValue.length === 1 && newValue[0] === this.showAll.value) {
          newValue = [];
        }
        if (newValue.indexOf(val) !== -1) {
          this.$emit(
            "change",
            newValue.filter((v) => v !== val)
          );
        } else {
          this.$emit("change", [...newValue, val]);
        }
      } else {
        if (val !== this.value)
          this.$emit("change", val);
      }
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "cn-tags-container" }, [_vm.showAll && _vm.mode === "checkbox" ? _c("span", { class: [
    "cn-tags-item",
    {
      "cn-tags-item-active": _vm.value && _vm.value.length === 1 && _vm.value[0] === _vm.showAll.value
    }
  ], on: { "click": _vm.onClickAll } }, [_vm._v(" " + _vm._s(_vm.showAll.label) + " ")]) : _vm._e(), _vm._l(_vm.options, function({ label, value: val }) {
    return _c("span", { key: val, class: [
      "cn-tags-item",
      {
        "cn-tags-item-active": _vm.mode === "checkbox" ? _vm.value && Array.isArray(_vm.value) && _vm.value.indexOf(val) !== -1 : _vm.value === val
      }
    ], on: { "click": function($event) {
      return _vm.onClick(val);
    } } }, [_vm._v(_vm._s(label))]);
  })], 2);
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
const CnTags = __component__.exports;
export {
  CnTags as default
};
