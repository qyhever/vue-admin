import Vue from 'vue'
import Router from 'vue-router'

/* eslint-disable import/first */
Vue.use(Router)

import Layout from '@/components/layouts/basic-layout'
import Login from '@/pages/login'
// table
import Dashboard from '@/pages/dashboard'
import TableQuery from '@/pages/table/query'
import RegisterUser from '@/pages/table/register-user'
import Select from '@/pages/table/select'
// excel
import TableImport from '@/pages/excel/import'
import TableExport from '@/pages/excel/export'
// richtext
import Tinymce from '@/pages/richtext/tinymce'
import Ckeditor from '@/pages/richtext/ckeditor'
import Quill from '@/pages/richtext/quill'
// charts
import ChartColmun from '@/pages/charts/colmun'
import ChartBar from '@/pages/charts/bar'
import ChartLine from '@/pages/charts/line'
import ChartPie from '@/pages/charts/pie'
import ChartCircle from '@/pages/charts/circle'
import ChartRadar from '@/pages/charts/radar'
import ChartMap from '@/pages/charts/map'
// base components
import Cropper from '@/pages/base/cropper'
import Clipboard from '@/pages/base/clipboard'
import Qrcode from '@/pages/base/qrcode'
// map
import BmapSelectPoint from '@/pages/bmap/pinot-coordinate'
import BmapSuggestSearch from '@/pages/bmap/suggest-render-map'
import BmapResolveAddress from '@/pages/bmap/resolve-address'
import AmapSelectPoint from '@/pages/amap/pinot-coordinate'
import AmapSuggestSearch from '@/pages/amap/suggest-render-map'
import AmapResolveAddress from '@/pages/amap/resolve-address'
import Exception404 from '@/pages/exception/exception404'
// test
import Admin from '@/pages/admin'
import Test from '@/pages/test'
import Guest from '@/pages/guest'

// 静态公共路由
export const constantRouters = [
  { path: '/', redirect: '/dashboard', meta: { hiddenInMenu: true } },
  { path: '/login', name: 'Login', component: Login, meta: { title: '登录', hiddenInMenu: true } },
  { path: '/404', component: Exception404, meta: { hiddenInMenu: true } }
]

// 注册路由
export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouters
})

