const TOKEN = 'admin-token'
const USER_ID = 'admin-user-id'
const IS_COLLAPSE = 'is-collapse'
const FROM_PATH = 'from-path'

export function getToken() {
  return window.localStorage.getItem(TOKEN)
}

export function setToken(value) {
  return window.localStorage.setItem(TOKEN, value)
}

export function getUserId() {
  return window.localStorage.getItem(USER_ID)
}

export function setUserId(value) {
  return window.localStorage.setItem(USER_ID, value)
}

export function getCollapse() {
  return JSON.parse(window.localStorage.getItem(IS_COLLAPSE))
}

export function setCollapse(value) {
  return window.localStorage.setItem(IS_COLLAPSE, JSON.stringify(value))
}

export function getFromPath() {
  return window.localStorage.getItem(FROM_PATH)
}

export function setFromPath(value) {
  return window.localStorage.setItem(FROM_PATH, value)
}

export function clearStorage() {
  window.localStorage.removeItem(TOKEN)
  window.localStorage.removeItem(USER_ID)
}
