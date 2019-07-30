import { getCollapse, setCollapse } from '@/utils/storage'

const state = {
  collapsed: getCollapse(),
  language: localStorage.getItem('language') || 'zh',
  loading: false,
  source: {
    token: null,
    cancel: null
  }
}

const mutations = {
  TOGGLE_MENU(state) {
    setCollapse(!state.collapsed)
    state.collapsed = !state.collapsed
  },
  TOGGLE_LANGUAGE(state, language) {
    state.language = language
    localStorage.setItem('language', language)
  },
  TOGGLE_LOADING(state, value) {
    state.loading = value
  },
  SET_SOURCE(state, data) {
    state.source = data
  }
}

export default {
  state,
  mutations
}
