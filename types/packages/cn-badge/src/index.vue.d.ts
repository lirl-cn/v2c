import { PropType } from 'vue';
declare const _sfc_main: import("vue/types/v3-define-component").DefineComponent<{
    text: {
        type: StringConstructor;
        default: string;
    };
    status: {
        type: PropType<"default" | "success" | "error" | "processing" | "warning" | "primary">;
        default: undefined;
    };
}, import("vue").Data, import("vue").Data, {}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        default: string;
    };
    status: {
        type: PropType<"default" | "success" | "error" | "processing" | "warning" | "primary">;
        default: undefined;
    };
}>>, {
    text: string;
    status: "default" | "success" | "error" | "processing" | "warning" | "primary";
}>;
export default _sfc_main;
