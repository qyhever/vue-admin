<template>
  <div class="content">
    <el-row>
      <el-col :span="18">
        <el-radio-group v-model="date" @change="handleDateChange">
          <el-radio-button label="month">月</el-radio-button>
          <el-radio-button label="day">日</el-radio-button>
        </el-radio-group>
        <div class="chart" ref="histogram"></div>
      </el-col>
      <el-col :span="6">
        <div class="chart" ref="pie"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
function genRandomData(n, max) {
  const rows = []
  for (let i = 0; i < n - 1; i++) {
    const count = Math.floor(Math.random() * max)
    rows.push(count)
  }
}
function genDays(n) {
  const rows = []
  for (let i = 0; i < n; i++) {
    const date = new Date()
    const y = date.getFullYear()
    const m = date.getMonth() + 1
    const d = date.getDate() - (n - 1 - i)
    rows.push(`${y}-${m}-${d}`)
  }
  return rows
}
function genMonths(n) {
  const rows = []
  for (let i = 0; i < n; i++) {
    const date = new Date()
    let m = date.getMonth() + 1 - (n - i)
    if (m < 0) {
      m = 12 + m
    }
    rows.push(`${m}月`)
  }
  return rows
}
export default {
  name: 'Echarts',
  data() {
    return {
      charts: [],
      date: 'day'
    }
  },
  mounted() {
    console.log(genMonths(6))
    this.chartHistogram()
    this.chartPie()
  },
  methods: {
    renderChart(refName, option) {
      const chart = echarts.init(this.$refs[refName])
      chart.setOption(option)
      this.charts.push({
        name: refName,
        chart: chart,
        width: chart.getWidth(),
        height: chart.getHeight()
      })
      return chart
    },
    chartHistogram(xAxis, data) {
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b}：{c}件'
        },
        xAxis: {
          type: 'category',
          data: xAxis || genDays(15),
          axisLabel: {
            rotate: 30
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            color: '#3aa1ff',
            data: data || [24, 115, 155, 198, 178, 58, 31, 188, 161, 68, 34, 75, 58, 51, 137],
            type: 'bar'
          }
        ]
      }
      this.renderChart('histogram', option)
    },
    chartPie() {
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            color: ['#1890ff', '#8543e0', '#f04864', '#facc14', '#2fc25b'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0. 5)'
              }
            }
          }
        ]
      }
      this.renderChart('pie', option)
    },
    handleDateChange(val) {
      if (val === 'month') {
        console.log(genMonths(6))
        this.chartHistogram(genMonths(6), genRandomData(6, 6000))
      } else {
        this.chartHistogram(genDays(15), genRandomData(6, 200))
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.chart
  height 600px
  &:first-of-type
    height 500px
</style>
