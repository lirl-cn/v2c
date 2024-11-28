import type { DataType } from './tree-node.vue';
import { PropType } from 'vue';
declare const _sfc_main: {
    name: string;
    components: {
        LrTreeNode: {
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
                renderText(data?: DataType | undefined): string | undefined;
            };
        };
    };
    props: {
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
    };
    data(): {
        containerRef: undefined;
        contentRef: undefined;
        canvasRef: undefined;
        scaleValue: number;
        canvasMinWidth: string;
        isHideScroll: boolean;
    };
    methods: {
        toScale(type: any, value: any): void;
    };
    watch: {
        dataSource: {
            handler(): void;
            deep: boolean;
        };
    };
};
export default _sfc_main;
