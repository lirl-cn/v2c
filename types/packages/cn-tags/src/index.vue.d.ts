declare const _sfc_main: import("vue").DefineComponent<{
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
export default _sfc_main;
