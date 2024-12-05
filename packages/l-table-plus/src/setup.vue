<template>
  <c-content-container class="lrl-table-container" no-padding>
    <template v-if="showHeader" #header>
      <cn-form
        v-if="!props.hideSearch"
        :layout="props.searchLayout"
        :data="searchColumns"
        :actionRef="node => (searchRef = node)"
        :columns="props.searchGrid"
      >
        <el-button type="primary" @click="search">查询</el-button>
        <el-button @click="reset">重置</el-button>
        <template
          v-for="{ dataIndex } in searchColumns.filter(
            item => item.searchType === 'custom'
          )"
          #[`${dataIndex}CustomFormComponent`]="{
            fieldItemProps,
            formModel,
            onChange,
            value,
          }"
        >
          <slot
            :name="`${dataIndex}Search`"
            v-bind:fieldItemProps="fieldItemProps"
            v-bind:formModel="formModel"
            v-bind:onChange="onChange"
            v-bind:value="value"
          ></slot>
        </template>
      </cn-form>
      <div class="lrl-table-search-right-opt">
        <el-button
          v-if="props.createText"
          type="primary"
          @click="addVisible = true"
        >
          {{ props.createText }}
        </el-button>
        <slot name="searchOperate"></slot>
      </div>
    </template>
    <template #body>
      <l-table
        ref="tableRef"
        :action="props.action"
        :request="props.request"
        :method="props.method"
        :columns="tableColumns"
        :params="tableParams"
        :rowKey="props.rowKey"
        :currentKey="props.currentKey"
        :page-size-key="props.pageSizeKey"
        :default-current-value="props.defaultCurrentValue"
        :default-page-size-value="props.defaultPageSizeValue"
        :selection="props.selection"
        :selectType="props.selectType"
        :selectable="props.selectable"
        :formatResponse="props.formatResponse"
        :onSearchClearSelectedRows="props.onSearchClearSelectedRows"
        :hideOnSinglePage="props.hideOnSinglePage"
        @select="onTableSelect"
      >
        <template
          v-for="{ dataIndex } in tableColumns"
          #[dataIndex]="{ record }"
        >
          <slot
            :name="`${dataIndex}`"
            :record="record"
            :text="record[dataIndex]"
          ></slot>
        </template>
      </l-table>
      <c-modal
        :title="`${detail ? '编辑' : '新增'}${title || ''}`"
        :visible="addVisible"
        :width="props.formWidth"
        @close="closeAddModal"
        @ok="onSubmit"
      >
        <cn-form
          :key="String(detail) + addVisible"
          :data="formColumns"
          :actionRef="node => (formRef = node)"
        >
          <template
            v-for="{ name } in formColumns.filter(
              item => item.formType === 'custom'
            )"
            #[`${name}CustomFormComponent`]="{
              fieldItemProps,
              formModel,
              onChange,
              value,
            }"
          >
            <slot
              :name="`${name}Form`"
              v-bind:fieldItemProps="fieldItemProps"
              v-bind:formModel="formModel"
              v-bind:onChange="onChange"
              v-bind:value="value"
            ></slot>
          </template>
        </cn-form>
      </c-modal>
    </template>
  </c-content-container>
</template>
<script setup lang="ts">
import { computed, ref, useSlots } from 'vue'
import modal from '@/plugins/modal'
import type { ColumnsType } from '@/components/cn-components/l-table/index.vue'

