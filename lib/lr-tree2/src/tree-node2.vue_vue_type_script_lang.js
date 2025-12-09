"use strict";
const vue = require("vue");
const _sfc_main = vue.defineComponent({
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
