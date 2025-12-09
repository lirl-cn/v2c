import { PropType } from 'vue';
export declare type ColumnsType = {
    title: string;
    dataIndex: string;
    valueType?: 'date' | 'date-time';
    width?: number | string;
    minWidth?: number | string;
    ellipsis?: boolean;
    align?: 'center' | 'left' | 'right';
    render?: (val: number | string | boolean | Record<string, any>, record: Record<string, any>) => string;
    [k: string]: any;
};
declare const _sfc_main: import("vue").DefineComponent<{
    columns: {
        type: PropType<ColumnsType[]>;
        required: true;
        default: () => never[];
    };
    dataSource: {
        type: PropType<any[]>;
        required: false;
    };
    emptyText: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    empty: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    stripe: {
        type: BooleanConstructor;
        required: false;
        default: undefined;
    };
    emptyInTable: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabledPage: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    action: {
        type: StringConstructor;
        required: false;
    };
    border: {
        type: BooleanConstructor;
        required: false;
        default: undefined;
    };
    selection: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    selectType: {
        type: PropType<"checkbox" | "radio">;
        required: false;
        default: string;
    };
    selectable: {
        type: PropType<(record: Record<string, any>, index: number) => boolean>;
        required: false;
    };
    onSearchClearSelectedRows: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noPadding: {
        type: BooleanConstructor;
        required: false;
        default: undefined;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
        default: undefined;
    };
    hideOnSinglePage: {
        type: BooleanConstructor;
        required: false;
        default: undefined;
    };
    load: {
        type: PropType<(tree: any, treeNode: any, resolve: Function) => void>;
        required: false;
        default: undefined;
    };
    treeProps: {
        type: PropType<{
            children: string;
            hasChildren: string;
        }>;
        required: false;
        default: undefined;
    };
    indexText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    showIndex: {
        type: PropType<boolean | Function>;
        required: false;
        default: boolean;
    };
    request: {
        type: PropType<(params: Record<string, any>) => Promise<{
            success: boolean;
            total?: number;
            meta: {
                data: Record<string, any>;
            };
        }>>;
        required: false;
        default: undefined;
    };
    params: {
        type: PropType<Record<string, any>>;
        required: false;
        default: undefined;
    };
    method: {
        type: PropType<"POST" | "GET">;
        required: false;
        default: undefined;
    };
    autoLoadData: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    currentKey: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    pageSizeKey: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    defaultCurrentValue: {
        type: NumberConstructor;
        required: false;
        default: undefined;
    };
    defaultPageSizeValue: {
        type: NumberConstructor;
        required: false;
        default: undefined;
    };
    tableStyle: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    layout: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    rowKey: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    formatResponse: {
        type: PropType<(res: any, type?: 'reject' | 'resolve') => Promise<{
            success: boolean;
            total?: number;
            meta: {
                data: Record<string, any>[];
            };
        }>>;
        required: false;
        default: undefined;
    };
}, {}, {
    dParams: Record<string, any>;
    ownDataSource: any[];
    ownLoading: boolean;
    selectedRows: any[];
}, {
    _emptyText(): any;
    _rowKey(): any;
    _empty(): any;
    _method(): any;
    _stripe(): any;
    _border(): any;
    _noPadding(): any;
    _currentKey(): any;
    _defaultCurrentValue(): any;
    _defaultPageSizeValue(): any;
    _pageSizeKey(): any;
    _hideOnSinglePage(): any;
    DEFAULT_PAGINATION(): {
        [x: number]: any;
    };
    pageLoading(): boolean;
    isTableEmpty(): boolean;
    attrs(): Record<string, string>;
    finallyLayout(): any;
    tableFetch(): any;
    _formatResponse(): (res: any, type?: 'reject' | 'resolve') => Promise<{
        success: boolean;
        total?: number;
        meta: {
            data: Record<string, any>[];
        };
    }>;
}, {
    commonCalcKeyVal(key: string, defaultValue: any): any;
    calcIndex(index: number): any;
    doLayout(): void;
    selectableFun(record: any, index: number): boolean;
    onSelect(_: any[], row: any): void;
    onSelectionChange(selection: any[]): void;
    fetchData(params: Record<any, any>): Promise<void>;
    search(): void;
    handleCurrentChange(current: number): void;
    handlePageSizeChange(pageSize: number): void;
    formatValue(record: any, dataIndex: string, valueType?: string, render?: Function): any;
    reload(): void;
    reset(): void;
    jumpPage(page: number): void;
    clearSelectRows(): void;
    getParams(): {
        [x: string]: any;
    };
    getSelectedRows(): any[];
    toggleRowSelection(row: any): void;
    getDataSource(): any[];
    onParamsActionChange(): void;
}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, ("change" | "select")[], string, Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: PropType<ColumnsType[]>;
        required: true;
        default: () => never[];
    };
    dataSource: {
        type: PropType<any[]>;
        required: false;
    };
    emptyText: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    empty: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    stripe: {
        type: BooleanConstructor;
        required: false;
        default: undefined;
    };
    emptyInTable: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabledPage: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    action: {
        type: StringConstructor;
        required: false;
    };
    border: {
        type: BooleanConstructor;
        required: false;
        default: undefined;
    };
    selection: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    selectType: {
        type: PropType<"checkbox" | "radio">;
        required: false;
        default: string;
    };
    selectable: {
        type: PropType<(record: Record<string, any>, index: number) => boolean>;
        required: false;
    };
    onSearchClearSelectedRows: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noPadding: {
        type: BooleanConstructor;
        required: false;
        default: undefined;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
        default: undefined;
    };
    hideOnSinglePage: {
        type: BooleanConstructor;
        required: false;
        default: undefined;
    };
    load: {
        type: PropType<(tree: any, treeNode: any, resolve: Function) => void>;
        required: false;
        default: undefined;
    };
    treeProps: {
        type: PropType<{
            children: string;
            hasChildren: string;
        }>;
        required: false;
        default: undefined;
    };
    indexText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    showIndex: {
        type: PropType<boolean | Function>;
        required: false;
        default: boolean;
    };
    request: {
        type: PropType<(params: Record<string, any>) => Promise<{
            success: boolean;
            total?: number;
            meta: {
                data: Record<string, any>;
            };
        }>>;
        required: false;
        default: undefined;
    };
    params: {
        type: PropType<Record<string, any>>;
        required: false;
        default: undefined;
    };
    method: {
        type: PropType<"POST" | "GET">;
        required: false;
        default: undefined;
    };
    autoLoadData: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    currentKey: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    pageSizeKey: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    defaultCurrentValue: {
        type: NumberConstructor;
        required: false;
        default: undefined;
    };
    defaultPageSizeValue: {
        type: NumberConstructor;
        required: false;
        default: undefined;
    };
    tableStyle: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    layout: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    rowKey: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    formatResponse: {
        type: PropType<(res: any, type?: 'reject' | 'resolve') => Promise<{
            success: boolean;
            total?: number;
            meta: {
                data: Record<string, any>[];
            };
        }>>;
        required: false;
        default: undefined;
    };
}>>, {
    noPadding: boolean;
    layout: string;
    columns: ColumnsType[];
    loading: boolean;
    rowKey: string;
    showIndex: boolean | Function;
    method: "POST" | "GET";
    formatResponse: (res: any, type?: 'reject' | 'resolve') => Promise<{
        success: boolean;
        total?: number;
        meta: {
            data: Record<string, any>[];
        };
    }>;
    emptyText: string;
    request: (params: Record<string, any>) => Promise<{
        success: boolean;
        total?: number;
        meta: {
            data: Record<string, any>;
        };
    }>;
    params: Record<string, any>;
    empty: string;
    stripe: boolean;
    emptyInTable: boolean;
    disabledPage: boolean;
    border: boolean;
    selection: boolean;
    selectType: "checkbox" | "radio";
    onSearchClearSelectedRows: boolean;
    hideOnSinglePage: boolean;
    load: (tree: any, treeNode: any, resolve: Function) => void;
    treeProps: {
        children: string;
        hasChildren: string;
    };
    indexText: string;
    autoLoadData: boolean;
    currentKey: string;
    pageSizeKey: string;
    defaultCurrentValue: number;
    defaultPageSizeValue: number;
    tableStyle: string;
}>;
export default _sfc_main;
