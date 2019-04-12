import Vue from 'vue'
import Router from 'vue-router'

/* eslint-disable import/first */
Vue.use(Router)

import BasicLayout from '@/components/layouts/basic-layout'
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
// map
import Pinot2Coordinate from '@/pages/bmap/pinot-coordinate'
import SuggestRenderMap from '@/pages/bmap/suggest-render-map'
import APinot2Coordinate from '@/pages/amap/pinot-coordinate'
import ASuggestRenderMap from '@/pages/amap/suggest-render-map'
import Admin from '@/pages/authority/admin'
import Exception404 from '@/pages/exception/exception404'

// 静态公共路由
export const constantRouters = [
  { path: '/', redirect: '/dashboard', hidden: true },
  { path: '/login', name: 'Login', component: Login, meta: { title: '登录' }, hidden: true },
  { path: '/404', component: Exception404, hidden: true }
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
    name: 'BasicLayout',
    component: BasicLayout,
    meta: {
      title: '首页'
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
      title: '表格'
    },
    children: [
      { path: '/table/query', name: 'TableQuery', component: TableQuery, meta: { title: '查询表格' } },
      { path: '/table/user', name: 'RegisterUser', component: RegisterUser, meta: { title: '注册用户' } },
      { path: '/table/select', name: 'Select', component: Select, meta: { title: '表格选中' } }
    ]
  },
  // richtext -----------------------------------------------------------------------------------
  {
    path: '/richtext',
    component: BasicLayout,
    icon: 'fa fa-file-text-o',
    name: 'Richtext',
    meta: {
      title: '富文本'
    },
    children: [
      { path: '/richtext/tinymce', name: 'Tinymce', component: Tinymce, meta: { title: 'tinymce' } },
      { path: '/richtext/ckeditor', name: 'Ckeditor', component: Ckeditor, meta: { title: 'ckeditor' } }
    ]
  },
  // base components -----------------------------------------------------------------------------------
  {
    path: '/base',
    component: BasicLayout,
    icon: 'fa fa-th-large',
    name: 'Base',
    meta: {
      title: '常用组件'
    },
    children: [
      { path: '/base/cropper', name: 'Cropper', component: Cropper, meta: { title: '图片裁剪' } },
      { path: '/base/upload', name: 'Upload', component: Cropper, meta: { title: '上传' } },
      { path: '/base/clipboard', name: 'Clipboard', component: Clipboard, meta: { title: '复制文本' } }
    ]
  },
  // excel components -----------------------------------------------------------------------------------
  {
    path: '/excel',
    component: BasicLayout,
    icon: 'fa fa-cloud-upload',
    name: 'Excel',
    meta: {
      title: 'Excel'
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
      title: '图表'
    },
    children: [
      { path: '/echarts/colmun', name: 'Colmun', component: ChartColmun, meta: { title: '柱状图' } },
      { path: '/echarts/bar', name: 'Bar', component: ChartBar, meta: { title: '条形图' } },
      { path: '/echarts/line', name: 'Line', component: ChartLine, meta: { title: '折线图' } },
      { path: '/echarts/pie', name: 'Pie', component: ChartPie, meta: { title: '饼图' } },
      { path: '/echarts/circle', name: 'ChartCircle', component: ChartCircle, meta: { title: '圆环' } },
      { path: '/echarts/radar', name: 'Radar', component: ChartRadar, meta: { title: '雷达图' } },
      { path: '/echarts/map', name: 'ChartMap', component: ChartMap, meta: { title: '地图' } }
    ]
  },
  // baidu map components -----------------------------------------------------------------------------------
  {
    path: '/bmap',
    component: BasicLayout,
    icon: 'fa fa-map-marker',
    name: 'BMap',
    meta: {
      title: '百度地图'
    },
    children: [
      { path: '/bmap/point2coordinate', name: 'Pinot2Coordinate', component: Pinot2Coordinate, meta: { title: '鼠标拾取坐标' } },
      { path: '/bmap/suggest-render-map', name: 'SuggestRenderMap', component: SuggestRenderMap, meta: { title: '关键字输入' } }
    ]
  },
  // gaode map components -----------------------------------------------------------------------------------
  {
    path: '/amap',
    component: BasicLayout,
    icon: 'fa fa-map',
    name: 'AMap',
    meta: {
      title: '高德地图'
    },
    children: [
      { path: '/amap/point2coordinate', name: 'APinot2Coordinate', component: APinot2Coordinate, meta: { title: '鼠标拾取坐标' } },
      { path: '/amap/suggest-render-map', name: 'ASuggestRenderMap', component: ASuggestRenderMap, meta: { title: '关键字输入' } }
    ]
  },
  // admin test components -----------------------------------------------------------------------------------
  {
    path: '/authority',
    component: BasicLayout,
    icon: 'fa fa-map',
    name: 'Authority',
    meta: {
      title: 'admin页面',
      roles: ['admin']
    },
    children: [
      { path: '/authority/admin', name: 'Admin', component: Admin, meta: { title: 'admin测试页面' } }
    ]
  },
  { path: '*', component: Exception404, hidden: true }
]
