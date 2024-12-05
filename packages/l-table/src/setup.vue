<template>
  <div
    :class="[
      'l-table-container',
      { 'l-table-selection-radio-container': props.selectType === 'radio' },
    ]"
    v-loading="pageLoading"
  >
    <div
      :class="[
        'l-table-content',
        {
          'l-table-content-empty': isTableEmpty && !props.emptyInTable,
        },
      ]"
      :style="noPadding ? 'padding: 0' : undefined"
    >
      <template v-if="isTableEmpty && !props.emptyInTable && !pageLoading">
        <slot name="empty">
          <c-empty title="暂无数据"></c-empty>
        </slot>
      </template>
      <template v-else>
        <el-table
          ref="tableRef"
          :stripe="props.stripe"
          :data="props.dataSource || dataSource"
          :style="`width: 100%; ${props.tableStyle || ''}`"
          height="100%"
          v-bind="attrs"
          empty-text="- 暂无数据 -"
          :border="props.border"
          :row-key="props.rowKey"
          :tree-props="props.treeProps"
          :load="props.load"
          :lazy="Boolean(props.load)"
          tooltip-effect="light"
          @select="onSelect"
          @selection-change="onSelectionChange"
        >
          <el-table-column
            v-if="props.selection"
            type="selection"
            :reserve-selection="true"
            width="40"
            align="center"
            :selectable="selectableFun"
          />
          <el-table-column
            v-if="Boolean(props.showIndex)"
            type="index"
            align="center"
            :index="calcIndex"
            :label="props.indexText"
            class-name="l-table-index-text"
            width="65"
          ></el-table-column>
          <el-table-column
            v-for="{
              title,
              dataIndex,
              valueType,
              minWidth,
              width,
              ellipsis,
              fixed,
              align = 'center',
              render,
            } in props.columns"
            :key="dataIndex"
            :prop="dataIndex"
            :label="title"
            :width="width"
            :min-width="minWidth"
            :fixed="fixed"
            :align="align"
            :show-overflow-tooltip="ellipsis === false ? false : true"
          >
            <template slot-scope="{ row }">
              <slot :name="`${dataIndex}`" :record="row" :text="row[dataIndex]">
                {{ formatValue(row, dataIndex, valueType, render) }}
              </slot>
            </template>
          </el-table-column>
          <template #empty v-if="!pageLoading">
            <slot name="empty">
              {{ props.empty }}
            </slot>
          </template>
        </el-table>
      </template>
    </div>
    <div
      v-if="(!isTableEmpty || props.emptyInTable) && !props.disabledPage"
      class="l-table-pagination"
    >
      <el-pagination
        :current-page.sync="dParams[props.currentKey]"
        :page-size="dParams[props.pageSizeKey]"
        :layout="props.layout"
        :total="dParams.total"
        :hide-on-single-page="props.hideOnSinglePage"
        @current-change="handleCurrentChange"
        @size-change="handlePageSizeChange"
      >
        <!--        hide-on-single-page-->
        <slot name="l-table-pagination">
          <span key="1">
            {{ dParams[props.currentKey] }} / {{ dParams[props.pageSizeKey] }}
          </span>
        </slot>
      </el-pagination>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  defineProps,
  useAttrs,
  ref,
  onMounted,
  watch,
  computed,
  nextTick,
  onBeforeUnmount,
} from 'vue'
import dayjs from 'dayjs'
import { isEmpty } from '@/utils/utils'
import { request as fetch } from '@/utils/request'
import { CSSProperties } from 'vue/types/jsx'
export type ColumnsType = {
  title: string // 表头文案
  dataIndex: string // 数据key
  valueType?: 'date' | 'date-time'
  width?: number | string // 宽度
  minWidth?: number | string // 宽度
  ellipsis?: boolean // 是否...
  align?: 'center' | 'left' | 'right'
  render?: (
    val: number | string | boolean | Record<string, any>,
    record: Record<string, any>
  ) => string
  [k: string]: any
}

