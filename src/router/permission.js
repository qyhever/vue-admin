import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'
import { getToken } from '@/utils/storage'

const whiteList = ['/login', '/404']
// function hasPermission(roles, permissionRoles) {
//   if (roles.includes('admin')) return true
//   if (!permissionRoles) return true
//   return roles.some(role => permissionRoles.includes(role))
// }

router.beforeEach((to, from, next) => {
  NProgress.start()
  const { title } = to.meta
  title && (document.title = title)

  if (getToken()) { // 有无 token
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('getUserInfo').then(userInfo => {
          const { authority } = userInfo
          const roles = authority ? [authority] : ['admin']
          store.dispatch('generateRoutes', { roles }).then(() => {
            router.addRoutes(store.getters.addRoutes)
            next({ ...to, replace: true })
          })
        }).catch(e => {
          store.dispatch('logout').then(() => {
            Message.error('验证失败，请登录')
            next({ path: '/login' })
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
