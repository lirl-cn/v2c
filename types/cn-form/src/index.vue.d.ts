import { FormItemType, OptionsType } from '../../common';
import type { PropType } from "vue";
export interface FormActionRef {
    validateFields: (fields?: string[]) => Promise<any>;
    getFieldsValue: () => any;
    getFieldValue: (key: string) => any;
    setFieldValue: (key: string, value: any) => void;
    setFieldsValue: (fields: {
        [k: string]: any;
    }) => void;
    resetFields: () => void;
}
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
            type: PropType<(ref: FormActionRef) => void>;
            default: undefined;
        };
        layout: {
            type: StringConstructor;
            default: string;
        };
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
