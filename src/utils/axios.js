import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { Message } from 'element-ui'
import { getToken, setFromPath } from '@/utils/storage'

// axios.defaults.headers.post['Content-Type'] = 'application/json charset=UTF-8'
const instance = axios.create({
  // baseURL: process.env.BASE_URL
  baseURL: 'https://api.qyhever.com'
})
// request interceptor
instance.interceptors.request.use((config) => {
  // Do something before request is sent
  const token = getToken()
  if (token) {
    config.headers.Authorization = token
  }
  store.commit('TOGGLE_LOADING', true)
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
})

// response interceptor
instance.interceptors.response.use((response) => {
  // Do something with response data
  if ((response.status >= 200 && response.status < 300) || response.status === 304) {
    if (response.data.status !== 1) {
      Message.closeAll()
      Message.error(response.data.msg)
    }
    store.commit('TOGGLE_LOADING', false)
    return response.data
  }
}, (error) => {
  store.commit('TOGGLE_LOADING', false)
  // Do something with response error
  const status = error.response.status
  // const msg = error.response.data.msg
  if (status === 401) {
    Message.error('登录超时，请重新登录')
    store.dispatch('logout').then(() => {
      setFromPath(router.currentRoute.fullPath)
      window.location.reload()
      // router.replace({
      //   path: '/login',
      //   query: { redirect: router.currentRoute.fullPath }
      // })
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
