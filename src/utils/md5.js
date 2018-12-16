import forge from 'node-forge'

export const encrypt = (pwd) => {
  const md = forge.md.md5.create()
  md.update(pwd)
  return md.digest().toHex()
}
