<template>
  <el-pagination
    class="cn-data-catalog-table-pagination"
    :small="size === 'small'"
    :background="background"
    :current-page="current"
    :pageSize="pageSize"
    :total="total"
    showSizeChanger
    :pageSizes="pageSizeOptions"
    how-quick-jumper
    :layout="layout"
    @size-change="onSizeChange"
    @current-change="onCurrentChange"
    @prev-click="onCurrentChange"
    @next-click="onCurrentChange"
  />
</template>
<script lang="ts">

import type { PropType } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "cn-pagination",
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
      default: "default",
    },
    layout: {
      type: String,
      default: "total, prev, pager, next, sizes, jumper",
    },
    background: {
      type: Boolean,
    },
    pageSizeOptions: {
      type: Array as PropType<number[]>,
      default: () => [10, 20, 50, 100],
    },
    onChange: {
      type: Function as PropType<(current: number, pageSize: number) => void>,
      default: () => {},
    },
  },
  methods: {
    onCurrentChange(current: number){
      this.onChange(current, this.pageSize)
    },
    onSizeChange(pageSize: number) {
      this.onChange(this.current, pageSize);
    }
  }
});

</script>