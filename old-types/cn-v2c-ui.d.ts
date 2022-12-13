import Vue from 'vue'

export { CnForm } from './cn-form'
export { CnTable } from './cn-table'

export type InstallationTableOptions = {
  request?: (params?: { [k: string]: any }) => Promise<{ success?: boolean, data: any[], total: number }>
  current?: {
    key?: string
    format?(current: number): number
  },
  pageSize?: {
    key?: string
    format?(pageSize: number): number
  },
}

export interface InstallationOptions {
  table: InstallationTableOptions
}

/** The version of element-ui */
export const version: string

/**
 * Install all element-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(ElementUI)` to install.
 */
export function install(vue: typeof Vue, options: InstallationOptions): void

