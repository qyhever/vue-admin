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
        backgroundColor: '#f2f2f2',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            textStyle: {
              color: '#fff'
            },
            shadowStyle: {
              opacity: 0.1
            }
          }
        },
        legend: {
          data: ['受理数', '办结数', '办理率'],
          top: 10,
          textStyle: {
            color: '#FFFFFF'
          }

        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            },
            axisLabel: {
              interval: 0,
              textStyle: {
                fontSize: 10,
                color: '#ffffff'
              }
            },
            data: Array(12).fill('地区')
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            min: 0,
            max: 2000,
            position: 'left',
            axisLine: {
              lineStyle: {
                color: '#ffffff'
              }
            },
            axisLabel: {
              formatter: '{value} '
            },
            splitLine: {
              show: false
            }
          },
          {
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
              lineStyle: {
                color: '#ffffff'
              }
            },
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: [
          {
            name: '受理数',
            type: 'bar',
            color: '#67e0e3',
            barMaxWidth: 15,
            barGap: '10%',
            data: [421, 356, 719, 658, 458, 443, 620, 416, 551, 721, 466, 632]

          },
          {
            name: '办理率',
            yAxisIndex: 1,
            symbolSize: 10,
            symbol: 'circle',
            type: 'line',
            color: '#ffdb5c',
            data: [11, 4, 7, 8, 6, 2, 10, 8, 10, 5, 5, 4]
          }]
      }
    },
    refresh() {
      const option = this.option
      this.render(option)
    }
  }
}
</script>
