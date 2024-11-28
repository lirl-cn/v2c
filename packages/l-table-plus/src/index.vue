<template>
  <c-content-container class="lrl-table-plus-container" no-padding>
    <template v-if="showHeader" #header>
      <cn-form
        v-if="!hideSearch"
        :layout="searchLayout"
        :data="searchColumns"
        :actionRef="node => (searchRef = node)"
        :columns="searchGrid"
      >
        <el-button :size="searchBtnSize" type="primary" @click="search">查询</el-button>
        <el-button :size="searchBtnSize" @click="reset">重置</el-button>
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
          v-if="createText"
          type="primary"
          @click="addVisible = true"
        >
          {{ createText }}
        </el-button>
        <slot name="searchOperate"></slot>
      </div>
    </template>
    <template #body>
      <l-table
        ref="tableRef"
        :action="action"
        :request="request"
        :method="method"
        :stripe="stripe"
        :showIndex="showIndex"
        :indexText="indexText"
        :border="border"
        :load="load"
        :treeProps="treeProps"
        :columns="tableColumns"
        :params="tableParams"
        :rowKey="rowKey"
        :currentKey="currentKey"
        :page-size-key="pageSizeKey"
        :default-current-value="defaultCurrentValue"
        :default-page-size-value="defaultPageSizeValue"
        :selection="selection"
        :selectType="selectType"
        :selectable="selectable"
        :formatResponse="formatResponse"
        :onSearchClearSelectedRows="onSearchClearSelectedRows"
        :hideOnSinglePage="hideOnSinglePage"
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
        :width="formWidth"
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
<script lang="ts">
import {  defineComponent, PropType } from 'vue'
import type { ColumnsType } from '../../l-table/src/index.vue'
import {Message} from "element-ui";

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

