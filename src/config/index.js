import * as config from './config'
export default {
  install(Vue) {
    Object.assign(Vue.prototype, config)
  }
}
