import type { VueConstructor } from 'vue';
import CnBadge from './cn-badge';
import CnForm from './cn-form';
import CnPagination from './cn-pagination/src/index.vue';
import CnTable from './cn-table';
import CnTags from "./cn-tags";
import LrTree from "./lr-tree";
import LrTree2 from "./lr-tree2";
import LTable from "./l-table";
import LTablePlus from "./l-table-plus";
import BEmpty from "./b-empty";
import CModal from "./c-modal";
import CContentContainer from "./c-content-container";
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
    elementUIConfig?: {
        [k: string]: any;
    };
};
declare const install: (Vue: VueConstructor, config?: configType) => void;
export { CnTags, CnPagination, CnBadge, CnForm, CnTable, LrTree, LrTree2, LTable, LTablePlus, BEmpty, CModal, CContentContainer, };
export default install;
