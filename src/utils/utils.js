import moment from 'moment'

/* eslint-disable no-useless-escape */
export const regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/

export const regPhone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/

export function formatDate(date) {
  return moment(date).format('YYYY-MM-DD')
}

export function format(date) {
  return moment(date).format('YYYY-MM-DD hh:mm:ss')
}

export function createExcelInput() {
  return new Promise(resolve => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    input.onchange = e => {
      const file = e.target.files[0]
      resolve(file)
    }
    input.click()
  })
}
