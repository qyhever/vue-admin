import axios from '@/utils/axios'

export async function getListReq(params) {
  const url = `/person`
  return axios.get(url, { params })
}

export async function addReq(params) {
  const url = `/person`
  return axios.post(url, params)
}

export async function deleteReq(params) {
  const url = `/person/delete`
  return axios.post(url, params)
}

export async function detailReq(params) {
  const { _id } = params
  const url = `/person/${_id}`
  return axios.get(url)
}

export async function editReq(params) {
  const url = `/person`
  return axios.put(url, params)
}

export async function getSingersReq(params) {
  const url = '/singer'
  return axios.get(url, { params })
}

export async function getAllSingersReq() {
  const url = '/singer/all'
  return axios.get(url)
}
