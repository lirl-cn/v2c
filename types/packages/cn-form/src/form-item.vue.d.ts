import { FormItemType, OptionsType } from '../../common';
import type { PropType } from 'vue';
declare const _sfc_main: {
    components: {
        CnTags: import("vue").DefineComponent<{
            showAll: {
                type: ObjectConstructor;
                default: undefined;
            };
            value: {
                type: (ArrayConstructor | StringConstructor | NumberConstructor)[];
                default: undefined;
            };
            options: {
                type: ArrayConstructor;
                default: () => never[];
            };
            mode: {
                type: () => "checkbox" | "radio";
                default: string;
            };
        }, {}, {}, {}, {
            onClickAll(): void;
            onClick(val: any): void;
        }, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
            showAll: {
                type: ObjectConstructor;
                default: undefined;
            };
            value: {
                type: (ArrayConstructor | StringConstructor | NumberConstructor)[];
                default: undefined;
            };
            options: {
                type: ArrayConstructor;
                default: () => never[];
            };
            mode: {
                type: () => "checkbox" | "radio";
                default: string;
            };
        }>>, {
            value: string | number | unknown[];
            showAll: Record<string, any>;
            options: unknown[];
            mode: "checkbox" | "radio";
        }>;
    };
    props: {
        title: {
            type: StringConstructor;
        };
        separator: {
            type: StringConstructor;
        };
        placeholder: {
            type: StringConstructor;
        };
        startPlaceholder: {
            type: StringConstructor;
        };
        endPlaceholder: {
            type: StringConstructor;
            default: string;
        };
        type: {
            type: PropType<FormItemType>;
            default: string;
        };
        name: {
            type: PropType<string>;
            required: boolean;
        };
        options: {
            type: PropType<OptionsType>;
            default: undefined;
        };
        hide: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: BooleanConstructor;
        formItemProps: {
            type: PropType<{
                [k: string]: any;
            }>;
            default: undefined;
        };
        fieldItemProps: {
            type: PropType<{
                [k: string]: any;
                onChange?: ((value: any) => void) | undefined;
            }>;
            default: () => {};
        };
        formModel: {
            type: ObjectConstructor;
            default: () => {};
        };
        customChangeFormModel: {
            type: FunctionConstructor;
            default: () => void;
        };
    };
    computed: {
        onChange(): any;
    };
};
export default _sfc_main;
