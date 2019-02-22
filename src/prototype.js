export default {
  install(Vue) {
    Vue.prototype.validNumber = (val) => {
      return /^\d*$/.test(val)
    }
  }
}