const mapToOptions = (valueEnum: any) => {
  if (!valueEnum) return undefined
  return Object.keys(valueEnum).map(value => ({
    value,
    label: valueEnum[value]?.text,
  }))
}
export default defineComponent({
  name: 'LTablePlus',
  props: {
    columns: {
      type: Array as PropType<ColumnsT[]>,
      required: true,
      default: () => []
    },
    action: {
      type: String,
      required: false,
      default: undefined,
    },
    request: {
      type: Function as PropType<(params: Record<string, any>) => Promise<{
        success: boolean
        total?: number
        meta: {
          data: Record<string, any>
        }
      }>>,
      required: false,
      default: undefined
    },
    method: {
      type: String as PropType<'POST' | 'GET'>,
      required: false,
      default: undefined,
    },
    params: {
      type: Object as PropType<Record<string, any>>,
      required: false,
      default: undefined
    },
    stripe: {
      type: Boolean,
      required: false,
      default: undefined
    },
    border: {
      type: Boolean,
      required: false,
      default: undefined
    },
    selection: {
      type: Boolean,
      required: false,
      default: false
    },
    selectType: {
      type: String as PropType<'checkbox' | 'radio'>,
      required: false,
      default: 'checkbox'
    },
    selectable: {
      type: Function as PropType<(record: Record<string, any>, index: number) => boolean>,
      required: false,
    },
    onSearchClearSelectedRows: {
      type: Boolean,
      required: false,
      default: true
    },
    load: {
      type: Function as PropType<(tree: any, treeNode: any, resolve: Function) => void>,
      required: false,
      default: undefined
    },
    treeProps: {
      type: Object as PropType<{
        children: string
        hasChildren: string
      }>,
      required: false,
      default: undefined
    },
    indexText: {
      type: String,
      required: false,
      default: '序号'
    },
    showIndex: {
      type: [Boolean, Function] as PropType<boolean | Function>,
      required: false,
      default: false
    },
    currentKey: {
      type: String,
      required: false,
      default: undefined
    },
    pageSizeKey: {
      type: String,
      required: false,
      default: undefined
    },
    defaultCurrentValue: {
      type: Number,
      required: false,
      default: undefined
    },
    defaultPageSizeValue: {
      type: Number,
      required: false,
      default: undefined
    },
    layout: {
      type: String,
      required: false,
      default: undefined,
    },
    rowKey: {
      type: String,
      required: false,
      default: undefined,
    },
    hideOnSinglePage: {
      type: Boolean,
      required: false,
      default: undefined
    },
    formatResponse: {
      type: Function as PropType<(res: any, type?: 'reject' | 'resolve') => Promise<{
        success: boolean
        total?: number
        meta: {
          data: Record<string, any>[]
        }
      }>>,
      required: false,
      default: undefined
    },
    createText: {
      type: [String, Boolean],
      required: false,
      default: false,
    },
    hideSearch:  {
      type: Boolean,
      required: false,
      default: false
    },
    // 搜索布局类型
    searchLayout: {
      type: String as PropType<'inline' | 'grid' | 'block'>,
      required: false,
      default: 'inline'
    },
    searchBtnSize: {
      type: String as PropType<'mini' | 'small' | 'medium'>,
      required: false,
      default: 'small'
    },
    // 搜索布局为grid时的列数
    searchGrid: {
      type: Number,
      required: false,
      default: 4,
    },
    // 自定义搜索参数格式化函数
    searchFormat: {
      type: Function as PropType<(params: any) => any>,
      required: false,
      default: undefined,
    },
    // 搜索日期范围参数后缀
    searchDateRangeSuffix: {
      type: Array as PropType<Array<string>>,
      required: false,
      default: () => ['StartTime', 'EndTime'],
    },
    // form弹窗宽度
    formWidth: {
      type: String,
      required: false,
      default: '600px',
    },
    title: {
      type: String,
      required: false,
      default: undefined,
    },
    // 新增操作的回调函数
    createFun: {
      type: Function as PropType<(params: Record<string, any>) => Promise<RESPONSE_TYPE>>,
      required: false,
      default: undefined,
    },
    // 编辑操作的回调函数
    updateFun: {
      type: Function as PropType<(params: Record<string, any>) => Promise<RESPONSE_TYPE>>,
      required: false,
      default: undefined,
    },
  },
  emits: ['select'],
  computed:{
    showHeader(){
      return Boolean(!this.hideSearch || this.createText || this.$slots.searchOperate)
    },
    tableParams(){
      return {
        ...this.ownParams,
        ...this.params,
      }
    },
    tableColumns(){
      return this.columns
        ?.filter(item => !item.hideInTable)
        .map(item => ({
          ...item,
          render: item.render
            ? item.render
            : item.valueEnum
              ? (text: string) => item.valueEnum[text]?.text || '-'
              : undefined,
        }))
    },
    searchColumns(){
      return this.columns
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
    },
    formColumns(){
      return this.columns
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
            initialValue: this.detail?.[item.dataIndex],
            rules: item.formRules,
          }
        })
    },
    searchDateRange(){
      return this.searchColumns.reduce((pre, cur) => {
        if (cur.type === 'daterange' || cur.type === 'date-range') {
          pre.add(cur.name)
        }
        return pre
      }, new Set())
    },
  },
  data(){
    return {
      searchRef: undefined,
      tableRef: undefined,
      formRef: undefined,
      ownParams: {},
      addVisible: false,
      detail: undefined,
    }
  },
  methods: {
    async search(){
      const values = await this.searchRef.getFieldsValue()
      for (let key in values) {
        // 时间范围选择处理
        if (this.searchDateRange.has(key) && values[key]) {
          values[key + this.searchDateRangeSuffix[0]] = values[key][0]
          values[key + this.searchDateRangeSuffix[1]] = values[key][1]
            ? `${values[key][1]?.split(' ')?.[0]} 23:59:59`
            : undefined
          // ! 是否要删除原数据，代议
          delete values[key]
        }
      }
      this.ownParams = this.searchFormat ? this.searchFormat(values) : values
    },
    async reset(){
      await this.searchRef.resetFields()
      this.ownParams = {}
    },
    edit(record: any){
      this.detail = record
      this.addVisible = true
    },
    async onSubmit(){
      const values = await this.formRef.validateFields()
      const response = await (this.detail
        ? this.updateFun?.({
          ...this.detail,
          ...values,
        })
        : this.createFun?.(values))
      if (response?.success) {
        this.addVisible = false
        this.reload()
      } else {
        Message.error(response?.msg)
      }
    },
    closeAddModal(){
      this.addVisible = false
      this.detail = undefined
    },
    onTableSelect(value: any){
      this.$emit('select', value)
    },
    reload(){
      this.$refs['tableRef'].reload()
    },
    doLayout(){
      this.$refs['tableRef'].doLayout()
    },
    clearSelectRows(){
      this.$refs['tableRef'].clearSelectRows()
    },
    getSelectedRows(){
      return this.$refs['tableRef'].getSelectedRows()
    },
    getParams(){
      return this.$refs['tableRef'].getParams()
    },
    getDataSource(){
      return this.$refs['tableRef'].getDataSource()
    },
    toggleRowSelection(row: any){
      this.$refs['tableRef'].toggleRowSelection(row)
    },
  },
  expose: ['reload', 'doLayout', 'clearSelectRows', 'getSelectedRows', 'getParams', 'getDataSource', 'toggleRowSelection'],
})
</script>
