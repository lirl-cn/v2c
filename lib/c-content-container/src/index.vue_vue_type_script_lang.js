"use strict";
const vue = require("vue");
const _sfc_main = vue.defineComponent({
  name: "CContentContainer",
  props: {
    noPadding: {
      type: Boolean,
      required: false,
      default: false
    },
    noBgColor: {
      type: Boolean,
      required: false,
      default: false
    }
  }
});
module.exports = _sfc_main;
