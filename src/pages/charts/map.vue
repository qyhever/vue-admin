<template>
  <div class="con-wrapper" ref="chart"></div>
</template>

<script>
import 'echarts/extension/bmap/bmap'
import chart from '@/mixins/chart'
import styleJson from '@/config/mapStyle.json'
import data from '@/config/map'
const symbol1 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFwmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wMi0yNlQxNzowMzo0NSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wMi0yNlQxNzowMzo0NSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMDItMjZUMTc6MDM6NDUrMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTcwNzI1ZDQtNGM1MS04YTRiLWFjNWEtZmM5NDQyYTdmZmJhIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MmYxZjk2NTAtYzVlMS1iNTQ5LTgwMDEtNzhjNDg3ZDVlNDY5IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NTMxNzE2MGMtN2Y2MC1jOTQ5LThkMDgtYmQzMzc0Njg5MDJjIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTMxNzE2MGMtN2Y2MC1jOTQ5LThkMDgtYmQzMzc0Njg5MDJjIiBzdEV2dDp3aGVuPSIyMDE5LTAyLTI2VDE3OjAzOjQ1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNzA3MjVkNC00YzUxLThhNGItYWM1YS1mYzk0NDJhN2ZmYmEiIHN0RXZ0OndoZW49IjIwMTktMDItMjZUMTc6MDM6NDUrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+zU7dIQAAAr5JREFUOI21lU9IFFEcxz9v1N1Vd7dBkFDXDbKQVYLoYGbarcI6pGzdzYtGdTHs7DntECGkBz1UB0GTEFK7RWrkvTbTEtz1H1LMrq7trq6vw7zR1U1ag37wmDdvZj7v935/viOEr5pUkx0jAhCABmSpq7AeAztAUl2lGvss+wBQU2vZgB1wADYFR8ESQAyIA1spG6RDZcdIlrrPBZyAG3CpuU29lgA2gAiwrua/gG0F34OmeJgP6EAhm+sl4s2zmwQDNUSNIkCSr6/grZiQ9S2vyHMtAmuAAURTQoNgYE0AOUAeUAAUi6GuZhGYuq3XNeCuuoy9+CQgiS/NE/k4hjExgqys7ZONbf3AEvAT2FThkIKBNU3FrgAoEYOdrdmhQJPnXheO0tMHcwBAbGGGUHc72yfO9MnGtl5gUYFjwI6GmV074CYaLhVfPjSV3n98KBDA4S3Hc7cT8WmimWjYo+JvV6zdsnEALjHa49cvNWD3nDoUmArW624gxnr9mAl1KBaWpzbAyUKgxl115a9Ay9xVV2Hh80X2KmTXU6F2sBE1isykZGZ2TxlsGEXs1bKwoPtNiLSlo5qGWV9mp+TrK4ml7xl/HA99A6e+jNkUScVCwyzYBBDF65sKT7/NGBqZHgdvxSRmZyUUC03tEAMisr5l0Hg3THx5PgMv5zDev0Zeax3CbNmYYu16Ggci5B8LyvLzz0NP2oiH5g4FxoKzBJ8+QPou9JPrCmFqQdzyNItbD8HMmiljlbWzO4szWni4+2xywyDbqaPluZDJbeLBr/wYf8Hqy0fslJ3rl/72PmAVCCtoEkAIX7UlKDbM/teBQqLhUjHa42chUEvUOA5gCopvUl6/M6g8TBWULctTYYm0kr4czM6wpM+NqVx2dRJL+tbVkf8ofSJV+f9BpLfV2CfS4n/8TtKgRzXZMZK29hum3g75ohJ6hAAAAABJRU5ErkJggg=='
const list = data.map(item => {
  return item.slice(0, 2)
})
export default {
  name: 'charts_map',
  mixins: [chart],
  methods: {
    setOption() {
      this.now = +new Date()
      this.option = {
        bmap: {
          center: [121.746527, 29.794016],
          zoom: 11,
          roam: true,
          mapStyle: {
            styleJson
          }
        },
        series: [
          {
            id: 'customerList',
            name: '所有客户',
            type: 'scatter',
            coordinateSystem: 'bmap',
            symbol: symbol1,
            symbolSize: 14,
            label: {
              show: false
            },
            data: []
          }
        ]
      }
    },
    refresh() {
      const option = this.option
      option.series[0].data = list
      this.render(option)
      this.chart.on('finished', () => {
        console.log((+new Date() - this.now) / 1000)
      })
    }
  }
}
</script>

<style scoped style="scss">
.con-wrapper {
  padding: 0;
}
</style>
