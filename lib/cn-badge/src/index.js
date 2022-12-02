"use strict";
const vue = require("vue");
const CnBadge = vue.defineComponent({
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
    return () => vue.h("span", {
      "class": "cn-badge-container"
    }, [vue.h("span", {
      "directives": [{
        name: "if",
        value: "!!status"
      }],
      "class": ["cn-badge-status-dot", `cn-badge-status-${props.status}`]
    }), vue.h("span", {
      "class": "ant-badge-status-text"
    }, [props.text])]);
  }
});
module.exports = CnBadge;
