import axios from '@/utils/axios'

export async function loginReq(params) {
  const url = '/user/login'
  return axios.post(url, params)
}

export async function logoutReq() {
  const url = '/user/logout'
  return axios.post(url)
}

export async function getUserReq(_id) {
  const url = `/user/${_id}`
  return axios.get(url)
}

export async function refreshToken() {
  return axios.get('/refreshToken')
}
