<template>
  <div
    :class="[
      'l-table-container',
      { 'l-table-selection-radio-container': selectType === 'radio' },
    ]"
    v-loading="pageLoading"
  >
    <div
      :class="[
        'l-table-content',
        {
          'l-table-content-empty': isTableEmpty && !emptyInTable,
        },
      ]"
      :style="_noPadding ? 'padding: 0' : undefined"
    >
      <template v-if="isTableEmpty && !emptyInTable && !pageLoading">
        <slot name="empty">
          <b-empty title="暂无数据"></b-empty>
        </slot>
      </template>
      <template v-else>
        <el-table
          ref="tableRef"
          :stripe="_stripe"
          :data="dataSource || _dataSource"
          :style="`width: 100%; ${tableStyle || ''}`"
          height="100%"
          v-bind="attrs"
          :empty-text="_empty"
          :border="_border"
          :row-key="_rowKey"
          :tree-props="treeProps"
          :load="load"
          :lazy="Boolean(load)"
          tooltip-effect="light"
          @select="onSelect"
          @selection-change="onSelectionChange"
        >
          <el-table-column
            v-if="selection"
            type="selection"
            :reserve-selection="true"
            width="40"
            align="center"
            :selectable="selectableFun"
          />
          <el-table-column
            v-if="Boolean(showIndex)"
            type="index"
            align="center"
            :index="calcIndex"
            :label="indexText"
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
            } in columns"
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
              {{ _empty }}
            </slot>
          </template>
        </el-table>
      </template>
    </div>
    <div
      v-if="(!isTableEmpty || emptyInTable) && !disabledPage"
      class="l-table-pagination"
    >
      <el-pagination
        :current-page.sync="dParams[_currentKey]"
        :page-size="dParams[_pageSizeKey]"
        :layout="finallyLayout"
        :total="dParams.total"
        :hide-on-single-page="_hideOnSinglePage"
        @current-change="handleCurrentChange"
        @size-change="handlePageSizeChange"
      >
        <!--        hide-on-single-page-->
        <slot name="l-table-pagination">
          <span key="1">
            {{ dParams[_currentKey] }} / {{ dParams[_pageSizeKey] }}
          </span>
        </slot>
      </el-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  PropType,
} from 'vue'
import dayjs from 'dayjs'
import { isEmpty } from '../../utils/index'


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

