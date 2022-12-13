import type { VueConstructor } from 'vue';
import CnBadge from './cn-badge';
import CnForm from './cn-form';
import CnPagination from './cn-pagination/src/index.vue';
import CnTable from './cn-table';
import CnTags from "./cn-tags";
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
    }
}
declare type configType = {
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
export { CnTags, CnPagination, CnBadge, CnForm, CnTable, };
export default install;
