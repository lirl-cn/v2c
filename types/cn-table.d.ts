import type { HTMLAttributes, StyleValue } from 'vue/types/jsx';
import type { FormItemType } from './cn-form';
import { ElementUIComponent } from './component';

export declare type ParamsType = {
  current: number;  // 当前页
  pageSize: number; // 一页显示多少条
  [k: string]: any;
}
export declare type ResponseDataType = {
  success?: boolean,  // 是否成功
  data: any[] // 数据源
  total: number;  // 一共多少数据
}
export declare type SearchType = {
  type?: 'inline' | 'gird' | 'block' // 搜索排列样式
  columns?: number // 几列
  resetText?: string | false  // 重置文案
  searchText?: string | false // 搜索文案
  rangeExtra?: [string, string] // 区间选择额外增加的字段
  rangeExtraPlacement?: "start" | "end"  // 区间选择额外增加字段的位置
}
export declare type StatusType = 'success' | 'error' | 'default' | 'processing' | 'warning';
export declare type ValueEnumType = {
  [k: string]: {
    text: string  // 文案
    status?: StatusType  // 状态
  }
}
export declare type ColumnType = {
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
  valueOptions?: { label?: string, value?: string, [k: string]: any }[] // 选择性组件数据源
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
  onSearch: () => void  // 搜索
  onReset: () => void // 重置
  onReload: () => void  // 重新加载
  getSearchParams<T = ParamsType>(): T  // 获取所以搜索参数
  setSearchFieldsValue<T = any>(fieldsValue: T): void // 设置搜索参数
  getSelectedRows: () => SelectedRowsResponse // 获取选择的数据
}

export declare type RowSelectionType = {
  batchDeleteText?: string  // 批量删除文案
  batchDownloadText?: string  // 批量导出文案
  onBatchDelete?: (selectedRows: SelectedRowsResponse['selectedRows']) => void  // 批量删除调用的方法
  onBatchDownload?: (selectedRows: SelectedRowsResponse['selectedRows']) => void  // 批量导出调用的方法
  onChange?: (selectedRows: SelectedRowsResponse['selectedRows']) => void // 当选择行变化时调用
}

type SettingType = 'reload' | 'fullScreen'

export declare class CnTable extends ElementUIComponent {
  columns: ColumnType[] // 表格列数据
  title?: string // 表格标题
  resetText?: string;
  searchText?: string;
  rowKey?: string // 行唯一，需要选择时必传
  searchType?: SearchType['type'];
  searchColumns?: number
  scroll?: { y?: string | number };
  action?: string;  // 若在main.js中传人了request方式，内部会将action地址传入方法中获取数据，当前组件request权重高
  request?: (params: ParamsType) => ResponseDataType  // 获取数据的方法
  onloadAutoRequest?: boolean // 是否自动加载
  showIndex?: boolean | ((params: { index: number, current: number, pageSize: number, text: string | number }) => string) // 显示序号
  method?: 'GET' | 'POST';  // action存在时有效，获取数据时调用方式
  pagination?: false | PaginationType // 是否显示分页信息
  search?: false | SearchType
  data?: any  // 调用接口额外的参数
  actionRef?: (node: ActionRefType) => void // 获取表格的方法
  beforeSearchSubmit?<T = ParamsType>(params: ParamsType): T  // 获取数据前调用
  formatResponse?<T = any>(response: T): ResponseDataType // 拿到数据后格式化调用
  catchFetchDataError?: (error: Error) => ResponseDataType | void // 监听action方式的报错
  watchReset?: () => void // 监听重置方法的调用
  loading?: boolean // 是否加载中
  autoCalcWidth?: false | number  // 自动计算宽度
  rowSelection?: RowSelectionType
  setting?: false | SettingType[]
}