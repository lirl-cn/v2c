<template>
  <div ref="cn-table--container" class="cn-table--container">
    <!-- 表格搜索部分 -->
    <div :class="['cn-table-search-container', { 'cn-table-search-inline-container': __searchType === 'inline' }]"
      v-if="search">
      <cn-form ref="search-table-search-form" :data="ownSearchList" :layout="__searchType" :columns="__searchColumns">
        <div :style="(__searchType === 'grid' && isSearchOpen) ? {'grid-column': `span ${__searchBtnContainerSpan}`} : undefined" :class="[
          'cn-table-search-btn-container',
          { 'cn-table-search-btn-block-container': __searchType === 'block' }
        ]">
          <slot name="operationsBtnPrefix"></slot>
          <el-button v-if="__searchText !== false" class="cn-table-search-btn-search" size="small" type="primary"
            @click="onSearch">{{ __searchText }}</el-button>
          <el-button v-if="__resetText !== false" class="cn-table-search-btn-reset" size="small" @click="_onReset">{{
              __resetText
          }}</el-button>
          <slot name="operationsBtnSuffix"></slot>
          <template v-if="__searchType === 'grid' && ownSearchList.length > __searchColumns - 1">
            <a class="cn-table-search-operation" @click="toggleSearchPanel" v-if="isSearchOpen">收起 <i class='el-icon-arrow-up'/></a>
            <a class="cn-table-search-operation" @click="toggleSearchPanel" v-else>展开 <i class='el-icon-arrow-down'/></a>
          </template>
        </div>
        <template v-for="{ name } in ownSearchList" v-slot:[`${name}FormExtra`]>
          <slot :name="`${name}FormExtra`"></slot>
        </template>
      </cn-form>
    </div>
    <div v-if="__setting !== false || $scopedSlots['headTitle'] || $scopedSlots['headOperation']" class="cn-table-head-container">
      <div class="cn-table-head-title">
        <slot name="headTitle">{{title}}</slot>
      </div>
      <div class="cn-table-head-operation">
        <slot name="headOperation"></slot>
      </div>
      <div v-if="__setting !== false" class="cn-table-head-setting">
        <i v-if="Array.isArray(__setting) && __setting.indexOf('fullScreen') !== -1" class="el-icon-help" title="全屏切换" @click="toggleFullScreen"></i>
        <i v-if="Array.isArray(__setting) && __setting.indexOf('reload') !== -1" class="el-icon-refresh" title="刷新" @click="reload"></i>
      </div>
    </div>
    <!-- 表格主体 -->
    <div class="cn-table-container">
      <div v-if="selectedRows?.length" class="cn-table-alert-container">
        <div class="cn-table-alert-info-content">
          <slot name="alertInfoContent" v-bind:selectedRows="selectedRows">
            已选
            {{selectedRows?.length}}
            项
            <a @click="_clearSelectRows">取消选择</a>
          </slot>
        </div>
        <div class="cn-table-alert-info-options">
          <slot name="alertInfoOptions" v-bind:selectedRows="selectedRows">
            <a @click="rowSelection?.onBatchDelete?.(selectedRows)">{{rowSelection?.batchDeleteText || $CN_V2C_TABLE_CONFIG?.rowSelection?.batchDeleteText || '批量删除'}}</a>
            <a @click="rowSelection?.onBatchDownload?.(selectedRows)">{{rowSelection?.batchDownloadText || $CN_V2C_TABLE_CONFIG?.rowSelection?.batchDownloadText || '导出数据'}}</a>
          </slot>
        </div>
      </div>
      <el-table v-loading="ownLoading" :data="dataSource || ownDataSource" :height="scroll ? scroll.y : undefined"
        :key="__pagination.current" :row-key="rowKey" @selection-change="selectionLineChangeHandle"
        select-on-indeterminate :class="tableClassName" size="small" :border="true" ref="cn-table-container">
        <!-- class="cn-table-bordered-small-container" -->
        <el-table-column v-if="rowSelection" type="selection" class-name="cn--text-center" width="48"></el-table-column>
        <el-table-column v-if="Boolean(showIndex)" type="index" :index="calcIndex" label="序号" class-name="cn--text-center" width="46"></el-table-column>
        <cn-column v-for="({
        title,
        dataIndex,
        width,
        minWidth,
        ellipsis,
        fixed,
        valueEnum,
        status,
        scopedSlots = {},
        children,
        className,
        render,
      },
        index) in tableColumns" :key="title + dataIndex + index" :width="width" :minWidth="minWidth"
          :className="className" :ellipsis="ellipsis" :fixed="fixed" :title="title" :dataIndex="dataIndex"
          :status="status" :valueEnum="valueEnum" :children="children" :rend="render" :autoCalcWidth="autoCalcWidth">
          <template v-if="showSlot(scopedSlots.customRender || dataIndex)" v-slot:[dataIndex]="{ text, record, index: ind }">
            <slot :name="scopedSlots.customRender || dataIndex" v-bind:record="record" v-bind:text="text" v-bind:index="ind"></slot>
          </template>
        </cn-column>
      </el-table>
    </div>
    <!-- 表格分页器 -->
    <div class="cn-table-pagination-container" v-if="pagination !== false && (dataSource || ownDataSource).length !== 0">
      <cn-el-pagination :onChange="handleTableChange" :current="__pagination.current" :page-size="__pagination.pageSize"
        :pageSizeOptions="__pagination?.pageSizeOptions" :total="__pagination.total">
      </cn-el-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import type { DataType as FormItemPropType } from '#/cn-form/src/index.vue';
