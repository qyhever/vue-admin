import * as storage from '@/utils/storage'
import * as api from '@/api/user'
import { encrypt } from '@/utils/md5'

const state = {
  token: storage.getToken(),
  userId: storage.getUserId(),
  userInfo: {},
  roles: []
}

const getters = {
  token: state => state.token,
  user: state => state.user
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
    storage.setToken(token)
  },
  SET_USER_ID(state, userId) {
    state.userId = userId
    storage.setUserId(userId)
  },
  SET_USER_INFO(state, info) {
    state.userInfo = info
  },
  SET_ROLES(state, roles) {
    state.roles = roles
  }
}

const actions = {
  login({ commit }, params) {
    return new Promise((resolve, reject) => {
      const { userName, password } = params
      const options = {
        userName,
        password: encrypt(password)
      }
      api.loginReq(options).then(res => {
        const { token, userInfo: { _id: userId } } = res.data
        commit('SET_TOKEN', token)
        commit('SET_USER_ID', userId)
        resolve()
      }).catch(e => {
        reject(e)
      })
    })
  },
  logout({ commit, ...root }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_USER_ID', '')
      commit('SET_ROLES', [])
      storage.clearStorage()
      resolve()
    })
  },
  getUserInfo({ state, commit }) {
    return new Promise((resolve, reject) => {
      api.getUserReq(state.userId).then(res => {
        const { data: userInfo } = res
        const { authority } = userInfo
        let roles = []
        if (Array.isArray(authority)) {
          roles = authority
        }
        if (typeof authority === 'string') {
          roles = [authority]
        }
        commit('SET_ROLES', roles)
        commit('SET_USER_INFO', userInfo)
        resolve()
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