const attrs = useAttrs()
const props = withDefaults(
  defineProps<{
    columns: ColumnsType[]
    dataSource?: any[]
    emptyText?: string
    empty?: string
    stripe?: boolean
    emptyInTable?: boolean
    disabledPage?: boolean
    action?: string
    border?: boolean
    selection?: boolean
    selectType?: 'checkbox' | 'radio'
    selectable?: (record: Record<string, any>, index: number) => boolean
    onSearchClearSelectedRows?: boolean
    noPadding?: boolean
    loading?: boolean | undefined
    hideOnSinglePage?: boolean
    load?: (tree: any, treeNode: any, resolve: Function) => void
    treeProps?: {
      children: string
      hasChildren: string
    }
    indexText?: string
    showIndex?: boolean | Function
    request?: (params: Record<string, any>) => Promise<{
      success: boolean
      total?: number
      meta: {
        data: Record<string, any>
        page: {
          first: boolean
          last: boolean
          page: number
          size: number
          sizeOfElements: number
          totalElements: number
          totalPages: number
        }
      }
    }>
    params?: Record<string, any>
    method?: 'POST' | 'GET'
    autoLoadData?: boolean
    currentKey?: string
    defaultCurrentValue?: number
    pageSizeKey?: string
    defaultPageSizeValue?: number
    tableStyle?: CSSProperties
    layout?: string
    rowKey?: string
    catch?: Function
    formatResponse?: (
      params: {
        success: boolean
        meta: { data: any }
      },
      type?: 'reject' | 'resolve'
    ) => Promise<{
      success: boolean
      total?: number
      meta: {
        data: Record<string, any>[]
        page?: {
          first: boolean
          last: boolean
          page: number
          size: number
          sizeOfElements: number
          totalElements: number
          totalPages: number
        }
      }
    }>
  }>(),
  {
    method: 'GET',
    emptyText: '-',
    indexText: '序号',
    empty: '- 暂无数据 -',
    stripe: true,
    emptyInTable: true,
    rowKey: 'id',
    border: false,
    loading: undefined,
    disabledPage: false,
    noPadding: false,
    selection: false,
    onSearchClearSelectedRows: false,
    selectType: 'checkbox',
    autoLoadData: true,
    layout: 'total, prev, pager, next, jumper',
    currentKey: 'page',
    pageSizeKey: 'size',
    defaultCurrentValue: 1,
    defaultPageSizeValue: 20,
  }
)
const emits = defineEmits(['select', 'change'])

const DEFAULT_PAGINATION = {
  [props.currentKey]: props.defaultCurrentValue,
  [props.pageSizeKey]: props.defaultPageSizeValue,
}

const tableRef = ref()
const dParams = ref({
  [props.currentKey]: props.defaultCurrentValue,
  [props.pageSizeKey]: props.defaultPageSizeValue,
  total: 0,
})
const dataSource = ref<any[]>([])
const loading = ref(true)
const selectedRows = ref()

const pageLoading = computed(() => {
  return props.loading !== undefined ? props.loading : loading.value
})
const isTableEmpty = computed(() => {
  return !(props.dataSource || dataSource.value)?.length
})

const calcIndex = (index: number) => {
  if (typeof props.showIndex === 'function') {
    return props.showIndex({
      index,
      current: dParams.value[props.currentKey],
      pageSize: dParams.value[props.pageSizeKey],
      text:
        (dParams.value[props.currentKey] - 1) *
        dParams.value[props.pageSizeKey] +
        (index + 1),
    })
  }
  return (
    (dParams.value[props.currentKey] - 1) * dParams.value[props.pageSizeKey] +
    (index + 1)
  )
}

const selectableFun = (record: any, index: number) => {
  return props.selectable?.(record, index) ?? true
}

const onSelect = (selection: any[], row: any) => {
  if (props.selectType === 'radio') {
    tableRef.value?.clearSelection()
    nextTick(() => {
      tableRef.value?.toggleRowSelection(row, true)
      // emits('select', row)
    })
  } else {
    // emits('select', selection, row)
  }
}

const onSelectionChange = (selection: any[]) => {
  nextTick(() => {
    selectedRows.value = selection
    if (props.selectType === 'radio') {
      emits(
        'select',
        selection?.length > 1 ? selection[selection.length - 1] : selection[0]
      )
    } else {
      emits('select', selection)
    }
  })
}
const fetchData = async (params: Record<any, any>) => {
  if (props.onSearchClearSelectedRows) {
    tableRef.value?.clearSelection()
  }
  let response: any
  loading.value = true
  if (props.action) {
    response = await fetch(props.action, {
      [props.method === 'GET' ? 'params' : 'data']: {
        ...params,
        ...props.params,
      },
      method: props.method,
    }).catch(err => {
      console.log(err)
      loading.value = false
    })
  } else if (props.request) {
    response = await props
      .request({ ...params, ...props.params })
      .catch(eeee => {
        console.log(eeee)
        loading.value = false
      })
  }
  loading.value = false
  if (response?.success) {
    response = props.formatResponse
      ? props.formatResponse(response, 'resolve')
      : response
    dataSource.value = response.meta?.data || []
    dParams.value.total = response.total
  } else {
    response = props.formatResponse
      ? props.formatResponse(response, 'reject')
      : false
    if (response) {
      dataSource.value = response.meta?.data || []
      dParams.value.total = response.total
    } else {
      dataSource.value = []
      dParams.value.total = 0
    }
  }
  nextTick(() => {
    doLayout()
  })
}

const search = () => {
  const { total, ...params } = dParams.value
  fetchData(params)
}
const handleCurrentChange = (current: number) => {
  dParams.value[props.currentKey] = current
  search()
}
const handlePageSizeChange = (pageSize: number) => {
  dParams.value[props.pageSizeKey] = pageSize
  search()
}
const formatValue = (
  record: any,
  dataIndex: string,
  valueType?: string,
  render?: Function
) => {
  if (isEmpty(record[dataIndex])) {
    return render ? render(record[dataIndex], record) : props.emptyText
  }
  switch (valueType) {
    case 'date': {
      return dayjs(Number(record[dataIndex])).format('YYYY-MM-DD')
    }
    case 'date-time': {
      return dayjs(Number(record[dataIndex])).format('YYYY-MM-DD HH:mm:ss')
    }
    default: {
      return render ? render(record[dataIndex], record) : record[dataIndex]
    }
  }
}