import { FormItemType, OptionsType } from '#/common';
import type { PropType } from 'vue';
import type { HTMLAttributes, StyleValue } from 'vue/types/jsx';
import { VNode } from 'vue/types/umd';
import CnForm from '../../cn-form';
import CnElPagination from '../../cn-pagination';
import CnColumn from './column.vue';
export type ParamsType = {
  page: number;
  size: number;
  [k:string]: any;
}
export type ResponseDataType = {
  success?: boolean,
  data: any[]
  total: number;
}

type StatusType = 'success' | 'error' | 'default' | 'processing' | 'warning';
type ValueEnumType = {
  [k:string]: {
    text: string
    status: StatusType
  }
}
type SearchType = {
  type?: 'inline' | 'gird' | 'block' // 搜索排列样式
  columns?: number // 几列
  resetText?: string | false  // 重置文案
  searchText?: string | false // 搜索文案
  rangeExtra?: [string, string] // 区间选择额外增加的字段
  rangeExtraPlacement?: "start" | "end"  // 区间选择额外增加字段的位置
}
type ColumnType = {
  dataIndex: string // 表单唯一值，该列基于哪个字段显示，支持a.b.c但不建议
  title: string // 单元格名称文案
  searchTitle?: string  // 搜索框显示的文案。若为空默认显示title
  searchStyle?: StyleValue  // 搜索框样式
  name?: string // 
  key?: string
  searchName?: string // 搜索时传参名称，若为空默认显示dataIndex
  status?: StatusType // 状态
  valueType?: FormItemType // 搜索框类型
  valueEnum?: ValueEnumType // 枚举
  valueOptions?: OptionsType // 选择性组件数据源
  fetchOptions?: () => ValueEnumType | OptionsType | Promise<OptionsType> | Promise<ValueEnumType> // 方法的方式获取valueEnum ｜ valueOptions
  formItemProps?: HTMLAttributes & any // object 绑定给el-form-item的attrs
  fieldItemProps?: HTMLAttributes & any  // object 绑定给 表单组件 的attrs
  hideInTable?: boolean // 在表格中隐藏
  hideInSearch?: boolean // 在搜索中隐藏
  ellipsis?: boolean // 超出隐藏
  width?: number // 宽度
  scopedSlots?: { customRender?: string, [k: string]: any }
  children?: ColumnType[],
  className?: string,
  render?: () => string | VNode,
  minWidth?: number | string,
  fixed: 'left' | 'right',
  rangeExtra?: [string, string] // 区间选择额外增加的字段
  rangeExtraPlacement?: "start" | "end"  // 区间选择额外增加字段的位置
}
type PaginationType = {
  defaultPageSize?: number
  pageSizeOptions?: number[]
  current?: number
  pageSize?: number
}
type SelectedRowsResponse = {
  selectedRows: any[]
}
export type RowSelectionType = {
  batchDeleteText?: string  // 批量删除文案
  batchDownloadText?: string  // 批量导出文案
  onBatchDelete?: (selectedRows: SelectedRowsResponse['selectedRows']) => void  // 批量删除调用的方法
  onBatchDownload?: (selectedRows: SelectedRowsResponse['selectedRows']) => void  // 批量导出调用的方法
  onChange?: (selectedRows: SelectedRowsResponse['selectedRows']) => void // 当选择行变化时调用
}
type ActionRefType = {
  onSearch: () => void  // 搜索
  onReset: () => void // 重置
  onReload: () => void  // 重新加载
  getSearchParams<T = ParamsType>(): T | Promise<T>  // 获取所以搜索参数
  setSearchFieldsValue<T = any>(fieldsValue: T): void // 设置搜索参数
  getSelectedRows: () => SelectedRowsResponse // 获取选择的数据
}
type SettingKeyType = 'reload' | 'fullScreen';
const DEFAULT_RESPONSE_DATA = {
  success: true,
  data: [],
  total: 0,
}
const HIDDEN_CLASS_NAME = 'cn-form-item-hidden';
export default {
  name: 'cn-table',
  components: {
    CnElPagination,
    CnForm,
    CnColumn,
  },
  props: {
    tableClassName: String,
    setting: {
      type: [Array, Boolean] as PropType<false | SettingKeyType[]>,
      default: () => ['reload', 'fullScreen']
    },
    resetText: {
      type: [String, Boolean] as PropType<string | false>,
      default: "重置"
    },
    searchText: {
      type: [String, Boolean] as PropType<string | false>,
      default: "查询"
    },
    title: {
      type: [String, Boolean] as PropType<string | false>,
      default: ""
    },
    rowKey: {
      type: String,
      default: undefined
    },
    // 搜索类型： inline行内显示，gird分列显示默认为3，block全部独占一行 默认为gird
    searchType: {
      type: String as PropType<'gird' | 'block' | 'inline'>,
      default: "gird"
    },
    searchColumns: {
      type: Number,
      default: 3
    },
    scroll: {
      type: [Object, false] as PropType<{ y?: string |number } | false>,
    },
    // 请求地址
    action: String,
    // 页面加载成功后是否自动发起一次数据请求，默认为true
    onloadAutoRequest: {
      type: Boolean,
      default: true
    },
    showIndex: {
      type: [Boolean , Function] as PropType<boolean | ((params: {index: number, current: number, pageSize: number, text: string | number}) => string)>,
      default: undefined
    },
    // 请求方法，优先级大于action ，返回参数必须为，并包含所写参数 {data: [], total: number, success: boolean}
    request: Function as PropType<(params: ParamsType) => ResponseDataType>,
    // 请求方式，默认为post request 为空 action有值时触发
    method: {
      type: String as PropType<"GET" | "POST">,
      default: undefined
    },
    /**
     * 表格显示列
     * {
     *    dataIndex: string 表单唯一值，该列基于哪个字段显示，支持a.b.c
     *    title： string  表头文案
     *    searchTitle： string 搜索文案，若为空，则默认为title
     *    status: 状态点显示 'success' | 'error' | 'default' | 'processing' | 'warning',
     *    valueType： string  form-item类型，后续如果新增需要在组件内加入新组件
     *    valueEnum: object{text: string, status: string} 格式化显示
     *    options： {label:string, value: string|number}[]  select、checkbox等组件的数据源 后续新增的组件需要数据源也可复用该字段
     *    formItemProps：object 绑定给el-form-item的attrs
     *    fieldItemProps：object 绑定给 表单组件 的attrs
     *    hideInTable: 在列表中隐藏
     *    hideInSearch: 在搜索条件中隐藏
     *    ellipsis: 超出隐藏
     *    width: 宽度
     * }[]
     *  */

     columns: {
      type: Array as PropType<ColumnType[]>,
      default: () => []
    },
    dataSource: {
      type: Array as PropType<any[]>,
      default: undefined
    },
    // 是否显示分页
    pagination: {
      type: [Boolean, Object] as PropType<false | PaginationType>,
      default: undefined,
    },
    // 是否显示分页
    showPagination: {
      type: Boolean,
      default: true
    },
    defaultPageSize: {
      type: Number,
      default: 20
    },
    pageSizeOptions: {
      type: Array,
      default: () => [10, 20, 50, 100]
    },
    // 是否显示搜索条件
    search: {
      type: [Boolean, Object] as PropType<false | SearchType>,
      default: true
    },
    searchDateRangeExtra: {
      // search时range
      type: Array,
      default: () => ["StartTime", "EndTime"]
    },
    searchDateRangeExtraPlacement: {
      type: String as PropType<"start" | "end">,
      default: "end"
    },
    // 请求时额外的参数
    data: {
      type: [Object , Promise],
      default: () => ({})
    },
    // actionRef可以获取用于控制表格的一些方法
    actionRef: {
      type: Function as PropType<(node: ActionRefType) => void>, // 获取表格的方法
      default: undefined
    },
    // 在请求之前对请求数据进行转换的方法，需要返回一个对象用于请求接口的参数
    beforeSearchSubmit: {
      type: Function as PropType<<T = ParamsType>(params: ParamsType) => T >,
      default: undefined
    },
    // 在请求结束之后表格数据赋值之前对response数据进行转换的方法，需要返回一个对象并必须包含这些参数 {data: any[], total: number, success: boolean}
    formatResponse: {
      type: Function as PropType<<T = any>(response: T) => ResponseDataType | Promise<ResponseDataType>>, // 拿到数据后格式化调用
      default: undefined
    },
    catchFetchDataError: {
      type: Function as PropType<(error: Error) => void>, // 监听action方式的报错
      default: undefined
    },
    watchReset: {
      type: Function as PropType<() => void>, // 监听重置方法的调用
      default: undefined
    },
    loading: Boolean,
    rowSelection: {
      type: Object as PropType<RowSelectionType>,
      default: undefined
    },
    emptyText: {
      type: String,
      default: '-'
    },
    autoCalcWidth: {
      type: [Boolean , Number],
      default: false,
    }
  },
  data() {
    return {
      searchList: [] as FormItemPropType[],
      tableColumns: [] as ColumnType[],
      ownPagination: {
        defaultCurrent: 1,
        current: 1,
        pageSize: this.defaultPageSize,
        total: 0,
        showTotal: (total: number) => `共 ${total} 条`,
        pageSizeOptions: this.pageSizeOptions,
        showQuickJumper: true,
        showSizeChanger: true
      },
      searchTypesMap: {} as {[k: string]: any},
      ownDataSource: [],
      ownLoading: false,
      searchData: {},
      _cacheSearchValues: {} as {[k: string]: any},
      // selectedRowKeys: [],
      selectedRows: [],
      isFullScreen: false,
      isSearchOpen: true,
    };
  },
  methods: {
    calcIndex(index: number) {
      if (typeof this.showIndex === 'function') {
        return this.showIndex({ index, current: this.__pagination.current, pageSize: this.__pagination.pageSize, text: (this.__pagination.current - 1) * this.__pagination.pageSize + (index + 1) })
      }
      return (this.__pagination.current - 1) * this.__pagination.pageSize + (index + 1)
    },
    showSlot(dataIndex: any) {
      // console.log(this.$scopedSlots, dataIndex)
      return Boolean(this.$scopedSlots[dataIndex])
    },
    _clearSelectRows(){
      (this.$refs['cn-table-container'] as any).clearSelection();
    },
    selectionLineChangeHandle(selectedRows: any[]) {
      // this.$set(this, 'selectedRowKeys', selectedRowKeys);
      this.$set(this, "selectedRows", selectedRows);
      if (this.rowSelection) {
        const { onChange } = this.rowSelection;
        if (onChange) {
          onChange(selectedRows);
        }
      }
    },
    // value 格式化
    formatValue(name: string, value: any) {
      if (value === undefined || value === null || value === "") {
        return undefined;
      }
      switch (this.searchTypesMap[name].type) {
        // todo 预留格式转换
        case "date-range":{
          const rangeExtraPlacement =
            this.searchTypesMap[name].rangeExtraPlacement ||
            this.__searchDateRangeExtraPlacement;
          const v = value || [];
          const params:{[k: string]: any} = {};
          const start = v[0] ? v[0].split(" ")[0] + " 00:00:00" : undefined;
          const end = v[1] ? v[1].split(" ")[0] + " 23:59:59" : undefined;
          if (rangeExtraPlacement === "start") {
            const rangeExtra =
              this.searchTypesMap[name].rangeExtra || this.__searchDateRangeExtra;
            params[`${rangeExtra[0]}${name}`] = start;
            params[`${rangeExtra[1]}${name}`] = end;
          } else {
            const rangeExtra =
              this.searchTypesMap[name].rangeExtra || this.__searchDateRangeExtra;
            params[`${name}${rangeExtra[0]}`] = start;
            params[`${name}${rangeExtra[1]}`] = end;
          }
          return params;
        }
        // case "date-month-range": 
        default: {
          return value;
        }
      }
    },
    async _onReset() {
      this.$refs["search-table-search-form"] &&
        (this.$refs["search-table-search-form"] as any).resetFields();
      this.searchData = {};
      this._cacheSearchValues = {};
      this.fetchDataSource(
        this.__pagination.defaultCurrent,
        this.__pagination.pageSize,
        {}
      );
      this.watchReset && this.watchReset();
    },
    async reload() {
      this.fetchDataSource(
        this.__pagination.current,
        this.__pagination.pageSize,
        {}
      );
    },
    async preData() {
      this.jump(this.__pagination.current > 1 ? this.__pagination.current - 1 : 1)
    },
    async jump(current: number) {
      this.fetchDataSource(
        current,
        this.__pagination.pageSize,
        {}
      );
    },
    setSearchFieldsValue(fields: any) {
      (this.$refs["search-table-search-form"] as any).setFieldsValue(fields);
    },
    async getSearchParams<T=ParamsType>():Promise<T> {
      let values = await (this.$refs[
        "search-table-search-form"
      ] as any).getFieldsValue();
      if(!this.isSearchOpen){
        const showItems = this.searchList.filter((item: any) => !item.formItemProps?.class || item.formItemProps?.class?.indexOf(HIDDEN_CLASS_NAME) === -1).map((item:any) => item.name);
        values = {
          ...this._cacheSearchValues,
          ...showItems.reduce((pre, cur) => {
            pre[cur] = values[cur];
            return pre;
          }, {}),
        }
      }
      const valueNames = Object.keys(values);
      let params:any = {};
      valueNames.length &&
        valueNames.forEach(name => {
          const value = this.formatValue(name, values[name]);
          if (
            // todo 后期要不要改为判断 value 是否为对象
            this.searchTypesMap[name]?.type === "date-range" ||
            this.searchTypesMap[name]?.type === "date-month-range"
          ) {
            params = { ...params, ...value };
          } else {
            params[name] = value;
          }
        });
      return params;
    },
    // 查询
    async onSearch() {
      const params = this.search ? await this.getSearchParams() : {};
      // console.log(params)
      this.searchData = params;
      this.fetchDataSource(
        this.__pagination.defaultCurrent,
        this.__pagination.pageSize,
        params
      );
    },
    // 表格分页改变
    handleTableChange(current:number, pageSize: number) {
      this.fetchDataSource(current, pageSize);
    },
    // 表格数据请求
    async fetchDataSource(current:number, pageSize: number, data?: any, options?: any) {
      this.ownLoading = true;
      let params = {
        ...(await this.data as any),
        ...this.searchData,
        ...data,
        [this.$CN_V2C_TABLE_CONFIG.current.key]: this.$CN_V2C_TABLE_CONFIG.current.format ? this.$CN_V2C_TABLE_CONFIG.current.format(current) : current,
        [this.$CN_V2C_TABLE_CONFIG.pageSize.key]: this.$CN_V2C_TABLE_CONFIG.pageSize.format ? this.$CN_V2C_TABLE_CONFIG.pageSize.format(pageSize) : pageSize
      };
      // 请求之前是否需要转下数据
      params = this.beforeSearchSubmit
        ? this.beforeSearchSubmit(params)
        : params;
      if (this.request) {
        let response:any = await this.request(params);
        response = this.formatResponse
          ? this.formatResponse(response)
          : response;
        this.ownLoading = false;
        this.$set(this, "ownDataSource", response.data);
        this.ownPagination = {
          ...this.__pagination,
          current,
          pageSize,
          total: response.total || 0
        };
      } else {
        let response: ResponseDataType;
        try {
          response = await (this.$CN_V2C_TABLE_CONFIG.request)(this.action || '/', {
            method: this.__method,
            [this.__method.toLocaleUpperCase() === "POST"
              ? "data"
              : "params"]: params,
            ...options
          });
          response = this.formatResponse
            ? await this.formatResponse(response)
            : response;
        } catch (error: Error) {
          this.catchFetchDataError?.(error)
          response = DEFAULT_RESPONSE_DATA
          current = 1;
        }
        this.ownLoading = false;
        if (response.success !== false) {
          this.$set(this, "ownDataSource", response.data);
          this.ownPagination = {
            ...this.__pagination,
            current,
            pageSize,
            total: response.total || 0
          };
        } else {
          this.$set(this, "ownDataSource", []);
          this.ownPagination = {
            ...this.__pagination,
            current: 1,
            pageSize,
            total: 0
          };
        }
      }
    },
    deepRenderText(record:any, keys: string[]):string {
      if (!record[keys[0]]) {
        return this.emptyText;
      }
      if (keys.length === 1) {
        return record[keys[0]];
      }
      return this.deepRenderText(record[keys[0]], keys.slice(1));
    },
    renderText(record:any, dataIndex: string, valueEnum: ValueEnumType) {
      const keys = dataIndex.split(".");
      let current;
      if (keys.length === 1) {
        current = valueEnum ? valueEnum[record[dataIndex]] : record[dataIndex];
      } else {
        current = valueEnum
          ? valueEnum[this.deepRenderText(record, keys)].text
          : this.deepRenderText(record, keys);
      }
      if (valueEnum && current) {
        return {
          text:
            current.text !== undefined && current.text !== null
              ? current.text
              : this.emptyText,
          status: current.status
        };
      } else {
        return current !== undefined && current !== null ? current : this.emptyText;
      }
    },
    async toggleSearchPanel(){
      const values = await (this.$refs[
        "search-table-search-form"
      ] as any).getFieldsValue();
      // 当前状态为展开
      if(this.isSearchOpen){
        // 缓存的搜索参数
        this._cacheSearchValues = values;
        this.searchList = this.searchList.map((item, index) => {
          if(index < this.__searchColumns - 1){
            return item
          }else{
            return {
              ...item,
              formItemProps: {
                ...item.formItemProps,
                class: item.formItemProps?.class ? `${item.formItemProps.class} ${HIDDEN_CLASS_NAME}` : HIDDEN_CLASS_NAME,
              }
            }
          }
        })
        this.isSearchOpen = !this.isSearchOpen;
        this.$nextTick(() => {
          const showItems = this.searchList.filter(item => !item.formItemProps?.class || item.formItemProps?.class?.indexOf(HIDDEN_CLASS_NAME) === -1).map(item => item.name);
          (this.$refs["search-table-search-form"] as any).setFieldsValue({
            ...showItems.reduce((pre: any, cur: string) => {
              pre[cur] = values[cur];
              return pre;
            }, {}),
          })
        })
      }else{
        // 当前状态为收起
        // 取出显示的字段
        const showItems = this.searchList.filter(item => !item.formItemProps?.class || item.formItemProps?.class?.indexOf(HIDDEN_CLASS_NAME) === -1).map(item => item.name);
        this.searchList = this.searchList.map(item => ({
          ...item,
          formItemProps: {
            ...item.formItemProps,
            class: item.formItemProps?.class?.replace(HIDDEN_CLASS_NAME, '').trim(),
          }
        }))
        this.isSearchOpen = !this.isSearchOpen;
        this.$nextTick(() => {
          (this.$refs["search-table-search-form"] as any).setFieldsValue({
            ...this._cacheSearchValues,
            ...showItems.reduce((pre: any, cur: string) => {
              pre[cur] = values[cur];
              return pre;
            }, {}),
          })
        })
      }
    },
    toggleFullScreen() {
      // requestFullscreen()
      this.isFullScreen = !this.isFullScreen;
      this.$nextTick(() => {
        if (this.isFullScreen) {
          (this.$refs['cn-table--container'] as any).requestFullscreen()
        } else {
          document.exitFullscreen()
        }
      })
    },
    formatGetStaticValue(key: string, oldKey?: string) {
      return this.$CN_V2C_TABLE_CONFIG?.search?.[key] ?? (this.search === false ? false : (this.search as any)?.[key]) ?? this[oldKey || key]
    },
  },
  mounted() {
    !this.dataSource && this.onloadAutoRequest && this.onSearch();
    if (this.actionRef && typeof this.actionRef === "function") {
      this.actionRef(this.ownActionRef);
    }
  },
  computed: {
    __method(){
      return this.method || this.$CN_V2C_TABLE_CONFIG.method;
    },
    __setting(){
      return this.$CN_V2C_TABLE_CONFIG?.setting ?? this.setting
    },
    __pagination() {
      return typeof this.pagination === 'object' ? {
        ...this.ownPagination,
        pageSizeOptions: this.pageSizeOptions,
        ...this.pagination,
      } : { ...this.ownPagination, pageSizeOptions: this.pageSizeOptions };
    },
    __searchDateRangeExtraPlacement() {
      return this.formatGetStaticValue('dateRangeExtraPlacement', 'searchDateRangeExtraPlacement')
    },
    __searchDateRangeExtra() {
      return this.formatGetStaticValue('dateRangeExtra', 'searchDateRangeExtra')
    },
    __resetText() {
      return this.formatGetStaticValue('resetText')
    },
    __searchText() {
      return this.formatGetStaticValue('searchText')
    },
    __searchType() {
      return this.formatGetStaticValue('type', 'searchType')
    },
    __searchColumns() {
      return this.formatGetStaticValue('columns', 'searchColumns')
    },
    __searchBtnContainerSpan(){
      const i = this.ownSearchList.length % this.__searchColumns;
      return this.__searchColumns - i;
    },
    ownSearchList() {
      return [...this.searchList] as FormItemPropType[];
    },
    ownActionRef():ActionRefType {
      return {
        onSearch: this.onSearch,
        onReset: this._onReset,
        getSearchParams: this.getSearchParams,
        setSearchFieldsValue: this.setSearchFieldsValue,
        onReload: this.reload,
        // gotoPre: this.preData,
        // gotoJump: this.jump,
        getSelectedRows: () => {
          return {
            // selectedRowKeys: this.selectedRowKeys,
            selectedRows: this.selectedRows
          };
        }
      };
    }
  },
  watch: {
    loading(loading) {
      this.ownLoading = loading;
    },
    actionRef: {
      handler(val) {
        if (typeof val === "function") {
          val(this.ownActionRef);
        }
      }
    },
    columns: {
      async handler(val: ColumnType[]) {
        const searchTypesMap: {[k: string | undefined]: any} = {};
        // format 搜索项 默认operate为操作列，不参与搜索
        let searchList = this.search
          ? await Promise.all(val
            .filter(
              ({ hideInSearch, dataIndex }) =>
                dataIndex !== "operate" && !hideInSearch
            )
            .map(async item => {
              const type =
                item.valueType ||
                (item.valueOptions || item.fetchOptions || item.valueEnum ? "select" : "input");
              const name =
                item.searchName || item.name || item.dataIndex || item.key;
              let options:OptionsType = [];
              if(item.fetchOptions && typeof item.fetchOptions === 'function') {
                let responseOpt;
                try {
                  responseOpt = await item.fetchOptions?.()
                } catch (error) {
                  console.error(item.dataIndex, '在fetchOptions时发生错误', error);
                }
                if(Array.isArray(responseOpt)){
                  item.valueOptions = responseOpt;
                }else if(typeof responseOpt === 'object'){
                  item.valueEnum = responseOpt;
                }
              }
              if (item.valueEnum) {
                options = (Object.keys(item.valueEnum).map(key => ({
                  label: item.valueEnum?.[key].text,
                  value: key
                })) as OptionsType);
              }
              if (item.valueOptions) {
                options = item.valueOptions as OptionsType;
              }
              searchTypesMap[name as string] = {
                type,
                // format: item.format,
                rangeExtra: item.rangeExtra,
                rangeExtraPlacement: item.rangeExtraPlacement,
                options,
              };
              return {
                ...item,
                name,
                type,
                options,
                title: item.searchTitle || item.title,
                style: item.searchStyle,
              };
            }))
          : [];
        // this.searchTypesMap = searchTypesMap;
        // this.searchList = searchList;
        this.$set(this, "searchTypesMap", searchTypesMap);
        this.$set(this, "searchList", searchList);
        this.$set(
          this,
          "tableColumns",
          val
            .filter(({ hideInTable }) => !hideInTable)
            .map(item => ({
              ...item,
              scopedSlots: item.scopedSlots || { customRender: item.dataIndex }
            }))
        );
        if (this.$refs["cn-table-container"]) {
          this.$nextTick(() => {
            (this.$refs['cn-table-container'] as any).doLayout()
          })
        }
      },
      immediate: true,
      deep: true
    }
  }
};
</script>
