import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { MessageBox, Message } from 'element-ui'
import { getToken, setFromPath } from '@/utils/storage'

// axios.defaults.headers.post['Content-Type'] = 'application/json charset=UTF-8'
const instance = axios.create({
  baseURL: process.env.BASE_URL
  // baseURL: 'https://api.qyhever.com'
  // baseURL: 'http://localhost:3000'
})

instance.interceptors.request.use(config => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = token
  }
  store.commit('TOGGLE_LOADING', true)
  return config
}, (error) => {
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  if (response.data.status !== 1) {
    Message.closeAll()
    Message.error(response.data.msg)
  }
  store.commit('TOGGLE_LOADING', false)
  return response.data
}, (error) => {
  store.commit('TOGGLE_LOADING', false)
  const status = error.response.status
  // const msg = error.response.data.msg
  if (status === 401) {
    MessageBox.alert('登录状态失效，请重新登录', '温馨提示', {
      confirmButtonText: '确定',
      callback: action => {
        if (action === 'confirm') {
          store.dispatch('logout').then(() => {
            setFromPath(router.currentRoute.fullPath)
            router.replace({
              path: '/login',
              query: { redirect: router.currentRoute.fullPath }
            })
            setTimeout(() => {
              window.location.reload()
            }, 20)
          })
        }
      }
    })
  }

  if (status === 404) {
    Message.error('404')
  }

  if (status === 500) {
    Message.error('服务器异常')
  }
  return Promise.reject(error)
})

export default instance