export default defineComponent({
  name: 'LTable',
  props: {
    columns: {
      type: Array as PropType<ColumnsType[]>,
      required: true,
      default: () => []
    },
    dataSource: {
      type: Array as PropType<any[]>,
      required: false,
    },
    emptyText: {
      type: String,
      required: false,
      default: undefined
    },
    empty: {
      type: String,
      required: false,
      default: undefined
    },
    stripe: {
      type: Boolean,
      required: false,
      default: undefined
    },
    emptyInTable: {
      type: Boolean,
      required: false,
      default: true
    },
    disabledPage: {
      type: Boolean,
      required: false,
      default: false
    },
    action: {
      type: String,
      required: false,
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
      default: false
    },
    noPadding: {
      type: Boolean,
      required: false,
      default: undefined
    },
    loading: {
      type: Boolean,
      required: false,
    },
    hideOnSinglePage: {
      type: Boolean,
      required: false,
      default: undefined
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
    params: {
      type: Object as PropType<Record<string, any>>,
      required: false,
      default: undefined
    },
    method: {
      type: String as PropType<'POST' | 'GET'>,
      required: false,
      default: undefined,
    },
    autoLoadData: {
      type: Boolean,
      required: false,
      default: true
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
    tableStyle: {
      type: String,
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
    }
  },
  emits: ['select', 'change'],
  computed: {
    _emptyText(){
      return this.commonCalcKeyVal('emptyText', '-')
    },
    _rowKey(){
      return this.commonCalcKeyVal('rowKey', 'id')
    },
    _empty(){
      return this.commonCalcKeyVal('empty', '- 暂无数据 -')
    },
    _method(){
      return this.commonCalcKeyVal('method', 'GET')
    },
    _stripe(){
      return this.commonCalcKeyVal('stripe', false)
    },
    _border(){
      return this.commonCalcKeyVal('border', true)
    },
    _noPadding(){
      return this.commonCalcKeyVal('noPadding', false)
    },
    _currentKey(){
      return this.commonCalcKeyVal('currentKey', 'current')
    },
    _defaultCurrentValue(){
      return this.commonCalcKeyVal('defaultCurrentValue', 1)
    },
    _defaultPageSizeValue(){
      return this.commonCalcKeyVal('defaultPageSizeValue', 20)
    },
    _pageSizeKey(){
      return this.commonCalcKeyVal('pageSizeKey', 'pageSize')
    },
    _hideOnSinglePage(){
      return this.commonCalcKeyVal('hideOnSinglePage', false)
    },
    DEFAULT_PAGINATION(){
      return {
        [this._currentKey]: this._defaultCurrentValue,
        [this._pageSizeKey]: this._defaultPageSizeValue,
      }
    },
    pageLoading(){
      return this.loading !== undefined ? this.loading : this._loading
    },
    isTableEmpty(){
      return !(this.dataSource || this._dataSource)?.length
    },
    attrs(){
      return this.$attrs
    },
    finallyLayout(){
      return this.commonCalcKeyVal('layout', 'total, prev, pager, next, jumper, sizes')
    },
    tableFetch(){
      return this.$CN_V2C_LTABLE_CONFIG.request || fetch
    },
    _formatResponse(){
      return this.formatResponse || this.$CN_V2C_LTABLE_CONFIG.formatResponse
    }
  },
  data(){
    return{
      dParams: {
        total: 0,
      },
      _dataSource: [],
      _loading: true,
      selectedRows: [],
    }
  },
  methods: {
    commonCalcKeyVal(key: string, defaultValue: any){
      return this[key] !== undefined ? this[key] : this.$CN_V2C_LTABLE_CONFIG[key] !== undefined ? this.$CN_V2C_LTABLE_CONFIG[key] : defaultValue
    },
    calcIndex(index: number){
      if (typeof this.showIndex === 'function') {
        return this.showIndex({
          index,
          current: this.dParams[this._currentKey],
          pageSize: this.dParams[this._pageSizeKey],
          text:
            (this.dParams[this._currentKey] - 1) *
            this.dParams[this._pageSizeKey] +
            (index + 1),
        })
      }
      return (
        (this.dParams[this._currentKey] - 1) * this.dParams[this._pageSizeKey] +
        (index + 1)
      )
    },
    doLayout(){
      this.$nextTick(() => {
        this.$refs['tableRef']?.doLayout()
      })
    },
    selectableFun(record: any, index: number){
      return this.selectable?.(record, index) ?? true
    },
    onSelect(_: any[], row: any){
      if (this.selectType === 'radio') {
        this.$refs['tableRef']?.clearSelection()
        this.$nextTick(() => {
          this.$refs['tableRef']?.toggleRowSelection(row, true)
          // emits('select', row)
        })
      } else {
        // emits('select', selection, row)
      }
    },
    onSelectionChange(selection: any[]){
      this.$nextTick(() => {
        this.selectedRows = selection
        if (this.selectType === 'radio') {
          this.$emit(
            'select',
            selection?.length > 1 ? selection[selection.length - 1] : selection[0]
          )
        } else {
          this.$emit('select', selection)
        }
      })
    },
    async fetchData(params: Record<any, any>){
      if (this.onSearchClearSelectedRows) {
        this.$refs['tableRef']?.clearSelection()
      }
      let response: any
      this._loading = true
      if (this.action) {
        response = await this.tableFetch(this.action, {
          [this._method === 'GET' ? 'params' : 'data']: {
            ...params,
            ...this.params,
          },
          method: this.method,
        }).catch(err => {
          console.log(err)
          this._loading = false
        })
      } else if (this.request) {
        response = await this
          .request({ ...params, ...this.params })
          .catch(eeee => {
            console.log(eeee)
            this._loading = false
          })
      }
      this._loading = false
      if (response?.success) {
        response = this._formatResponse
          ? this._formatResponse(response, 'resolve')
          : response
        this._dataSource = response.meta?.data || []
        this.dParams.total = response.total
      } else {
        response = this._formatResponse
          ? this._formatResponse(response, 'reject')
          : false
        if (response) {
          this._dataSource = response.meta?.data || []
          this.dParams.total = response.total
        } else {
          this._dataSource = []
          this.dParams.total = 0
        }
      }
      this.$nextTick(() => {
        this.doLayout()
      })
    },
    search(){
      const { total, ...params } = this.dParams
      this.fetchData(params)
    },
    handleCurrentChange(current: number){
      this.dParams[this._currentKey] = current
      this.search()
    },
    handlePageSizeChange(pageSize: number){
      this.dParams[this._pageSizeKey] = pageSize
      this.search()
    },
    formatValue(
      record: any,
      dataIndex: string,
      valueType?: string,
      render?: Function
    ){
      if (isEmpty(record[dataIndex])) {
        return render ? render(record[dataIndex], record) : this._emptyText
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
    },
    reload(){
      this.search()
    },
    reset(){
      this.handleCurrentChange(1)
    },
    jumpPage(page: number){
      this.handleCurrentChange(page)
    },
    clearSelectRows(){
      this.$refs['tableRef']?.clearSelection()
    },
    getParams(){
      return {
        ...this.dParams,
        ...this.params,
      }
    },
    getSelectedRows(){
      return [...this.selectedRows]
    },
    toggleRowSelection(row: any){
      this.$refs['tableRef']?.toggleRowSelection(row, true)
    },
    getDataSource(){
      return this._dataSource
    },
    onParamsActionChange(){
      this.dParams = {
        ...this.dParams,
        ...this.DEFAULT_PAGINATION,
      }
      this.fetchData(this.DEFAULT_PAGINATION)
    },
  },
  expose: ['clearSelectRows', 'jumpPage', 'reload', 'reset', 'getParams', 'getSelectedRows', 'doLayout', 'toggleRowSelection', 'getDataSource'],
  watch: {
    params: {
      handler(){
        this.onParamsActionChange()
      },
      deep: true,
    },
    action: {
      handler(){
        this.onParamsActionChange()
      },
      deep: true,
    },
  },
  mounted() {
    if (this.autoLoadData && !this.dataSource) {
      this.onParamsActionChange()
    }
    if (this.dataSource) {
      this._loading = false
    }
    window.addEventListener('resize', this.doLayout)
  },
  destroyed() {
    window.removeEventListener('resize', this.doLayout)
  },
})
</script>
