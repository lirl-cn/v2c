import { DataType } from './tree-node2.vue';
import { PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    dataSource: {
        type: PropType<DataType>;
        default: () => {};
    };
    arrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    mode: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
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
    containerRef: undefined;
    contentRef: undefined;
    canvasRef: undefined;
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
    arrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    mode: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
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
