import { defineComponent } from "vue";
const _sfc_main = defineComponent({
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
export {
  _sfc_main as default
};
