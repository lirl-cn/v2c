import { FormItemType, OptionsType } from '../../common';
import type { PropType } from 'vue';
declare const _sfc_main: {
    components: {
        CnTags: {
            name: string;
            model: {
                prop: string;
                event: string;
            };
            props: {
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
                    type: number;
                    default: string;
                };
            };
            methods: {
                onClickAll(): void;
                onClick(val: any): void;
            };
        };
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
