import { PropType } from "vue";
export declare type DataType = {
    id: string;
    text?: string;
    type?: string;
    arrow?: boolean;
    data?: Record<string, any>;
    children?: DataType[];
};
declare const _sfc_main: {
    name: string;
    props: {
        data: {
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
        baseKey: {
            type: StringConstructor;
            default: string;
        };
    };
    data(): {
        SPACER: string;
    };
    methods: {
        renderText(data?: DataType): string | undefined;
    };
};
export default _sfc_main;
