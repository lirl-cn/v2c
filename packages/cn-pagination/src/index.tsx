import { defineComponent } from "vue";
import type { PropType } from 'vue'

export default defineComponent({
  name: 'cn-pagination',
  props: {
    current: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 20,
    },
    total: {
      type: Number,
      default: 0,
    },
    size: {
      type: String as PropType<"small" | "default">,
      default: 'default',
    },
    layout: {
      type: String,
      default: 'total, prev, pager, next, sizes, jumper',
    },
    background: {
      type: Boolean
    },
    pageSizeOptions: {
      type: Array as PropType<number[]>,
      default: () => [10, 20, 50, 100],
    },
    onChange: {
      type: Function as PropType<(current: number, pageSize: number) => void>,
      default: () => {}
    },
  },
  setup(props) {
    const onCurrentChange = (current: number) => {
      props.onChange(current, props.pageSize);
    };
    const onSizeChange = (pageSize: number) => {
      props.onChange(props.current, pageSize);
    };
    return () => {
      return (
        <el-pagination
          class="cn-data-catalog-table-pagination"
          small={props.size === "small"}
          background={props.background}
          current-page={props.current}
          pageSize={props.pageSize}
          total={props.total}
          showSizeChanger={true}
          pageSizes={props.pageSizeOptions}
          how-quick-jumper
          layout={props.layout}
          on-size-change={onSizeChange}
          on-current-change={onCurrentChange}
          on-prev-click={onCurrentChange}
          on-next-click={onCurrentChange}
        />
      )
    }
  },
});
