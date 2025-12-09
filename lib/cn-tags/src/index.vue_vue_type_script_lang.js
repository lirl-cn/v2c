"use strict";
const vue = require("vue");
const _sfc_main = vue.defineComponent({
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
      type: String,
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
        if (this.showAll && Array.isArray(newValue) && newValue.length === 1 && newValue[0] === this.showAll.value) {
          newValue = [];
        }
        if (Array.isArray(newValue) && newValue.indexOf(val) !== -1) {
          const _newValue = newValue.filter((v) => v !== val);
          this.$emit(
            "change",
            this.showAll && !_newValue.length ? [this.showAll.value] : _newValue
          );
        } else {
          this.$emit("change", Array.isArray(newValue) ? [...newValue, val] : [val]);
        }
      } else {
        if (val !== this.value)
          this.$emit("change", val);
      }
    }
  }
});
module.exports = _sfc_main;
