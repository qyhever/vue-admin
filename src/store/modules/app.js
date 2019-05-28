import { getCollapse, setCollapse } from '@/utils/storage'

const state = {
  collapsed: getCollapse(),
  language: localStorage.getItem('language') || 'zh',
  loading: false
}

const getters = {
  collapsed: state => state.collapsed,
  language: state => state.language
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
  }
}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}