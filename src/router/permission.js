import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/storage'
import { refreshToken } from '@/api/user'
import { setTitle } from '@/utils/utils'

const whiteList = ['/login', '/404']

function toLoginPage(next, to) {
  next(`/login?redirect=${to.path}`)
  NProgress.done()
}

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  setTitle(to.meta.title)
  const token = getToken()
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasRoles = store.getters.userInfo.roles
      if (!hasRoles) {
        try {
          // roles 必须为 数组, ep: ['admin'] or ,['dev','editor']
          const roles = await store.dispatch('getUserInfo')
          const accessRoutes = await store.dispatch('generateRoutes', roles)
          router.addRoutes(accessRoutes)
          next({ ...to, replace: true })
        } catch (err) {
          await store.dispatch('removeToken')
          toLoginPage(next, to)
        }
      } else {
        try {
          const res = await refreshToken()
          if (res.success) {
            const { token } = res.data
            if (token) {
              store.commit('SET_TOKEN', token)
            }
          }
          next()
        } catch (err) {
          next()
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) >= 0) {
      next()
    } else {
      toLoginPage(next, to)
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
