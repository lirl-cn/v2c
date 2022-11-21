import type { RouteConfig } from 'vue-router'
export interface ownRouteConfig extends Omit<RouteConfig, 'component' | 'children'>{
  component?: string | {template: string}
  title?: string
  icon?: string
  hideInMenu?: boolean
  hideChildrenInMenu?: boolean
  children?: ownRouteConfig[]
}
const routes:ownRouteConfig[] = [
  {
    path: '/',
    title: '1111',
    name: 'home',
    component: '@/layouts/empty-layout',
    children: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        name: 'portal-home',
        title: '首页',
        component: '/home/index',
      },
    ]
  },
]

export default routes