<template>
  <ve-line :data="chartData"></ve-line>
</template>

<script>
export default {
  data() {
    const rows = []
    for (let i = 0; i < 7; i++) {
      const date = new Date()
      const y = date.getFullYear()
      const m = date.getMonth() + 1
      const d = date.getDate() - (7 - i)
      const from = Math.floor(Math.random() * 100000)
      const order = Math.floor(Math.random() * 100000)
      rows.push({
        '日期': `${y}-${m}-${d}`,
        '访问用户': from,
        '下单用户': order
      })
    }
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户'],
        rows
      }
    }
  }
}
</script>
