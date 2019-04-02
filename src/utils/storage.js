const TOKEN = 'admin-token'
const IS_COLLAPSE = 'is-collapse'
const FROM_PATH = 'from-path'

export function getToken() {
  return window.localStorage.getItem(TOKEN)
}

export function setToken(value) {
  return window.localStorage.setItem(TOKEN, value)
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
  const path = value === '/login' ? '' : value
  return window.localStorage.setItem(FROM_PATH, path)
}

export function clearStorage() {
  window.localStorage.removeItem(TOKEN)
}
