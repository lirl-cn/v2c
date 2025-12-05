"use strict";
const _sfc_main = {
  name: "LrTreeNode",
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    arrow: {
      type: Boolean,
      default: false
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
};
module.exports = _sfc_main;
