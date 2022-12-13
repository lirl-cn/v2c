import "../../index.js";
import "../../cn-tags/index.js";
import CnTags from "../../cn-tags/src/index.js";
const _sfc_main = {
  components: { CnTags },
  props: {
    title: {
      type: String
    },
    separator: {
      type: String
    },
    placeholder: {
      type: String
    },
    startPlaceholder: {
      type: String
    },
    endPlaceholder: {
      type: String,
      default: "\u7ED3\u675F\u65E5\u671F"
    },
    type: {
      type: String,
      default: "input"
    },
    name: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      default: void 0
    },
    hide: {
      type: Boolean,
      default: false
    },
    clearable: Boolean,
    formItemProps: {
      type: Object,
      default: void 0
    },
    fieldItemProps: {
      type: Object,
      default: () => ({})
    },
    formModel: {
      type: Object,
      default: () => ({})
    },
    customChangeFormModel: {
      type: Function,
      default: () => {
      }
    }
  },
  computed: {
    onChange() {
      return this.fieldItemProps.onChange ? this.fieldItemProps.onChange : () => {
      };
    }
  }
};
export {
  _sfc_main as default
};
