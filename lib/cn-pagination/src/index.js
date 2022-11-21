"use strict";
const require$$0 = require("vue");
const CnPagination = require$$0.defineComponent({
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
  setup(props) {
    const onCurrentChange = (current) => {
      props.onChange(current, props.pageSize);
    };
    const onSizeChange = (pageSize) => {
      props.onChange(props.current, pageSize);
    };
    return () => {
      return require$$0.h("el-pagination", {
        "class": "cn-data-catalog-table-pagination",
        "attrs": {
          "small": props.size === "small",
          "background": props.background,
          "current-page": props.current,
          "pageSize": props.pageSize,
          "total": props.total,
          "showSizeChanger": true,
          "pageSizes": props.pageSizeOptions,
          "how-quick-jumper": true,
          "layout": props.layout
        },
        "on": {
          "size-change": onSizeChange,
          "current-change": onCurrentChange,
          "prev-click": onCurrentChange,
          "next-click": onCurrentChange
        }
      });
    };
  }
});
module.exports = CnPagination;
