<template>
  <div ref="chart" class="chart" style="height: 400px"></div>
</template>

<script>
import chart from '@/mixins/chart'
export default {
  mixins: [chart],
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    setOption() {
      this.option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '65%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ]
          }
        ]
      }
    },
    refresh() {
      const option = this.option
      this.render(option)
    },
    events() {
      this.chart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0
      })
      let highIndex = 0
      this.timer = setInterval(() => {
        if (highIndex === 5) {
          highIndex = 0
        }
        this.chart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: highIndex
        })
        highIndex++
        this.chart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: highIndex
        })
      }, 2000)
    }
  }
}
</script>
