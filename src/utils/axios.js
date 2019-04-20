import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { MessageBox, Message } from 'element-ui'
import { getToken } from '@/utils/storage'

// axios.defaults.headers.post['Content-Type'] = 'application/json charset=UTF-8'
const instance = axios.create({
  // baseURL: process.env.BASE_API
  baseURL: 'https://api.qyhever.com'
  // baseURL: 'http://localhost:3000'
})

const toLogin = () => {
  store.dispatch('logout').then(() => {
    router.replace({
      path: '/login',
      query: { redirect: router.currentRoute.fullPath }
    })
    setTimeout(() => {
      window.location.reload()
    }, 20)
  })
}

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
  if (response.data.code === 1) { // 成功
    response.data.success = true
  } else {
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
    MessageBox.confirm('登录状态失效，请重新登录', '温馨提示', {
      showCancelButton: false,
      confirmButtonText: '重新登录',
      type: 'warning'
    }).then(() => {
      toLogin()
    }).catch(() => {
      toLogin()
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