const doLayout = () => {
  nextTick(() => {
    tableRef.value?.doLayout()
  })
}

defineExpose({
  clearSelectRows() {
    tableRef.value?.clearSelection()
  },
  jumpPage(page: number) {
    handleCurrentChange(page)
  },
  reload() {
    search()
  },
  reset() {
    handleCurrentChange(1)
  },
  getParams: () => ({
    ...dParams.value,
    ...props.params,
  }),
  getSelectedRows: () => {
    return [...selectedRows.value]
  },
  doLayout,
  toggleRowSelection(row: any) {
    tableRef.value?.toggleRowSelection(row, true)
  },
  getDataSource() {
    return dataSource.value
  },
})

watch(
  () => [props.params, props.action],
  () => {
    dParams.value = {
      ...dParams.value,
      ...DEFAULT_PAGINATION,
    }
    fetchData(DEFAULT_PAGINATION)
  },
  {
    deep: true,
  }
)

onMounted(() => {
  if (props.autoLoadData && !props.dataSource) {
    fetchData(DEFAULT_PAGINATION)
  }
  if (props.dataSource) {
    loading.value = false
  }
  window.addEventListener('resize', doLayout)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', doLayout)
})
</script>
<style lang="scss" scoped>
@import '@/assets/styles/var';
.l-table-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;

  &.l-table-selection-radio-container {
    :deep(.el-checkbox__inner) {
      border-radius: 50%;
    }
    :deep(.el-table__header-wrapper .el-checkbox) {
      display: none;
    }
    :deep(.el-table__fixed-header-wrapper .el-checkbox) {
      display: none;
    }
  }
  :deep(.el-table--small) {
    font-size: 14px;
  }
  :deep(
      .el-table--enable-row-hover .el-table__body tr:hover > td.el-table__cell
    ) {
    //background-color: mix($--color-white, $--color-primary, 95%);
    background-color: #e6f1ff !important;
  }
  :deep(.el-table .el-table__body tr.hover-row > td.el-table__cell) {
    //background-color: mix($--color-white, $--color-primary, 95%);
    background-color: #e6f1ff !important;
  }
  :deep(.el-table) {
    background-color: transparent;
    font-family: PingFangSC-Regular;
    a + a,
    a + span,
    span + span,
    span + a {
      margin-left: 8px;
    }
  }
  :deep(.el-table th.el-table__cell.is-leaf) {
    border-bottom: 0 !important;
  }
  :deep(.el-table td.el-table__cell) {
    border-bottom: 0 !important;
  }
  //:deep(.el-table .el-table__header-wrapper th) {
  //  font-size: 14px;
  //  color: #333333;
  //  font-weight: 400;
  //}
  :deep(.el-table .el-table__header-wrapper th) {
    font-size: 14px;
    color: #333333;
    font-weight: 400;
  }
  :deep(.el-table .el-table__fixed-header-wrapper th) {
    font-size: 14px;
    color: #333333;
    font-weight: 400;
  }
  :deep(.el-table tr) {
    background-color: #fff;
    color: #666666;
  }
  :deep(.el-table-column--selection .cell) {
    padding: 0 12px;
  }
  :deep(.el-table--border .el-table-column--selection .cell) {
    padding: 0 !important;
  }
  :deep(th.el-table-column--selection .el-checkbox) {
    margin-left: 0;
  }
  :deep(
      .el-table--striped
        .el-table__body
        tr.el-table__row--striped
        td.el-table__cell
    ) {
    background: #f3fafe;
  }
  :deep(.el-table td.el-table__cell) {
    border-bottom-color: #e9e9e9;
    border-top-color: #e9e9e9;
    border-left-color: #e9e9e9;
    border-right-color: #e9e9e9;
    background-color: #fff;
  }
  :deep(.el-table th.el-table__cell.is-leaf) {
    border-bottom-color: #e9e9e9;
    border-top-color: #e9e9e9;
    border-left-color: #e9e9e9;
    border-right-color: #e9e9e9;
  }
  :deep(
      .el-table th.el-table__cell,
      .el-table thead.is-group th.el-table__cell
    ) {
    background-color: #ecf7fe;
  }
  :deep(.el-table__body-wrapper) {
    overflow-y: auto;
  }
}
.l-table-content {
  height: 0;
  flex: 1;
  padding: 20px 20px 0;
  &.l-table-content-empty {
    padding: 0;
  }
}
.l-table-pagination {
  height: max-content;
  text-align: center;
  :deep(.el-pagination) {
    padding: 6px 5px;
  }
}
</style>
