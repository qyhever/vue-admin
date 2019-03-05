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
        title: {
          text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
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
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: this.genRandomData(7, 1000)
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: this.genRandomData(7, 800)
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: this.genRandomData(7, 2000)
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: this.genRandomData(7, 800)
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: this.genRandomData(7, 1000)
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
