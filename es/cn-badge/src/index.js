import { defineComponent, h } from "vue";
const CnBadge = defineComponent({
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
    return () => h("span", {
      "class": "cn-badge-container"
    }, [h("span", {
      "directives": [{
        name: "if",
        value: "!!status"
      }],
      "class": ["cn-badge-status-dot", `cn-badge-status-${props.status}`]
    }), h("span", {
      "class": "ant-badge-status-text"
    }, [props.text])]);
  }
});
export {
  CnBadge as default
};
