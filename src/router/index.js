import Vue from 'vue'
import Router from 'vue-router'

/* eslint-disable import/first */
Vue.use(Router)

import BasicLayout from '@/components/layouts/basic-layout'
// const Login = () => import('@/pages/Login')
import Login from '@/pages/login'
import Dashboard from '@/pages/dashboard'
import TableQuery from '@/pages/table/TableQuery'
import TableImport from '@/pages/excel/import'
import TableExport from '@/pages/excel/export'
import RegisterUser from '@/pages/table/RegisterUser'
import Tinymce from '@/pages/richtext/Tinymce'
// import Ckeditor from '@/pages/richtext/Ckeditor'
import Echarts from '@/pages/charts/Echarts'
import Cropper from '@/pages/base/Cropper'
import Error404 from '@/pages/error/error404'

import LoadingComponent from '@/components/Loading'
import ErrorComponent from '@/components/ErrorComponent'

const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('@/pages/richtext/Ckeditor'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 3000,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 4000
})

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
  // dashboard -----------------------------------------------------------------------------------
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
  // table -----------------------------------------------------------------------------------
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
      { path: '/table/user', name: 'RegisterUser', component: RegisterUser, meta: { title: '注册用户' } }
    ]
  },
  // richtext -----------------------------------------------------------------------------------
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
      { path: '/richtext/ckeditor', name: 'Ckeditor', component: AsyncComponent, meta: { title: 'ckeditor' } }
    ]
  },
  // base components -----------------------------------------------------------------------------------
  {
    path: '/base',
    component: BasicLayout,
    icon: 'fa fa-th-large',
    name: 'Base',
    meta: {
      title: '常用组件',
      roles: ['admin', 'guest']
    },
    children: [
      { path: '/base/cropper', name: 'Cropper', component: Cropper, meta: { title: '图片裁剪' } },
      { path: '/base/upload', name: 'Upload', component: Cropper, meta: { title: '上传' } }
    ]
  },
  // excel components -----------------------------------------------------------------------------------
  {
    path: '/excel',
    component: BasicLayout,
    icon: 'fa fa-cloud-upload',
    name: 'Excel',
    meta: {
      title: 'Excel',
      roles: ['admin', 'guest']
    },
    children: [
      { path: '/excel/import', name: 'Import', component: TableImport, meta: { title: '导入' } },
      { path: '/excel/export', name: 'Export', component: TableExport, meta: { title: '导出' } }
    ]
  },
  // charts components -----------------------------------------------------------------------------------
  {
    path: '/charts',
    component: BasicLayout,
    icon: 'fa fa-area-chart',
    name: 'Charts',
    meta: {
      title: '图表',
      roles: ['admin', 'guest']
    },
    children: [
      { path: '/charts/echarts', name: 'Echarts', component: Echarts, meta: { title: 'Echarts' } }
    ]
  },
  { path: '*', component: Error404, hidden: true }
]
