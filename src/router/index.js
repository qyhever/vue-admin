import Vue from 'vue'
import Router from 'vue-router'

/* eslint-disable import/first */
Vue.use(Router)

import BasicLayout from '@/pages/layouts/BasicLayout'
// const Login = () => import('@/pages/Login')
import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard'
import TableQuery from '@/pages/table/TableQuery'
import TableImport from '@/pages/table/TableImport'
import TableExport from '@/pages/table/TableExport'
import Tinymce from '@/pages/richtext/Tinymce'
import Ckeditor from '@/pages/richtext/Ckeditor'
import Error404 from '@/pages/Error/Error404'

// 静态公共路由
export const constantRouterMap = [
  { path: '/', redirect: '/dashboard', hidden: true },
  { path: '/login', name: 'Login', component: Login, meta: { title: '登录' }, hidden: true },
  { path: '/404', component: Error404, hidden: true }
]

// 注册路由
export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

// 动态鉴权路由
export const asyncRouterMap = [
  {
    path: '/',
    name: 'BasicLayout',
    component: BasicLayout,
    meta: {
      title: '首页',
      roles: ['admin', 'guest', 'test']
    },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        icon: 'fa fa-dashboard',
        meta: { title: '仪表盘' }
      }
    ]
  },
  {
    path: '/table',
    component: BasicLayout,
    icon: 'fa fa-table',
    name: 'Table',
    meta: {
      title: '表格',
      roles: ['admin', 'guest']
    },
    children: [
      { path: '/table/query', name: 'TableQuery', component: TableQuery, meta: { title: '查询表格' } },
      { path: '/table/import', name: 'TableImport', component: TableImport, meta: { title: '导入' } },
      { path: '/table/export', name: 'TableExport', component: TableExport, meta: { title: '导出' } }
    ]
  },
  {
    path: '/richtext',
    component: BasicLayout,
    icon: 'fa fa-file-text-o',
    name: 'Richtext',
    meta: {
      title: '富文本',
      roles: ['admin', 'guest']
    },
    children: [
      { path: '/richtext/tinymce', name: 'Tinymce', component: Tinymce, meta: { title: 'tinymce' } },
      { path: '/richtext/ckeditor', name: 'Ckeditor', component: Ckeditor, meta: { title: 'ckeditor' } }
    ]
  },
  { path: '*', component: Error404, hidden: true }
]
