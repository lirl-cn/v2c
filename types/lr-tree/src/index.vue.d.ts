import type { DataType } from './tree-node.vue';
import { PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    dataSource: {
        type: PropType<DataType>;
        default: () => {};
    };
    mode: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    arrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
    borderColor: {
        type: StringConstructor;
        default: string;
    };
    scale: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, {
    containerRef: any;
    contentRef: any;
    canvasRef: any;
    scaleValue: number;
    canvasMinWidth: string;
    isHideScroll: boolean;
}, {}, {
    toScale(type: string, value: number): void;
}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    dataSource: {
        type: PropType<DataType>;
        default: () => {};
    };
    mode: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    arrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
    borderColor: {
        type: StringConstructor;
        default: string;
    };
    scale: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    mode: "horizontal" | "vertical";
    dataSource: DataType;
    arrow: boolean;
    backgroundColor: string;
    borderColor: string;
    scale: boolean;
}>;
export default _sfc_main;
