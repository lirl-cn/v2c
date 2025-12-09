"use strict";
const vue = require("vue");
const _sfc_main = vue.defineComponent({
  name: "cn-badge",
  props: {
    text: {
      type: String,
      default: ""
    },
    status: {
      type: String,
      default: void 0
    }
  }
});
module.exports = _sfc_main;
