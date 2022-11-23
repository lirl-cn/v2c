import type { HTMLAttributes, StyleValue } from 'vue/types/jsx';
import { ElementUIComponent } from './component';

export declare type ParamsType = {
  current: number;
  pageSize: number;
  [k: string]: any;
}
export declare type ResponseDataType = {
  success?: boolean,
  data: any[]
  total: number;
}
export declare type SearchType = {
  type?: 'inline' | 'gird' | 'block' // 搜索排列样式
  columns?: number // 几列
  resetText?: string | false
  searchText?: string | false
  rangeExtra?: [string, string]
  rangeExtraPlacement: "start" | "end"
}
export declare type StatusType = 'success' | 'error' | 'default' | 'processing' | 'warning';
export declare type ValueEnumType = {
  [k: string]: {
    text: string
    status: StatusType
  }
}
export declare type ColumnType = {
  dataIndex: string // 表单唯一值，该列基于哪个字段显示，支持a.b.c但不建议
  title: string
  searchTitle?: string
  searchStyle?: StyleValue
  name?: string
  key?: string
  searchName?: string
  status?: StatusType
  valueType?: ''
  valueEnum?: ValueEnumType
  valueOptions?: { label?: string, value?: string, [k: string]: any }[]
  formItemProps?: HTMLAttributes & any // object 绑定给el-form-item的attrs
  fieldItemProps?: HTMLAttributes & any  // object 绑定给 表单组件 的attrs
  hideInTable?: boolean // 在表格中隐藏
  hideInSearch?: boolean // 在搜索中隐藏
  ellipsis?: boolean // 超出隐藏
  width?: number // 宽度
  scopedSlots?: { customRender?: string, [k: string]: any }
}
type PaginationType = {
  defaultPageSize?: number
  pageSizeOptions?: number[]
}
export declare type SelectedRowsResponse = {
  selectedRows: any[]
}
export declare type ActionRefType = {
  onSearch: () => void
  onReset: () => void
  onReload: () => void
  getSearchParams<T = ParamsType>(): T
  setSearchFieldsValue<T = any>(fieldsValue: T): void
  getSelectedRows: () => SelectedRowsResponse
}

export declare type RowSelectionType = {
  batchDeleteText?: string
  batchDownloadText?: string
  onBatchDelete?: (selectedRows: SelectedRowsResponse['selectedRows']) => void
  onBatchDownload?: (selectedRows: SelectedRowsResponse['selectedRows']) => void
  onChange?: (selectedRows: SelectedRowsResponse['selectedRows']) => void
}

type SettingType = 'reload' | 'fullScreen'

export declare class CnTable extends ElementUIComponent {
  // 表格列数据
  columns: ColumnType[]
  title?: string // 表格标题
  resetText?: string;
  searchText?: string;
  rowKey?: string
  searchType?: SearchType['type'];
  searchColumns?: number
  scroll?: { y?: string | number };
  action?: string;
  request?: (params: ParamsType) => ResponseDataType
  onloadAutoRequest?: boolean
  showIndex?: boolean | ((params: { index: number, current: number, pageSize: number, text: string | number }) => string)
  method?: 'GET' | 'POST';
  pagination?: false | PaginationType // 是否显示分页信息
  search?: false | SearchType
  data?: any
  actionRef?: (node: ActionRefType) => void
  beforeSearchSubmit?<T = ParamsType>(params: ParamsType): T
  formatResponse?<T = any>(response: T): ResponseDataType
  catchFetchDataError?: (error: Error) => ResponseDataType | void
  watchReset?: () => void
  loading?: boolean
  autoCalcWidth?: false | number
  rowSelection?: RowSelectionType
  setting?: false | SettingType[]
}