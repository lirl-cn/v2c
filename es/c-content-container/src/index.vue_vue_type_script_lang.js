import { defineComponent } from "vue";
const _sfc_main = defineComponent({
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
export {
  _sfc_main as default
};
