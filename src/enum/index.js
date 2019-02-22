export default {
  install(Vue) {
    Vue.prototype.ENUM_MAP = {}
    Vue.prototype.ENUM_ARR = {}
    const setEnum = (key, data) => {
      const enumMap = {}
      const enums = []
      data.forEach(item => {
        enumMap[item.k] = item.v
        enums.push({value: item.k, text: item.v})
      })
      Vue.prototype.ENUM_MAP[key] = enumMap
      Vue.prototype.ENUM_ARR[key] = enums
    }
    setEnum('status', [
      {k: 0, v: '全部'},
      {k: 1, v: '待接单'},
      {k: 2, v: '待排产 '},
      {k: 3, v: '待入库 '},
      {k: 4, v: '待发货 '}
    ])
  }
}
