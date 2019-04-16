import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/storage'
import { refreshToken } from '@/api/user'

const whiteList = ['/login', '/404']

router.beforeEach((to, from, next) => {
  NProgress.start()
  const { title } = to.meta
  title && (document.title = title)
  if (getToken()) { // 有无 token
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (!store.getters.userInfo.roles) {
        store.dispatch('getUserInfo').then(roles => {
          store.dispatch('generateRoutes', roles).then(() => {
            router.addRoutes(store.getters.addRoutes)
            next({ ...to, replace: true })
          })
          next()
        })
      } else {
        refreshToken().then(res => {
          if (res.success) {
            const { token } = res.data
            if (token) {
              store.commit('SET_TOKEN', token)
            }
          }
          next()
        }).catch(() => {
          next()
        })
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
