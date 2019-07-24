const state = {
  visitedViews: [{ path: '/dashboard', title: 'dashboard' }]
}

const getters = {
  visitedViews: state => state.visitedViews
}

const mutations = {
  ADD_VISITED_VIEWS(state, route) {
    if (state.visitedViews.some(v => v.path === route.path)) return // 如果有相同的，直接退出
    state.visitedViews.push({
      name: route.name,
      path: route.path,
      title: route.meta.title || 'no-name'
    })
  },
  DEL_VISITED_VIEWS(state, route) {
    state.visitedViews.forEach((item, index) => {
      if (route.path === '/dashboard') return
      if (item.path === route.path) {
        state.visitedViews.splice(index, 1)
      }
    })
  }
}

const actions = {
  delVisitedViews({ state, commit }, route) {
    commit('DEL_VISITED_VIEWS', route)
    return Promise.resolve([...state.visitedViews])
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
