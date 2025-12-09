"use strict";
const vue = require("vue");
const _sfc_main = vue.defineComponent({
  name: "CModal",
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false
    },
    title: {
      type: String,
      required: false
    },
    width: {
      type: String,
      required: false
    },
    noFooter: {
      type: Boolean,
      required: false
    },
    className: {
      type: String,
      required: false
    },
    destroyOnClose: {
      type: Boolean,
      required: false
    },
    okText: {
      type: String,
      required: false
    },
    cancelText: {
      type: String,
      required: false
    },
    btnSize: {
      type: String,
      required: false,
      default: "small"
    }
  },
  emits: ["close", "ok"]
});
module.exports = _sfc_main;
