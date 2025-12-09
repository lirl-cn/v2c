import { PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
    width: {
        type: StringConstructor;
        required: false;
    };
    noFooter: {
        type: BooleanConstructor;
        required: false;
    };
    className: {
        type: StringConstructor;
        required: false;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        required: false;
    };
    okText: {
        type: StringConstructor;
        required: false;
    };
    cancelText: {
        type: StringConstructor;
        required: false;
    };
    btnSize: {
        type: PropType<"small" | "medium" | "mini">;
        required: false;
        default: string;
    };
}, {}, {}, {}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, ("close" | "ok")[], string, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
    width: {
        type: StringConstructor;
        required: false;
    };
    noFooter: {
        type: BooleanConstructor;
        required: false;
    };
    className: {
        type: StringConstructor;
        required: false;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        required: false;
    };
    okText: {
        type: StringConstructor;
        required: false;
    };
    cancelText: {
        type: StringConstructor;
        required: false;
    };
    btnSize: {
        type: PropType<"small" | "medium" | "mini">;
        required: false;
        default: string;
    };
}>>, {
    noFooter: boolean;
    destroyOnClose: boolean;
    btnSize: "small" | "medium" | "mini";
}>;
export default _sfc_main;
