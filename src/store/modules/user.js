import * as storage from '@/utils/storage'
import * as api from '@/api/user'
import md5 from 'md5'
import { resetRouter } from '@/router'

const state = {
  token: storage.getToken(),
  userInfo: {}
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
  removeToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      storage.clearStorage()
      resolve()
    })
  },
  logout({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_USER_INFO', {})
      storage.clearStorage()
      resetRouter()
      resolve()
    })
  },
  getUserInfo({ commit }) {
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
  mutations,
  actions
}
