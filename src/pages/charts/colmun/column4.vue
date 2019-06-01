<template>
  <div ref="chart" class="chart"></div>
</template>
<script>
import chart from '@/mixins/chart'
const imgBase64 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGKmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wMi0yNVQxMDoyNTo1NyswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMDItMjVUMTE6NTk6MTYrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDItMjVUMTE6NTk6MTYrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUzOWYyZDllLTZiNjUtM2U0MS05MmIyLTliOWJiYmJhOTIyYiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjg5Yzk5MjEyLTlkZmYtODI0MS1iOGY1LWVlMDRlM2QyMDMzZiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjUwNzg4OTY0LWRmMTgtMWM0Ny05NDE3LTcyMjdkMjgzZGI2OSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTA3ODg5NjQtZGYxOC0xYzQ3LTk0MTctNzIyN2QyODNkYjY5IiBzdEV2dDp3aGVuPSIyMDE5LTAyLTI1VDEwOjI1OjU3KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjUzOWYyZDllLTZiNjUtM2U0MS05MmIyLTliOWJiYmJhOTIyYiIgc3RFdnQ6d2hlbj0iMjAxOS0wMi0yNVQxMTo1OToxNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6NvOEDAAACgElEQVRIia2VS28TMRCAP292k03SEKCJqAq0RGoLlAMgcQKEEBL/mnOFeKiHElQh2gMVbWn6ANq8dhObQ8aN42yEkBhpNI7tfDMez3iVOcwxQ9QMazzrjy8l/As08KwL06Iznfhw5WjOU+vAgofAQKx1ZNen4BYaCCzy1ObPCDD1FN+BH7kF54ECEHe2Fu8MjipruhvVjFGRCnQvKKWt/O2zZrzSOgD6AkwcB6No5UKVB451J18532i81O3CMtmiw/n2p8rznXdAR5wkcioDGBduU1EEyr/e3Hut2/klmV8C6uK4CxyImqh+sTn3dPe9OOhJijRgAiffgaQpan9cWhNwCDwGloGS/K4Aa8A6QHo89zDZu1Zz7sUyxwMnLdHguHxX5hrAnIAfAc8EGslJFjAEvd3aujjOMS4M3MgVEBitQt2PajJ/Q+wDoCqAOrAi8wsAuhvVmSzXqcgB1PCsVMAQSHSh2JK374rYAgDDIGayRzLhJlft9hndtm2QlNFFuXIudlR+gUnlP1an4AbQKtSDIE5P5PeRrDWBtoxPga8y/gEQFJMjxp061aFuS6fh9c6XZL9aA3YZ5Rrggxf9KaNy1IXl08/OSS+jt5FPwMtPvm0HpWRfUrIJfGfcgV1xugWYcL7dLDROWrLXRg/M7tDi8HdcvXjbeKW70SLZYsKrne3Ki50NlLENlNmh1kGOcYXEGBW3N2+tDk7Kq7oXzaNVpHK6r+JBK3/zZ7N4/3BPoH2JfODm3Yf7r2KecUnaBnFfxcSBWrBN88SraG/Z3WAhblu79+Pq1BfKf3Ltgt1sIW6DGGfNtRPgLHjWCaz1P3NZdkKy4LMA/yx++/9X+QM0Uw1do1+AtgAAAABJRU5ErkJggg=='
const list = [{
  amount: 407182.52,
  dateIndex: '05-15'
},
{
  amount: 484090.81,
  dateIndex: '05-16'
},
{
  amount: 404236.65,
  dateIndex: '05-17'
},
{
  amount: 467445.64,
  dateIndex: '05-18'
},
{
  amount: 0.0,
  dateIndex: '05-19'
},
{
  amount: 557459.53,
  dateIndex: '05-20'
},
{
  amount: 443669.8,
  dateIndex: '05-21'
},
{
  amount: 485986.64,
  dateIndex: '05-22'
},
{
  amount: 466057.96,
  dateIndex: '05-23'
},
{
  amount: 701848.34,
  dateIndex: '05-24'
},
{
  amount: 449272.51,
  dateIndex: '05-25'
},
{
  amount: 0.0,
  dateIndex: '05-26'
},
{
  amount: 528948.62,
  dateIndex: '05-27'
},
{
  amount: 474040.49,
  dateIndex: '05-28'
},
{
  amount: 540037.64,
  dateIndex: '05-29'
},
{
  amount: 0.0,
  dateIndex: '05-30'
}
]
export default {
  mixins: [chart],
  methods: {
    setOption() {
      this.option = {
        backgroundColor: 'rgba(128, 128, 128, 0)',
        textStyle: {
          color: '#333'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          confine: true
        },
        xAxis: [{
          type: 'category',
          axisPointer: {
            type: 'shadow'
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            rotate: 45,
            interval: 0
          },
          splitLine: {
            show: false
          }
        }],
        yAxis: [{
          show: false,
          type: 'value',
          name: '',
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#00fff6',
            fontSize: 10,
            formatter(value) {
              let result = ''
              if (value >= 10000) {
                result = value / 10000 + '万'
              } else if (value === 0) {
                result = 0
              } else if (value >= 1000 && value < 10000) {
                result = value / 10000 + '千'
              }
              return result
            }
          },
          splitLine: {
            show: false
          }
        }],
        series: [
          {
            type: 'bar',
            itemStyle: {
              color: '#3c64d3',
              opacity: 0.2
            },
            barGap: '-100%',
            barCategoryGap: 0,
            data: []
          },
          {
            name: '金额',
            type: 'line',
            smooth: true,
            symbol: imgBase64,
            symbolSize: 20,
            itemStyle: {
              color: '#ee9931',
              borderWidth: 0
            },
            areaStyle: {
              opacity: 0.3,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: '#ee9931'
                }, {
                  offset: 1,
                  color: 'rgba(255,255,255,0)'
                }]
              }
            },
            data: Array(8).fill(0),
            animationDuration: 2000,
            animationDelay: 1000
          }
        ]
      }
    },
    /**
     * @description 根据 list 获取 yAxis 的 max, interval 参数
     * @param {Array} values
     * @return {Object} {max: 40000, interval: 10000}
     */
    getyAxis(values) {
      const maxValue = Math.max(...values, 10000) // 701848
      const interval = parseInt(maxValue / 4, 10) // 175462.56 => 175462
      const len = String(interval).length
      let tmp = +String(interval).slice(0, 2 - len) // 取前两位: 17
      tmp = tmp + 1 // 自增 1
      const result = tmp * Math.pow(10, String(interval).length - 2)
      return {
        max: result * 4,
        interval: result
      }
    },
    refresh() {
      const option = this.option
      const values = []
      const labels = []
      const barValues = []
      list.forEach(item => {
        values.push(item.amount)
        labels.push(item.dateIndex)
      })
      const yAxis = this.getyAxis(values)
      values.forEach((item, index) => {
        barValues.push(index % 2 === 0 ? yAxis.max : 0)
      })
      option.yAxis[0].show = true
      option.yAxis[0].interval = yAxis.interval
      option.yAxis[0].max = yAxis.max
      option.xAxis[0].data = labels
      option.series[0].data = barValues
      option.series[1].data = values
      this.render(option)
    }
  }
}

</script>
