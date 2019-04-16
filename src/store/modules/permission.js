import { asyncRouters, constantRouters } from '@/router'

/**
 * 通过meta.roles判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    // roles 中至少有一个包含在 meta.roles 中
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouters
 * @param roles
 */
function filterAsyncRouter(asyncRouters, roles) {
  const tempRoutesrs = asyncRouters.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  const accessRoutesrs = tempRoutesrs.filter(route => !route.children || (route.children && route.children.length))
  return accessRoutesrs
}

const permission = {
  // namespace: true,
  state: {
    routers: [],
    addRoutes: []
  },
  mutations: {
    SET_ROUTES: (state, routers) => {
      state.addRoutes = routers
      state.routers = constantRouters.concat(routers)
    }
  },
  actions: {
    generateRoutes({ commit }, roles) {
      return new Promise(resolve => {
        let accessedRouters = filterAsyncRouter(asyncRouters, roles)
        commit('SET_ROUTES', accessedRouters)
        resolve()
      })
    }
  }
}
export default permission
