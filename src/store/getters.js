export default {
  userInfo: state => state.user.userInfo,
  addRoutes: state => state.permission.addRoutes,
  routers: state => state.permission.routers,
  loading: state => state.app.loading
}
