<template>
  <div ref="chart" class="chart"></div>
</template>

<script>
import chart from '@/mixins/chart'

export default {
  mixins: [chart],
  methods: {
    setOption() {
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告']
        },
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            color: '#67e0e3',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: '广告',
            color: '#37a2da',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            color: '#ffdb5c',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            color: '#e690d1',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410]
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
