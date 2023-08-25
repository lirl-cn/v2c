import { FormItemType, OptionsType } from '../../common';
import type { PropType } from 'vue';
export declare type DataType = {
    name: string;
    title: string;
    type: FormItemType;
    hide?: boolean;
    clearable?: boolean;
    options?: OptionsType;
    placeholder?: string;
    formItemProps?: {
        [k: string]: any;
    };
    fieldItemProps?: {
        [k: string]: any;
    };
    initialValue?: any;
};
declare const _sfc_main: {
    name: string;
    components: {
        FormItem: () => Promise<typeof import("./form-item.vue")>;
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
        /**
         * 数据源
         * {
         *    name: string 表单唯一值，key
         *    title： string  label文案
         *    placeholder
         *    type： string  form-item类型，后续如果新增需要在组件内加入新组件
         *    options： {label:string, value: string|number}[]  select、checkbox等组件的数据源 后续新增的组件需要数据源也可复用该字段
         *    formItemProps：object 绑定给el-form-item的attrs
         *    fieldItemProps：object 绑定给 表单组件 的attrs
         * }[]
         *  */
        data: {
            type: PropType<DataType[]>;
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
export default _sfc_main;
