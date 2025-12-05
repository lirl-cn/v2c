"use strict";
const vue_runtime_esm = require("../../node_modules/vue/dist/vue.runtime.esm.js");
const _sfc_main = vue_runtime_esm.defineComponent({
  name: "LrTreeNode2",
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    mode: {
      type: String,
      default: "horizontal"
    },
    baseKey: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      SPACER: "lr*tree^spacer"
    };
  },
  methods: {
    renderText(data) {
      return (data == null ? void 0 : data.text) || (data == null ? void 0 : data.id);
    }
  }
});
module.exports = _sfc_main;
