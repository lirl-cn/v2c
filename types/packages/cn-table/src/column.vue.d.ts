export default _sfc_main;
declare namespace _sfc_main {
    namespace components {
        export { CnBadge };
    }
    const name: string;
    namespace props {
        namespace dataIndex {
            const type: StringConstructor;
        }
        namespace status {
            const type_1: StringConstructor;
            export { type_1 as type };
        }
        namespace title {
            const type_2: StringConstructor;
            export { type_2 as type };
        }
        namespace className {
            const type_3: StringConstructor;
            export { type_3 as type };
        }
        namespace fixed {
            const type_4: StringConstructor;
            export { type_4 as type };
        }
        namespace width {
            const type_5: number;
            export { type_5 as type };
        }
        namespace minWidth {
            const type_6: number;
            export { type_6 as type };
        }
        namespace valueEnum {
            const type_7: ObjectConstructor;
            export { type_7 as type };
        }
        namespace ellipsis {
            const type_8: BooleanConstructor;
            export { type_8 as type };
        }
        namespace children {
            const type_9: ArrayConstructor;
            export { type_9 as type };
        }
        namespace rend {
            const type_10: FunctionConstructor;
            export { type_10 as type };
        }
        namespace autoCalcWidth {
            const type_11: number;
            export { type_11 as type };
            const _default: boolean;
            export { _default as default };
        }
    }
    const watch: {};
    namespace methods {
        function deepRenderText(record: any, keys: any): any;
        function deepRenderText(record: any, keys: any): any;
        function renderText(record: any, dataIndex: any, valueEnum: any): any;
        function renderText(record: any, dataIndex: any, valueEnum: any): any;
    }
}
import CnBadge from "../../cn-badge";
