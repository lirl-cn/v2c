import type { PropType } from "vue";
declare const _sfc_main: import("vue/types/v3-define-component").DefineComponent<{
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
export default _sfc_main;
