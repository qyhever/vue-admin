import Vue from 'vue'
import Router from 'vue-router'

/* eslint-disable import/first */
Vue.use(Router)

const Layout = () => import('@/components/layouts/basic-layout')
const Login = () => import('@/pages/login')
// table
const Dashboard = () => import('@/pages/dashboard')
const TableQuery = () => import('@/pages/table/query')
const RegisterUser = () => import('@/pages/table/register-user')
const Select = () => import('@/pages/table/select')
// excel
const TableImport = () => import('@/pages/excel/import')
const TableExport = () => import('@/pages/excel/export')
// richtext
const Tinymce = () => import('@/pages/richtext/tinymce')
const Ckeditor = () => import('@/pages/richtext/ckeditor')
const Quill = () => import('@/pages/richtext/quill')
// charts
const ChartColmun = () => import('@/pages/charts/colmun')
const ChartBar = () => import('@/pages/charts/bar')
const ChartLine = () => import('@/pages/charts/line')
const ChartPie = () => import('@/pages/charts/pie')
const ChartCircle = () => import('@/pages/charts/circle')
const ChartRadar = () => import('@/pages/charts/radar')
const ChartMap = () => import('@/pages/charts/map')
// base components
const Cropper = () => import('@/pages/base/cropper')
const Clipboard = () => import('@/pages/base/clipboard')
const Qrcode = () => import('@/pages/base/qrcode')
const DragModal = () => import('@/pages/base/drag-modal')
// map
const BmapSelectPoint = () => import('@/pages/bmap/pinot-coordinate')
const BmapSuggestSearch = () => import('@/pages/bmap/suggest-render-map')
const BmapResolveAddress = () => import('@/pages/bmap/resolve-address')
const AmapSelectPoint = () => import('@/pages/amap/pinot-coordinate')
const AmapSuggestSearch = () => import('@/pages/amap/suggest-render-map')
const AmapResolveAddress = () => import('@/pages/amap/resolve-address')
const Exception404 = () => import('@/pages/exception/exception404')
// test
const Admin = () => import('@/pages/admin')
const Test = () => import('@/pages/test')
const Guest = () => import('@/pages/guest')

// 静态公共路由
export const constantRoutes = [
  { path: '/', redirect: '/dashboard', hiddenInMenu: true },
  { path: '/login', name: 'Login', component: Login, hiddenInMenu: true, meta: { title: '登录' } },
  { path: '/404', component: Exception404, hiddenInMenu: true }
]

// 注册路由
const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// 动态鉴权路由
export const asyncRoutes = [
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
      { path: '/base/qrcode', name: 'base_qrcode', component: Qrcode, meta: { title: '二维码' } },
      { path: '/base/drag-modal', name: 'base_drag_modal', component: DragModal, meta: { title: '可拖拽弹窗' } }
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
  // auth test components -----------------------------------------------------------------------------------
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
    hiddenInMenu: true,
    component: Layout,
    children: [
      { path: '*', component: Exception404 }
    ]
  }
]

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
