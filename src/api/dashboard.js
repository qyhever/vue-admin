import axios from 'axios'

export function getHitokoto() {
  const url = 'https://v1.hitokoto.cn/'
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