// 动态鉴权路由
export const asyncRouters = [
  // dashboard -----------------------------------------------------------------------------------
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: { icon: 'dashboard', title: '仪表盘' }
      }
    ]
  },
  // table -----------------------------------------------------------------------------------
  {
    path: '/table',
    name: 'table',
    component: Layout,
    meta: {
      icon: 'table',
      title: '表格'
    },
    children: [
      { path: '/table/query', name: 'table_query', component: TableQuery, meta: { title: '查询表格' } },
      { path: '/table/user', name: 'table_register_user', component: RegisterUser, meta: { title: '注册用户' } },
      { path: '/table/select', name: 'table_select', component: Select, meta: { title: '表格选中' } }
    ]
  },
  // richtext -----------------------------------------------------------------------------------
  {
    path: '/richtext',
    name: 'richtext',
    component: Layout,
    meta: {
      icon: 'richtext',
      title: '富文本'
    },
    children: [
      { path: '/richtext/tinymce', name: 'richtext_tinymce', component: Tinymce, meta: { title: 'tinymce' } },
      { path: '/richtext/ckeditor', name: 'richtext_ckeditor', component: Ckeditor, meta: { title: 'ckeditor' } },
      { path: '/richtext/quill', name: 'richtext_quill', component: Quill, meta: { title: 'quill' } }
    ]
  },
  // base components -----------------------------------------------------------------------------------
  {
    path: '/base',
    name: 'base',
    component: Layout,
    meta: {
      icon: 'base',
      title: '常用组件'
    },
    children: [
      { path: '/base/cropper', name: 'base_cropper', component: Cropper, meta: { title: '图片裁剪' } },
      // { path: '/base/upload', name: 'base_upload', component: Cropper, meta: { title: '上传' } },
      { path: '/base/clipboard', name: 'base_clipboard', component: Clipboard, meta: { title: '复制文本' } },
      { path: '/base/qrcode', name: 'base_qrcode', component: Qrcode, meta: { title: '二维码' } }
    ]
  },
  // excel components -----------------------------------------------------------------------------------
  {
    path: '/excel',
    name: 'excel',
    component: Layout,
    meta: {
      icon: 'excel',
      title: 'Excel'
    },
    children: [
      { path: '/excel/import', name: 'excel_import', component: TableImport, meta: { title: '导入' } },
      { path: '/excel/export', name: 'excel_export', component: TableExport, meta: { title: '导出' } }
    ]
  },
  // charts components -----------------------------------------------------------------------------------
  {
    path: '/charts',
    component: Layout,
    name: 'charts',
    meta: {
      icon: 'charts',
      title: '图表'
    },
    children: [
      { path: '/echarts/colmun', name: 'charts_colmun', component: ChartColmun, meta: { title: '柱状图' } },
      { path: '/echarts/bar', name: 'charts_bar', component: ChartBar, meta: { title: '条形图' } },
      { path: '/echarts/line', name: 'charts_line', component: ChartLine, meta: { title: '折线图' } },
      { path: '/echarts/pie', name: 'charts_pie', component: ChartPie, meta: { title: '饼图' } },
      { path: '/echarts/circle', name: 'charts_circle', component: ChartCircle, meta: { title: '圆环' } },
      { path: '/echarts/radar', name: 'charts_radar', component: ChartRadar, meta: { title: '雷达图' } },
      { path: '/echarts/map', name: 'charts_map', component: ChartMap, meta: { title: '地图' } }
    ]
  },
  // baidu map components -----------------------------------------------------------------------------------
  {
    path: '/bmap',
    name: 'bmap',
    component: Layout,
    meta: {
      icon: 'bmap',
      title: '百度地图'
    },
    children: [
      { path: '/bmap/select-point', name: 'bmap_select_point', component: BmapSelectPoint, meta: { title: '鼠标拾取坐标' } },
      { path: '/bmap/suggest-search', name: 'bmap_suggest_search', component: BmapSuggestSearch, meta: { title: '关键字输入' } },
      { path: '/bmap/resolve-address', name: 'bmap_resolve_address', component: BmapResolveAddress, meta: { title: '地址解析' } }
    ]
  },
  // gaode map components -----------------------------------------------------------------------------------
  {
    path: '/amap',
    name: 'amap',
    component: Layout,
    meta: {
      icon: 'amap',
      title: '高德地图'
    },
    children: [
      { path: '/amap/select-point', name: 'amap_select_point', component: AmapSelectPoint, meta: { title: '鼠标拾取坐标' } },
      { path: '/amap/suggest-search', name: 'amap_suggest_search', component: AmapSuggestSearch, meta: { title: '关键字输入' } },
      { path: '/amap/resolve-address', name: 'amap_resolve_address', component: AmapResolveAddress, meta: { title: '地址解析' } }
    ]
  },
  // admin test components -----------------------------------------------------------------------------------
  {
    path: '/admin',
    name: 'admin_parent',
    component: Layout,
    children: [
      { path: '/admin', name: 'admin', component: Admin, meta: { icon: 'admin', title: 'admin测试页面', roles: ['admin'] } }
    ]
  },
  {
    path: '/test',
    name: 'test_parent',
    component: Layout,
    children: [
      { path: '/test', name: 'test', component: Test, meta: { icon: 'test', title: 'test测试页面', roles: ['test'] } }
    ]
  },
  {
    path: '/guest',
    name: 'guest_parent',
    component: Layout,
    children: [
      { path: '/guest', name: 'guest', component: Guest, meta: { icon: 'guest', title: 'guest测试页面', roles: ['guest'] } }
    ]
  },
  {
    path: '*',
    meta: { hiddenInMenu: true },
    component: Layout,
    children: [
      {
        path: '*',
        component: Exception404
      }
    ]
  }
]