export type ColumnsT = ColumnsType & {
  dataIndex: string
  title: string
  formTitle?: string
  searchTitle?: string
  formType?: string
  searchType?: string
  formName?: string
  searchName?: string
  options?: CommonItemType[]
  formOptions?: CommonItemType[]
  searchOptions?: CommonItemType[]
  formRules?: any[]
  hideInTable?: boolean
  hideInSearch?: boolean
  hideInForm?: boolean
}
// 定义组件属性及其默认值
const props = withDefaults(
  // 定义组件的属性类型
  defineProps<{
    // 表格列配置
    columns: ColumnsT[]
    // 表格请求地址
    action?: string
    // 自定义请求方法
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
    // 请求方式
    method?: 'POST' | 'GET'
    // 额外的请求参数
    params?: Record<string, any>
    // 标题，目前仅用于新增｜编辑弹窗显示
    title?: string
    // 每行数据的唯一标识键（用于编辑、删除等操作）
    rowKey?: string
    // 表格请求时当前页对应的key值
    currentKey?: string
    // 默认的表格请求时当前页页数
    defaultCurrentValue?: number
    // 表格请求时分页数量对应的key值
    pageSizeKey?: string
    // 默认的分页大小值
    defaultPageSizeValue?: number
    // 是否显示选择框
    selection?: boolean
    // 选择框类型：复选框或单选
    selectType?: 'checkbox' | 'radio'
    // 自定义每行数据的可选中状态
    selectable?: (record: Record<string, any>, index: number) => boolean
    // 在搜索时是否清空已选中的行
    onSearchClearSelectedRows?: boolean
    // 新增按钮的文本内容或隐藏
    createText?: string | false
    hideSearch?: boolean
    // 搜索布局类型
    searchLayout?: 'inline' | 'grid' | 'block'
    // 搜索布局为grid时的列数
    searchGrid?: number
    // 自定义搜索参数格式化函数
    searchFormat?: <T = Record<string, any>>(params: T) => T
    // 搜索日期范围参数后缀
    searchDateRangeSuffix?: [string, string]
    // form弹窗宽度
    formWidth?: string
    hideOnSinglePage?: boolean
    // 新增操作的回调函数
    createFun?: <T = Record<string, any>>(params: T) => Promise<RESPONSE_TYPE>
    // 编辑操作的回调函数
    updateFun?: <T = Record<string, any>>(params: T) => Promise<RESPONSE_TYPE>
    // 自定义服务端响应格式化函数
    formatResponse?: (params: {
      success: boolean
      meta: { data: any }
    }) => Promise<{
      success: boolean
      total?: number
      meta: {
        data: Record<string, any>[]
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
  }>(),
  // 设置默认值
  {
    searchLayout: 'inline', // 默认搜索布局为inline
    hideSearch: false,
    searchGrid: 4, // 默认搜索grid布局为4列
    createText: false, // 默认新增按钮文本为false,不显示
    formWidth: '600px',
    onSearchClearSelectedRows: true,
    searchDateRangeSuffix: () => ['StartTime', 'EndTime'],
  }
)

const emits = defineEmits(['select'])

const slots = useSlots()

const mapToOptions = (valueEnum: any) => {
  if (!valueEnum) return undefined
  return Object.keys(valueEnum).map(value => ({
    value,
    label: valueEnum[value]?.text,
  }))
}

const searchRef = ref()
const tableRef = ref()
const formRef = ref()
const params = ref({})
const addVisible = ref(false)
const detail = ref()

const showHeader = computed(() =>
  Boolean(!props.hideSearch || props.createText || slots.searchOperate)
)
const tableParams = computed(() => ({
  ...params.value,
  ...props.params,
}))
const tableColumns = computed(() =>
  props.columns
    ?.filter(item => !item.hideInTable)
    .map(item => ({
      ...item,
      render: item.render
        ? item.render
        : item.valueEnum
          ? (text: string) => item.valueEnum[text]?.text || '-'
          : undefined,
    }))
)
const searchColumns = computed<any[]>(() =>
  props.columns
    .filter(item => item.dataIndex !== 'operate' && item.hideInSearch !== true)
    .map(item => {
      const options =
        item.searchOptions || item.options || mapToOptions(item.valueEnum)
      return {
        ...item,
        title: item.searchTitle || item.title,
        name: item.searchName || item.dataIndex,
        type: options ? 'select' : item.searchType || item.formType,
        options,
      }
    })
)
const formColumns = computed<any[]>(() =>
  props.columns
    .filter(item => item.dataIndex !== 'operate' && item.hideInForm !== true)
    .map(item => {
      const options =
        item.formOptions || item.options || mapToOptions(item.valueEnum)
      return {
        ...item,
        title: item.formTitle || item.title,
        name: item.formName || item.dataIndex,
        type: options ? 'select' : item.formType,
        options,
        initialValue: detail.value?.[item.dataIndex],
        rules: item.formRules,
      }
    })
)
const searchDateRange = computed(() =>
  searchColumns.value.reduce((pre, cur) => {
    if (cur.type === 'daterange' || cur.type === 'date-range') {
      pre.add(cur.name)
    }
    return pre
  }, new Set())
)

const search = async () => {
  const values = await searchRef.value.getFieldsValue()
  for (let key in values) {
    // 时间范围选择处理
    if (searchDateRange.value.has(key) && values[key]) {
      values[key + props.searchDateRangeSuffix[0]] = values[key][0]
      values[key + props.searchDateRangeSuffix[1]] = values[key][1]
        ? `${values[key][1]?.split(' ')?.[0]} 23:59:59`
        : undefined
      // ! 是否要删除原数据，代议
      delete values[key]
    }
  }
  params.value = props.searchFormat ? props.searchFormat(values) : values
}
const reset = async () => {
  await searchRef.value.resetFields()
  params.value = {}
}

const edit = (record: any) => {
  detail.value = record
  addVisible.value = true
}

const onSubmit = async () => {
  const values = await formRef.value.validateFields()
  const response = await (detail.value
    ? props.updateFun?.({
      ...detail.value,
      ...values,
    })
    : props.createFun?.(values))
  if (response?.success) {
    addVisible.value = false
    tableRef.value.reload()
  } else {
    modal.msgError(response?.msg)
  }
}

const closeAddModal = () => {
  addVisible.value = false
  detail.value = undefined
}

const onTableSelect = (value: any) => {
  emits('select', value)
}

defineExpose({
  edit,
  reset,
  reload() {
    tableRef.value.reload()
  },
  doLayout() {
    tableRef.value.doLayout()
  },
  toggleRowSelection(row: any) {
    tableRef.value.toggleRowSelection(row)
  },
  clearSelectRows() {
    tableRef.value.clearSelectRows()
  },
  getSelectedRows() {
    return tableRef.value.getSelectedRows()
  },
  getParams() {
    return tableRef.value.getParams()
  },
  getDataSource() {
    return tableRef.value.getDataSource()
  },
})
</script>
<style lang="scss">
.lrl-table-container {
  .c-content--header {
    padding: 20px 20px 0;
    display: flex;
  }

  .lrl-table-search-right-opt {
    width: max-content;
  }

  .cn-form-inline-container {
    width: 0;
    flex: 1;

    .el-form--inline .el-form-item {
      margin-bottom: 0;
      margin-top: 0px;
    }
  }
}
</style>
