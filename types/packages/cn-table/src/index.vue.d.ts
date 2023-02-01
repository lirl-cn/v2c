import type { DataType as FormItemPropType } from '../../cn-form/src/index.vue';
import { FormItemType, OptionsType } from '../../common';
import type { PropType } from 'vue';
import type { HTMLAttributes, StyleValue } from 'vue/types/jsx';
import { VNode } from 'vue/types/umd';
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
declare type StatusType = 'success' | 'error' | 'default' | 'processing' | 'warning';
declare type ValueEnumType = {
    [k: string]: {
        text: string;
        status: StatusType;
    };
};
declare type SearchType = {
    type?: 'inline' | 'grid' | 'block';
    labelWidth?: number | string;
    columns?: number;
    resetText?: string | false;
    searchText?: string | false;
    rangeExtra?: [string, string];
    rangeExtraPlacement?: "start" | "end";
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
    fixed: 'left' | 'right';
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
    batchDeleteText?: string;
    batchDownloadText?: string;
    onBatchDelete?: (selectedRows: SelectedRowsResponse['selectedRows']) => void;
    onBatchDownload?: (selectedRows: SelectedRowsResponse['selectedRows']) => void;
    onChange?: (selectedRows: SelectedRowsResponse['selectedRows']) => void;
};
declare type ActionRefType = {
    onSearch: () => void;
    onReset: () => void;
    onReload: () => void;
    getSearchParams<T = ParamsType>(): T | Promise<T>;
    setSearchFieldsValue<T = any>(fieldsValue: T): void;
    getSelectedRows: () => SelectedRowsResponse;
};
declare type SettingKeyType = 'reload' | 'fullScreen';
declare const _sfc_main: {
    name: string;
    components: {
        CnElPagination: import("vue/types/v3-define-component").DefineComponent<{
            current: {
                type: NumberConstructor;
                default: number;
            };
            pageSize: {
                type: NumberConstructor;
                default: number;
            };
            total: {
                type: NumberConstructor;
                default: number;
            };
            size: {
                type: PropType<"small" | "default">;
                default: string;
            };
            layout: {
                type: StringConstructor;
                default: string;
            };
            background: {
                type: BooleanConstructor;
            };
            pageSizeOptions: {
                type: PropType<number[]>;
                default: () => number[];
            };
            onChange: {
                type: PropType<(current: number, pageSize: number) => void>;
                default: () => void;
            };
        }, import("vue").Data, import("vue").Data, {}, {
            onCurrentChange(current: number): void;
            onSizeChange(pageSize: number): void;
        }, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
            current: {
                type: NumberConstructor;
                default: number;
            };
            pageSize: {
                type: NumberConstructor;
                default: number;
            };
            total: {
                type: NumberConstructor;
                default: number;
            };
            size: {
                type: PropType<"small" | "default">;
                default: string;
            };
            layout: {
                type: StringConstructor;
                default: string;
            };
            background: {
                type: BooleanConstructor;
            };
            pageSizeOptions: {
                type: PropType<number[]>;
                default: () => number[];
            };
            onChange: {
                type: PropType<(current: number, pageSize: number) => void>;
                default: () => void;
            };
        }>>, {
            current: number;
            pageSize: number;
            total: number;
            size: "small" | "default";
            layout: string;
            background: boolean;
            pageSizeOptions: number[];
            onChange: (current: number, pageSize: number) => void;
        }>;
        CnForm: {
            name: string;
            components: {
                FormItem: () => Promise<typeof import("../../cn-form/src/form-item.vue")>;
            };
            props: {
                labelSuffix: {
                    type: StringConstructor;
                    default: undefined;
                };
                hideRequiredAsterisk: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                columns: {
                    type: NumberConstructor;
                    default: number;
                };
                actionRef: {
                    type: FunctionConstructor;
                    default: undefined;
                };
                layout: {
                    type: StringConstructor;
                    default: string;
                };
                data: {
                    type: PropType<FormItemPropType[]>;
                    default: () => never[];
                };
                initialValues: {
                    type: PropType<{
                        [k: string]: any;
                    }>;
                    default: () => {};
                };
                size: {
                    type: StringConstructor;
                    default: string;
                };
                labelWidth: {
                    type: NumberConstructor;
                    default: number;
                };
            };
            data(): {
                formModel: {
                    [k: string]: any;
                };
                needDefaultValueArrayTypes: string[];
                rules: {
                    [k: string]: any;
                };
            };
            watch: {
                data: {
                    handler(val: any): void;
                    immediate: boolean;
                    deep: boolean;
                };
                actionRef: {
                    handler(val: any): void;
                    immediate: boolean;
                    deep: boolean;
                };
            };
            computed: {
                ownActionRef(): any;
            };
            methods: {
                _validate(): Promise<unknown>;
                _validateField(fields?: string[]): Promise<unknown>;
                validateFields(fields: string[]): Promise<unknown>;
                getFieldsValue(): any;
                getFieldValue(key: string): any;
                setFieldValue(key: string, value: any): void;
                setFieldsValue(fields: {
                    [k: string]: any;
                }): void;
                resetFields(): void;
            };
        };
        CnColumn: {
            components: {
                CnBadge: import("vue/types/v3-define-component").DefineComponent<{
                    text: {
                        type: StringConstructor;
                        default: string;
                    };
                    status: {
                        type: PropType<"default" | "success" | "error" | "processing" | "warning" | "primary">;
                        default: undefined;
                    };
                }, import("vue").Data, import("vue").Data, {}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
                    text: {
                        type: StringConstructor;
                        default: string;
                    };
                    status: {
                        type: PropType<"default" | "success" | "error" | "processing" | "warning" | "primary">;
                        default: undefined;
                    };
                }>>, {
                    text: string;
                    status: "default" | "success" | "error" | "processing" | "warning" | "primary";
                }>;
            };
            name: string;
            props: {
                dataIndex: {
                    type: StringConstructor;
                };
                status: {
                    type: StringConstructor;
                };
                title: {
                    type: StringConstructor;
                };
                className: {
                    type: StringConstructor;
                };
                fixed: {
                    type: StringConstructor;
                };
                width: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                minWidth: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                valueEnum: {
                    type: ObjectConstructor;
                };
                ellipsis: {
                    type: BooleanConstructor;
                };
                children: {
                    type: ArrayConstructor;
                };
                rend: {
                    type: FunctionConstructor;
                };
                autoCalcWidth: {
                    type: (NumberConstructor | BooleanConstructor)[];
                    default: boolean;
                };
            };
            watch: {};
            methods: {
                deepRenderText(record: any, keys: any): any;
                renderText(record: any, dataIndex: any, valueEnum: any): any;
            };
        };
    };
    props: {
        tableClassName: StringConstructor;
        setting: {
            type: PropType<false | SettingKeyType[]>;
            default: () => string[];
        };
        resetText: {
            type: PropType<string | false>;
            default: string;
        };
        searchText: {
            type: PropType<string | false>;
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
    };
    data(): {
        searchList: FormItemPropType[];
        tableColumns: ColumnType[];
        ownPagination: {
            defaultCurrent: number;
            current: number;
            pageSize: any;
            total: number;
            showTotal: (total: number) => string;
            pageSizeOptions: any;
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
        selectedRows: never[];
        isFullScreen: boolean;
        isSearchOpen: boolean;
    };
    methods: {
        calcIndex(index: number): any;
        showSlot(dataIndex: any): any;
        _clearSelectRows(): void;
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
        toggleSearchPanel(): Promise<void>;
        toggleFullScreen(): void;
        formatGetStaticValue(key: string, oldKey?: string): any;
    };
    mounted(): void;
    computed: {
        __method(): any;
        __setting(): any;
        __pagination(): any;
        __searchDateRangeExtraPlacement(): any;
        __searchDateRangeExtra(): any;
        __resetText(): any;
        __searchText(): any;
        __searchType(): any;
        __searchLabelWidth(): any;
        __searchColumns(): any;
        __searchBtnContainerSpan(): number;
        ownSearchList(): FormItemPropType[];
        ownActionRef(): ActionRefType;
    };
    watch: {
        loading(loading: any): void;
        actionRef: {
            handler(val: any): void;
        };
        columns: {
            handler(val: ColumnType[]): Promise<void>;
            immediate: boolean;
            deep: boolean;
        };
    };
};
export default _sfc_main;
