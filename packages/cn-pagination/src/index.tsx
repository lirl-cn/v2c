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
    const onCurrentChange = (current: number) => {
      props.onChange(current, pageSize);
    };
    const onSizeChange = (pageSize: number) => {
      props.onChange(current, pageSize);
    };
    return () => (
      <el-pagination
        class="cn-data-catalog-table-pagination"
        small={size === "small"}
        background={background}
        current-page={current}
        pageSize={pageSize}
        total={total}
        showSizeChanger={true}
        pageSizes={pageSizeOptions}
        how-quick-jumper
        layout={layout}
        onSizeChange={onSizeChange}
        onCurrentChange={onCurrentChange}
        onPrevClick={onCurrentChange}
        onNextClick={onCurrentChange}
      />
    );
  },
});
