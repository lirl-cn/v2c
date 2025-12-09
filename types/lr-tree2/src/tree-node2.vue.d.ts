import { PropType } from 'vue';
export declare type DataType = {
    id: string;
    text?: string;
    type?: string;
    data?: Record<string, any>;
    children?: DataType[];
};
declare const _sfc_main: import("vue").DefineComponent<{
    data: {
        type: PropType<DataType>;
        default: () => {};
    };
    mode: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    baseKey: {
        type: StringConstructor;
        default: string;
    };
}, {}, {
    SPACER: string;
}, {}, {
    renderText(data?: DataType): string | undefined;
}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<DataType>;
        default: () => {};
    };
    mode: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    baseKey: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    data: DataType;
    mode: "horizontal" | "vertical";
    baseKey: string;
}>;
export default _sfc_main;
