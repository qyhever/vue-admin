<template>
  <div ref="chart" class="chart"></div>
</template>

<script>
import chart from '@/mixins/chart'
let colors = [
  ['#189be1', 'rgba(24,155,225,0.3)'],
  ['#01cbe3', 'rgba(1,203,227,0.3)'],
  ['#2b57d4', 'rgba(43,87,212,0.3)'],
  ['#2305f1', 'rgba(35,5,241,0.3)'],
  ['#7c35ff', 'rgba(124,53,255,0.3)']
]
colors = colors.concat(colors).concat(colors)
const data = [
  { value: 89, name: '购买操作太卡...' },
  { value: 109, name: '购买体验差' },
  { value: 32, name: '其他' },
  { value: 60, name: 'bug太多' },
  { value: 92, name: '购买操作太卡...' }
]
export default {
  mixins: [chart],
  data() {
    this.maxIndex = 0
    return {}
  },
  methods: {
    setOption() {
      const dataList = data.map((item, index) => {
        return Object.assign({}, item, {
          itemStyle: {
            color: this.linearGradient(
              0,
              0,
              1,
              0,
              [
                { offset: 0, color: colors[index][0] },
                { offset: 1, color: colors[index][1] }
              ],
              false
            )
          }
        })
      })
      this.option = {
        tooltip: {
          show: true,
          trigger: 'item',
          formatter(params) {
            return (
              `原因：${params.data.name}` +
              `<br>` +
              `数量：${params.data.value}`
            )
          },
          backgroundColor: '#060A1F'
        },
        series: [
          {
            type: 'pie',
            radius: ['45%', '70%'],
            label: {
              position: 'outside',
              formatter(params) {
                return params.data.name
              },
              textStyle: {
                color: '#0DC5FD',
                fontWeight: 'bold',
                fontSize: 14
              },
              padding: [4, 4, 2, 4],
              backgroundColor: '#121F5C',
              emphasis: {
                show: true
              }
            },
            labelLine: {
              show: true,
              emphasis: {
                show: true
              }
            },
            data: dataList
          }
        ]
      }
    },
    refresh() {
      const option = this.option
      const values = data.map(v => v.value)
      const maxValue = Math.max(...values)
      this.maxIndex = values.findIndex(v => v === maxValue)
      this.render(option)
    },
    events() {
      let highLightIndex = this.maxIndex
      setTimeout(() => {
        this.chart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: highLightIndex
        })
      }, 20)
      this.chart.on('mouseover', ({ dataIndex }) => {
        if (dataIndex !== highLightIndex) {
          // 检测到鼠标悬停事件，先取消所有高亮
          this.chart.dispatchAction({ type: 'downplay' })
          // 高亮显示悬停的那块
          this.chart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: dataIndex
          })
        }
        highLightIndex = dataIndex
      })
      // 检测鼠标移出后保持高亮显示
      this.chart.on('mouseout', ({ dataIndex }) => {
        this.chart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: dataIndex
        })
      })
    }
  }
}
</script>
