import type { DataType as FormItemPropType } from '../../cn-form/src/index.vue';
import { FormItemType, OptionsType } from '../../common';
import type { PropType } from "vue";
import type { HTMLAttributes, StyleValue } from "vue/types/jsx";
import { VNode } from "vue/types/umd";
export declare type ParamsType = {
    page: number;
    size: number;
    [k: string]: any;
};
export declare type ResponseDataType = {
    success?: boolean;
    data: any[];
    total: number;
};
declare type StatusType = "success" | "error" | "default" | "processing" | "warning";
declare type ValueEnumType = {
    [k: string]: {
        text: string;
        status: StatusType;
    };
};
declare type SearchType = {
    type?: "inline" | "grid" | "block";
    labelWidth?: number | string;
    columns?: number;
    autoCalcColumns?: boolean;
    resetText?: string | false;
    searchText?: string | false;
    rangeExtra?: [string, string];
    rangeExtraPlacement?: "start" | "end";
    beforeReset?: () => void;
};
declare type ColumnType = {
    dataIndex: string;
    title: string;
    searchTitle?: string;
    searchStyle?: StyleValue;
    name?: string;
    key?: string;
    searchName?: string;
    status?: StatusType;
    valueType?: FormItemType;
    valueEnum?: ValueEnumType;
    valueOptions?: OptionsType;
    fetchOptions?: () => ValueEnumType | OptionsType | Promise<OptionsType> | Promise<ValueEnumType>;
    formItemProps?: HTMLAttributes & any;
    fieldItemProps?: HTMLAttributes & any;
    hideInTable?: boolean;
    hideInSearch?: boolean;
    ellipsis?: boolean;
    width?: number;
    scopedSlots?: {
        customRender?: string;
        [k: string]: any;
    };
    children?: ColumnType[];
    className?: string;
    render?: () => string | VNode;
    minWidth?: number | string;
    span?: number;
    fixed: "left" | "right";
    rangeExtra?: [string, string];
    rangeExtraPlacement?: "start" | "end";
};
declare type PaginationType = {
    defaultPageSize?: number;
    pageSizeOptions?: number[];
    current?: number;
    pageSize?: number;
};
declare type SelectedRowsResponse = {
    selectedRows: any[];
};
export declare type RowSelectionType = {
    selectText?: string;
    itemText?: string;
    cancelSelectText?: string;
    batchDeleteText?: string;
    batchDownloadText?: string;
    onBatchDelete?: (selectedRows: SelectedRowsResponse["selectedRows"]) => void;
    onBatchDownload?: (selectedRows: SelectedRowsResponse["selectedRows"]) => void;
    onChange?: (selectedRows: SelectedRowsResponse["selectedRows"]) => void;
    defaultSelectedRows?: any[];
    selectable?: (row: any, index: number) => boolean;
};
export declare type ActionRefType = {
    reload: () => void;
    search: () => void;
    reset: () => void;
    resetSelectedRows: () => void;
    onSearch: () => void;
    onReset: () => void;
    onReload: () => void;
    getSearchParams<T = ParamsType>(): T | Promise<T>;
    setSearchFieldsValue<T = any>(fieldsValue: T): void;
    getSelectedRows: () => SelectedRowsResponse;
    setSelectedRows: (rows: any[]) => void;
};
declare type SettingKeyType = "reload" | "fullScreen";
declare const _sfc_main: import("vue").DefineComponent<{
    tableClassName: StringConstructor;
    setting: {
        type: PropType<false | SettingKeyType[]>;
        default: () => string[];
    };
    othersTextEnum: {
        type: PropType<{
            [k: string]: string;
        }>;
        default: () => {
            "setting-reload": string;
            "setting-fullScreen": string;
            "table-index": string;
        };
    };
    resetText: {
        type: PropType<string | false>;
        default: string;
    };
    searchText: {
        type: PropType<string | false>;
        default: string;
    };
    openText: {
        type: PropType<string>;
        default: string;
    };
    closeText: {
        type: PropType<string>;
        default: string;
    };
    title: {
        type: PropType<string | false>;
        default: string;
    };
    rowKey: {
        type: StringConstructor;
        default: undefined;
    };
    searchType: {
        type: PropType<"grid" | "block" | "inline">;
        default: string;
    };
    searchColumns: {
        type: NumberConstructor;
        default: number;
    };
    scroll: {
        type: PropType<false | {
            y?: string | number | undefined;
        }>;
    };
    action: StringConstructor;
    onloadAutoRequest: {
        type: BooleanConstructor;
        default: boolean;
    };
    showIndex: {
        type: PropType<boolean | ((params: {
            index: number;
            current: number;
            pageSize: number;
            text: string | number;
        }) => string)>;
        default: undefined;
    };
    request: PropType<(params: ParamsType) => ResponseDataType>;
    method: {
        type: PropType<"POST" | "GET">;
        default: undefined;
    };
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
        type: PropType<ColumnType[]>;
        default: () => never[];
    };
    dataSource: {
        type: PropType<any[]>;
        default: undefined;
    };
    pagination: {
        type: PropType<false | PaginationType>;
        default: undefined;
    };
    showPagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultPageSize: {
        type: NumberConstructor;
        default: number;
    };
    pageSizeOptions: {
        type: ArrayConstructor;
        default: () => number[];
    };
    search: {
        type: PropType<false | SearchType>;
        default: boolean;
    };
    searchDateRangeExtra: {
        type: ArrayConstructor;
        default: () => string[];
    };
    searchDateRangeExtraPlacement: {
        type: PropType<"start" | "end">;
        default: string;
    };
    data: {
        type: (ObjectConstructor | PromiseConstructor)[];
        default: () => {};
    };
    actionRef: {
        type: PropType<(node: ActionRefType) => void>;
        default: undefined;
    };
    beforeSearchSubmit: {
        type: PropType<(<T = ParamsType>(params: ParamsType) => T)>;
        default: undefined;
    };
    formatResponse: {
        type: PropType<(<T_1 = any>(response: T_1) => ResponseDataType | Promise<ResponseDataType>)>;
        default: undefined;
    };
    catchFetchDataError: {
        type: PropType<(error: Error) => void>;
        default: undefined;
    };
    watchReset: {
        type: PropType<() => void>;
        default: undefined;
    };
    loading: BooleanConstructor;
    rowSelection: {
        type: PropType<RowSelectionType>;
        default: undefined;
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
    autoCalcWidth: {
        type: (NumberConstructor | BooleanConstructor)[];
        default: boolean;
    };
}, {}, {
    searchList: (FormItemPropType & {
        span: number;
    })[];
    tableColumns: ColumnType[];
    ownPagination: {
        defaultCurrent: number;
        current: number;
        pageSize: number;
        total: number;
        showTotal: (total: number) => string;
        pageSizeOptions: unknown[];
        showQuickJumper: boolean;
        showSizeChanger: boolean;
    };
    searchTypesMap: {
        [k: string]: any;
    };
    ownDataSource: never[];
    ownLoading: boolean;
    searchData: {};
    _cacheSearchValues: {
        [k: string]: any;
    };
    selectedRows: any[];
    isFullScreen: boolean;
    isSearchOpen: boolean;
    isSetDefaultSelectedRowed: boolean;
    autoCalcSearchSpans: number[][];
    autoSearchColumns: number;
    allSearchSpans: number;
    isInit: boolean;
}, {
    _autoCalcSearchColumns(): boolean;
    __method(): "POST" | "GET";
    __setting(): false | string[];
    __pagination(): any;
    __searchDateRangeExtraPlacement(): any;
    __searchDateRangeExtra(): any;
    __resetText(): any;
    __searchText(): any;
    __openText(): any;
    __closeText(): any;
    __searchType(): any;
    __searchLabelWidth(): any;
    __searchColumns(): any;
    ___searchColumns(): any;
    __searchBtnContainerSpan(): number;
    ownSearchList(): FormItemPropType[];
    ownActionRef(): ActionRefType;
}, {
    clearSelection(): void;
    toggleSelection(rows: any[]): void;
    setDefaultSelectedRow(): void;
    calcIndex(index: number): string | number;
    showSlot(dataIndex: any): boolean;
    selectionLineChangeHandle(selectedRows: any[]): void;
    formatValue(name: string, value: any): any;
    _onReset(): Promise<void>;
    reload(): Promise<void>;
    preData(): Promise<void>;
    jump(current: number): Promise<void>;
    setSearchFieldsValue(fields: any): void;
    getSearchParams<T_2 = ParamsType>(): Promise<T_2>;
    onSearch(): Promise<void>;
    handleTableChange(current: number, pageSize: number): void;
    fetchDataSource(current: number, pageSize: number, data?: any, options?: any): Promise<void>;
    deepRenderText(record: any, keys: string[]): string;
    renderText(record: any, dataIndex: string, valueEnum: ValueEnumType): any;
    toggleSearchPanel(reload?: boolean): Promise<void>;
    toggleFullScreen(): void;
    formatGetStaticValue(key: string, oldKey?: string): any;
    resize(): void;
    onMountedFetchData(): void;
}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    tableClassName: StringConstructor;
    setting: {
        type: PropType<false | SettingKeyType[]>;
        default: () => string[];
    };
    othersTextEnum: {
        type: PropType<{
            [k: string]: string;
        }>;
        default: () => {
            "setting-reload": string;
            "setting-fullScreen": string;
            "table-index": string;
        };
    };
    resetText: {
        type: PropType<string | false>;
        default: string;
    };
    searchText: {
        type: PropType<string | false>;
        default: string;
    };
    openText: {
        type: PropType<string>;
        default: string;
    };
    closeText: {
        type: PropType<string>;
        default: string;
    };
    title: {
        type: PropType<string | false>;
        default: string;
    };
    rowKey: {
        type: StringConstructor;
        default: undefined;
    };
    searchType: {
        type: PropType<"grid" | "block" | "inline">;
        default: string;
    };
    searchColumns: {
        type: NumberConstructor;
        default: number;
    };
    scroll: {
        type: PropType<false | {
            y?: string | number | undefined;
        }>;
    };
    action: StringConstructor;
    onloadAutoRequest: {
        type: BooleanConstructor;
        default: boolean;
    };
    showIndex: {
        type: PropType<boolean | ((params: {
            index: number;
            current: number;
            pageSize: number;
            text: string | number;
        }) => string)>;
        default: undefined;
    };
    request: PropType<(params: ParamsType) => ResponseDataType>;
    method: {
        type: PropType<"POST" | "GET">;
        default: undefined;
    };
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
        type: PropType<ColumnType[]>;
        default: () => never[];
    };
    dataSource: {
        type: PropType<any[]>;
        default: undefined;
    };
    pagination: {
        type: PropType<false | PaginationType>;
        default: undefined;
    };
    showPagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultPageSize: {
        type: NumberConstructor;
        default: number;
    };
    pageSizeOptions: {
        type: ArrayConstructor;
        default: () => number[];
    };
    search: {
        type: PropType<false | SearchType>;
        default: boolean;
    };
    searchDateRangeExtra: {
        type: ArrayConstructor;
        default: () => string[];
    };
    searchDateRangeExtraPlacement: {
        type: PropType<"start" | "end">;
        default: string;
    };
    data: {
        type: (ObjectConstructor | PromiseConstructor)[];
        default: () => {};
    };
    actionRef: {
        type: PropType<(node: ActionRefType) => void>;
        default: undefined;
    };
    beforeSearchSubmit: {
        type: PropType<(<T = ParamsType>(params: ParamsType) => T)>;
        default: undefined;
    };
    formatResponse: {
        type: PropType<(<T_1 = any>(response: T_1) => ResponseDataType | Promise<ResponseDataType>)>;
        default: undefined;
    };
    catchFetchDataError: {
        type: PropType<(error: Error) => void>;
        default: undefined;
    };
    watchReset: {
        type: PropType<() => void>;
        default: undefined;
    };
    loading: BooleanConstructor;
    rowSelection: {
        type: PropType<RowSelectionType>;
        default: undefined;
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
    autoCalcWidth: {
        type: (NumberConstructor | BooleanConstructor)[];
        default: boolean;
    };
}>>, {
    data: Record<string, any> | Promise<unknown>;
    search: false | SearchType;
    pageSizeOptions: unknown[];
    actionRef: (node: ActionRefType) => void;
    columns: ColumnType[];
    loading: boolean;
    setting: false | SettingKeyType[];
    othersTextEnum: {
        [k: string]: string;
    };
    resetText: string | false;
    searchText: string | false;
    openText: string;
    closeText: string;
    title: string | false;
    rowKey: string;
    searchType: "grid" | "block" | "inline";
    searchColumns: number;
    onloadAutoRequest: boolean;
    showIndex: boolean | ((params: {
        index: number;
        current: number;
        pageSize: number;
        text: string | number;
    }) => string);
    method: "POST" | "GET";
    dataSource: any[];
    pagination: false | PaginationType;
    showPagination: boolean;
    defaultPageSize: number;
    searchDateRangeExtra: unknown[];
    searchDateRangeExtraPlacement: "start" | "end";
    beforeSearchSubmit: <T = ParamsType>(params: ParamsType) => T;
    formatResponse: <T_1 = any>(response: T_1) => ResponseDataType | Promise<ResponseDataType>;
    catchFetchDataError: (error: Error) => void;
    watchReset: () => void;
    rowSelection: RowSelectionType;
    emptyText: string;
    autoCalcWidth: number | boolean;
}>;
export default _sfc_main;
