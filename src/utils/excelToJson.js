import XLSX from 'xlsx'

export function excelToJson(file) {
  return new Promise(resolve => {
    const reader = new FileReader()
    if (file) {
      reader.readAsBinaryString(file)
    }
    reader.onload = (event) => {
      const data = event.target.result
      // workbook： Excel 文档对象
      const workbook = XLSX.read(data, {
        type: 'binary'
      })
      // workbook： Excel 文档中的表，sheet
      const sheets = workbook.Sheets
      let result = []
      // let fromTo = ''
      for (let k in sheets) {
        if (sheets.hasOwnProperty(k)) {
          // sheet对象从A1到 XX的范围
          // fromTo = sheets[k]['!ref']
          result = result.concat(XLSX.utils.sheet_to_json(sheets[k]))
        }
      }
      resolve(result)
    }
  })
}
