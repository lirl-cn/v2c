"use strict";
const require$$0 = require("vue");
const CnBadge = require$$0.defineComponent({
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
    return () => require$$0.h("span", {
      "class": "cn-badge-container"
    }, [require$$0.h("span", {
      "directives": [{
        name: "if",
        value: "!!status"
      }],
      "class": ["cn-badge-status-dot", `cn-badge-status-${props.status}`]
    }), require$$0.h("span", {
      "class": "ant-badge-status-text"
    }, [props.text])]);
  }
});
module.exports = CnBadge;
