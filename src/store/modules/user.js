import * as storage from '@/utils/storage'
import * as api from '@/api/user'
import md5 from 'md5'

const state = {
  token: storage.getToken(),
  userInfo: {}
}

const getters = {
  token: state => state.token,
  userInfo: state => state.userInfo
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
    storage.setToken(token)
  },
  SET_USER_INFO(state, info) {
    state.userInfo = info
  }
}

const actions = {
  login({ commit }, params) {
    return new Promise((resolve, reject) => {
      const { userName, password } = params
      const options = {
        userName,
        password: md5(password)
      }
      api.loginReq(options).then(res => {
        if (res.success) {
          const { token } = res.data
          commit('SET_TOKEN', token)
          resolve()
        }
      }).catch(e => {
        reject(e)
      })
    })
  },
  logout({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      storage.clearStorage()
      resolve()
    })
  },
  getUserInfo({ _, commit }) {
    return new Promise((resolve, reject) => {
      api.getUserReq().then(res => {
        if (res.success) {
          const { data: userInfo } = res
          commit('SET_USER_INFO', userInfo)
          resolve(userInfo.roles)
        }
      }).catch(e => {
        reject(e)
      })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
