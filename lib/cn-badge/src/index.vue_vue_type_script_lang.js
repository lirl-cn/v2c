"use strict";
const vue_runtime_esm = require("../../node_modules/vue/dist/vue.runtime.esm.js");
const _sfc_main = vue_runtime_esm.defineComponent({
  name: "cn-badge",
  props: {
    text: {
      type: String,
      default: ""
    },
    status: {
      type: String,
      default: "primary"
    }
  }
});
module.exports = _sfc_main;
