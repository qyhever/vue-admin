import { getCollapse, setCollapse } from '@/utils/storage'

const state = {
  isCollapse: getCollapse(),
  language: localStorage.getItem('language') || 'zh',
  loading: false
}

const getters = {
  isCollapse: state => state.isCollapse,
  language: state => state.language
}

const mutations = {
  TOGGLE_MENU(state) {
    setCollapse(!state.isCollapse)
    state.isCollapse = !state.isCollapse
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
