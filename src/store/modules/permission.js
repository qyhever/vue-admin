import { constantRoutes, asyncRoutes } from '@/router'

/**
 * 通过meta.roles判断是否与当前用户权限匹配
 * @param {Array} roles
 * @param {Object} route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    // roles 中至少有一个包含在 meta.roles 中
    return roles.some(role => route.meta.roles.indexOf(role) >= 0)
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param {Array} asyncRouters
 * @param {Array} roles
 */
function filterAsyncRouter(asyncRouters, roles) {
  // return asyncRouters.filter(route => {
  //   const tmp = { ...route }
  //   if (hasPermission(roles, tmp)) {
  //     if (tmp.children) {
  //       tmp.children = filterAsyncRouter(tmp.children, roles)
  //       if (tmp.children.length) {
  //         return true
  //       }
  //     } else {
  //       return true
  //     }
  //     return true
  //   } else {
  //     return false
  //   }
  // })
  const ret = []
  asyncRouters.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, roles)
        if (tmp.children.length) {
          ret.push(tmp)
        }
      } else {
        ret.push(tmp)
      }
    }
  })
  return ret
}

const permission = {
  // namespace: true,
  state: {
    routers: [],
    addRoutes: []
  },
  mutations: {
    SET_ROUTES(state, routers) {
      state.addRoutes = routers
      state.routers = constantRoutes.concat(routers)
    }
  },
  actions: {
    generateRoutes({ commit }, roles) {
      return new Promise(resolve => {
        const accessedRouters = filterAsyncRouter(asyncRoutes, roles)
        commit('SET_ROUTES', accessedRouters)
        resolve(accessedRouters)
      })
    }
  }
}
export default permission
