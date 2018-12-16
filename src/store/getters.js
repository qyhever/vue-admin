export default {
  userId: state => state.user.userId,
  userInfo: state => state.user.userInfo,
  roles: state => state.user.roles,
  addRoutes: state => state.permission.addRoutes,
  routers: state => state.permission.routers,
  loading: state => state.common.loading
}
