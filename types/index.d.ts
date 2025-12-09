import type { VueConstructor } from 'vue';
import BEmpty from "./b-empty";
import CContentContainer from "./c-content-container";
import CModal from "./c-modal";
import CnBadge from './cn-badge';
import CnForm from './cn-form';
import CnPagination from './cn-pagination/src/index.vue';
import CnTable from './cn-table';
import CnTags from "./cn-tags";
import LTable from "./l-table";
import LTablePlus from "./l-table-plus";
import LrTree from "./lr-tree";
import LrTree2 from "./lr-tree2";
export { BEmpty, CContentContainer, CModal, CnBadge, CnForm, CnPagination, CnTable, CnTags, LrTree, LrTree2, LTable, LTablePlus };
export * from './cn-form';
export * from './cn-table';
export * from './l-table';
declare module 'vue/types/vue' {
    interface Vue {
        $CN_V2C_TABLE_CONFIG: {
            request: (url: string, params?: {
                method: 'POST' | 'GET';
                [k: string]: any;
            }) => Promise<{
                success?: boolean;
                data: any[];
                total: number;
            }>;
            current: {
                key: string;
                format?(current: number): number;
            };
            pageSize: {
                key: string;
                format?(pageSize: number): number;
            };
            rowSelection?: any;
            method?: 'GET' | 'POST';
            search?: any;
            setting?: false | string[];
        };
        $CN_V2C_LTABLE_CONFIG: Record<string, any>;
    }
}
declare type configType = {
    lTable?: Record<string, any>;
    table?: {
        request?: (url: string, params?: {
            method: 'POST' | 'GET';
            [k: string]: any;
        }) => Promise<{
            success?: boolean;
            data: any[];
            total: number;
        }>;
        current?: {
            key?: string;
            format?(current: number): number;
        };
        pageSize?: {
            key?: string;
            format?(pageSize: number): number;
        };
        rowSelection?: any;
        method?: 'GET' | 'POST';
        search?: any;
        setting?: false | string[];
    };
};
declare const install: (Vue: VueConstructor, config?: configType) => void;
export default install;
