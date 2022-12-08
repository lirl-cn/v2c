"use strict";
const vue_runtime_esm = require("../../node_modules/vue/dist/vue.runtime.esm.js");
const CnBadge = vue_runtime_esm.defineComponent({
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
  },
  setup(props) {
    return () => vue_runtime_esm.h("span", {
      "class": "cn-badge-container"
    }, [vue_runtime_esm.h("span", {
      "directives": [{
        name: "if",
        value: "!!status"
      }],
      "class": ["cn-badge-status-dot", `cn-badge-status-${props.status}`]
    }), vue_runtime_esm.h("span", {
      "class": "ant-badge-status-text"
    }, [props.text])]);
  }
});
module.exports = CnBadge;
