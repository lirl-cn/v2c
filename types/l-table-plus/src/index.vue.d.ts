import { PropType } from 'vue';
import type { ColumnsType } from '../../l-table/src/index.vue';
export declare type ColumnsT = ColumnsType & {
    dataIndex: string;
    title: string;
    formTitle?: string;
    searchTitle?: string;
    formType?: string;
    searchType?: string;
    formName?: string;
    searchName?: string;
    options?: CommonItemType[];
    formOptions?: CommonItemType[];
    searchOptions?: CommonItemType[];
    formRules?: any[];
    hideInTable?: boolean;
    hideInSearch?: boolean;
    hideInForm?: boolean;
};
declare const _sfc_main: import("vue").DefineComponent<{
    columns: {
        type: PropType<ColumnsT[]>;
        required: true;
        default: () => never[];
    };
    action: {
        type: StringConstructor;
        required: false;
        default: undefined;
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
    method: {
        type: PropType<"POST" | "GET">;
        required: false;
        default: undefined;
    };
    params: {
        type: PropType<Record<string, any>>;
        required: false;
        default: undefined;
    };
    stripe: {
        type: BooleanConstructor;
        required: false;
        default: undefined;
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
    hideOnSinglePage: {
        type: BooleanConstructor;
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
    createText: {
        type: (BooleanConstructor | StringConstructor)[];
        required: false;
        default: boolean;
    };
    hideSearch: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    searchLayout: {
        type: PropType<"grid" | "block" | "inline">;
        required: false;
        default: string;
    };
    searchBtnSize: {
        type: PropType<"small" | "medium" | "mini">;
        required: false;
        default: string;
    };
    searchGrid: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    searchFormat: {
        type: PropType<(params: any) => any>;
        required: false;
        default: undefined;
    };
    searchDateRangeSuffix: {
        type: PropType<string[]>;
        required: false;
        default: () => string[];
    };
    formWidth: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    title: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    createFun: {
        type: PropType<(params: Record<string, any>) => Promise<RESPONSE_TYPE>>;
        required: false;
        default: undefined;
    };
    updateFun: {
        type: PropType<(params: Record<string, any>) => Promise<RESPONSE_TYPE>>;
        required: false;
        default: undefined;
    };
}, {}, {
    searchRef: any;
    tableRef: any;
    formRef: any;
    ownParams: Record<string, any>;
    addVisible: boolean;
    detail: any;
}, {
    showHeader(): boolean;
    tableParams(): {
        [x: string]: any;
    };
    tableColumns(): {
        render: ((val: string | number | boolean | Record<string, any>, record: Record<string, any>) => string) | ((text: string) => any) | undefined;
        title: string;
        dataIndex: string;
        valueType?: "date" | "date-time" | undefined;
        width?: string | number | undefined;
        minWidth?: string | number | undefined;
        ellipsis?: boolean | undefined;
        align?: "left" | "right" | "center" | undefined;
        formTitle?: string | undefined;
        searchTitle?: string | undefined;
        formType?: string | undefined;
        searchType?: string | undefined;
        formName?: string | undefined;
        searchName?: string | undefined;
        options?: CommonItemType<Record<string, any>>[] | undefined;
        formOptions?: CommonItemType<Record<string, any>>[] | undefined;
        searchOptions?: CommonItemType<Record<string, any>>[] | undefined;
        formRules?: any[] | undefined;
        hideInTable?: boolean | undefined;
        hideInSearch?: boolean | undefined;
        hideInForm?: boolean | undefined;
    }[];
    searchColumns(): {
        title: string;
        name: string;
        type: string | undefined;
        options: CommonItemType<Record<string, any>>[] | {
            value: string;
            label: any;
        }[] | undefined;
        dataIndex: string;
        valueType?: "date" | "date-time" | undefined;
        width?: string | number | undefined;
        minWidth?: string | number | undefined;
        ellipsis?: boolean | undefined;
        align?: "left" | "right" | "center" | undefined;
        render?: ((val: string | number | boolean | Record<string, any>, record: Record<string, any>) => string) | undefined;
        formTitle?: string | undefined;
        searchTitle?: string | undefined;
        formType?: string | undefined;
        searchType?: string | undefined;
        formName?: string | undefined;
        searchName?: string | undefined;
        formOptions?: CommonItemType<Record<string, any>>[] | undefined;
        searchOptions?: CommonItemType<Record<string, any>>[] | undefined;
        formRules?: any[] | undefined;
        hideInTable?: boolean | undefined;
        hideInSearch?: boolean | undefined;
        hideInForm?: boolean | undefined;
    }[];
    formColumns(): {
        title: string;
        name: string;
        type: string | undefined;
        options: CommonItemType<Record<string, any>>[] | {
            value: string;
            label: any;
        }[] | undefined;
        initialValue: any;
        rules: any[] | undefined;
        dataIndex: string;
        valueType?: "date" | "date-time" | undefined;
        width?: string | number | undefined;
        minWidth?: string | number | undefined;
        ellipsis?: boolean | undefined;
        align?: "left" | "right" | "center" | undefined;
        render?: ((val: string | number | boolean | Record<string, any>, record: Record<string, any>) => string) | undefined;
        formTitle?: string | undefined;
        searchTitle?: string | undefined;
        formType?: string | undefined;
        searchType?: string | undefined;
        formName?: string | undefined;
        searchName?: string | undefined;
        formOptions?: CommonItemType<Record<string, any>>[] | undefined;
        searchOptions?: CommonItemType<Record<string, any>>[] | undefined;
        formRules?: any[] | undefined;
        hideInTable?: boolean | undefined;
        hideInSearch?: boolean | undefined;
        hideInForm?: boolean | undefined;
    }[];
    searchDateRange(): Set<unknown>;
}, {
    search(): Promise<void>;
    reset(): Promise<void>;
    edit(record: any): void;
    onSubmit(): Promise<void>;
    closeAddModal(): void;
    onTableSelect(value: any): void;
    reload(): void;
    doLayout(): void;
    clearSelectRows(): void;
    getSelectedRows(): any;
    getParams(): any;
    getDataSource(): any;
    toggleRowSelection(row: any): void;
}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, "select"[], string, Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: PropType<ColumnsT[]>;
        required: true;
        default: () => never[];
    };
    action: {
        type: StringConstructor;
        required: false;
        default: undefined;
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
    method: {
        type: PropType<"POST" | "GET">;
        required: false;
        default: undefined;
    };
    params: {
        type: PropType<Record<string, any>>;
        required: false;
        default: undefined;
    };
    stripe: {
        type: BooleanConstructor;
        required: false;
        default: undefined;
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
    hideOnSinglePage: {
        type: BooleanConstructor;
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
    createText: {
        type: (BooleanConstructor | StringConstructor)[];
        required: false;
        default: boolean;
    };
    hideSearch: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    searchLayout: {
        type: PropType<"grid" | "block" | "inline">;
        required: false;
        default: string;
    };
    searchBtnSize: {
        type: PropType<"small" | "medium" | "mini">;
        required: false;
        default: string;
    };
    searchGrid: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    searchFormat: {
        type: PropType<(params: any) => any>;
        required: false;
        default: undefined;
    };
    searchDateRangeSuffix: {
        type: PropType<string[]>;
        required: false;
        default: () => string[];
    };
    formWidth: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    title: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    createFun: {
        type: PropType<(params: Record<string, any>) => Promise<RESPONSE_TYPE>>;
        required: false;
        default: undefined;
    };
    updateFun: {
        type: PropType<(params: Record<string, any>) => Promise<RESPONSE_TYPE>>;
        required: false;
        default: undefined;
    };
}>>, {
    title: string;
    layout: string;
    columns: ColumnsT[];
    action: string;
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
    request: (params: Record<string, any>) => Promise<{
        success: boolean;
        total?: number;
        meta: {
            data: Record<string, any>;
        };
    }>;
    params: Record<string, any>;
    stripe: boolean;
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
    currentKey: string;
    pageSizeKey: string;
    defaultCurrentValue: number;
    defaultPageSizeValue: number;
    createText: string | boolean;
    hideSearch: boolean;
    searchLayout: "grid" | "block" | "inline";
    searchBtnSize: "small" | "medium" | "mini";
    searchGrid: number;
    searchFormat: (params: any) => any;
    searchDateRangeSuffix: string[];
    formWidth: string;
    createFun: (params: Record<string, any>) => Promise<RESPONSE_TYPE>;
    updateFun: (params: Record<string, any>) => Promise<RESPONSE_TYPE>;
}>;
export default _sfc_main;
