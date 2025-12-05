import { defineComponent } from "../../node_modules/vue/dist/vue.runtime.esm.js";
const _sfc_main = defineComponent({
  name: "cn-pagination",
  props: {
    current: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 20
    },
    total: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: "default"
    },
    layout: {
      type: String,
      default: "total, prev, pager, next, sizes, jumper"
    },
    background: {
      type: Boolean
    },
    pageSizeOptions: {
      type: Array,
      default: () => [10, 20, 50, 100]
    },
    onChange: {
      type: Function,
      default: () => {
      }
    }
  },
  methods: {
    onCurrentChange(current) {
      this.onChange(current, this.pageSize);
    },
    onSizeChange(pageSize) {
      this.onChange(this.current, pageSize);
    }
  }
});
export {
  _sfc_main as default
};
