<template>
  <div ref="chart" class="chart" style="height: 400px"></div>
</template>

<script>
import chart from '@/mixins/chart'
export default {
  mixins: [chart],
  methods: {
    setOption() {
      this.option = {
        title: {
          text: '上周趋势分析'
        },
        grid: {
          left: '5%',
          right: '4%'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['直接访问', '下单量']
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '直接访问',
            type: 'line',
            stack: 'line',
            smooth: true,
            data: this.genRandomData(8, 800)
          },
          {
            name: '下单量',
            type: 'line',
            stack: 'line',
            smooth: true,
            data: this.genRandomData(8, 1000)
          }
        ]
      }
    },
    refresh() {
      const option = this.option
      this.render(option)
    }
  }
}
</script>
