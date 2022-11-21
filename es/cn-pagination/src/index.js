import { defineComponent, h } from "vue";
const CnPagination = defineComponent({
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
  setup({
    current = 1,
    pageSize = 20,
    total = 0,
    pageSizeOptions = [10, 20, 50, 100],
    size = "default",
    layout = "total, prev, pager, next, sizes, jumper",
    background,
    ...props
  }) {
    const onCurrentChange = (current2) => {
      props.onChange(current2, pageSize);
    };
    const onSizeChange = (pageSize2) => {
      props.onChange(current, pageSize2);
    };
    return () => h("el-pagination", {
      "class": "cn-data-catalog-table-pagination",
      "attrs": {
        "small": size === "small",
        "background": background,
        "current-page": current,
        "pageSize": pageSize,
        "total": total,
        "showSizeChanger": true,
        "pageSizes": pageSizeOptions,
        "how-quick-jumper": true,
        "layout": layout
      },
      "on": {
        "sizeChange": onSizeChange,
        "currentChange": onCurrentChange,
        "prevClick": onCurrentChange,
        "nextClick": onCurrentChange
      }
    });
  }
});
export {
  CnPagination as default
};
