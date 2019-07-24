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
          data: ['包租费', '装修费', '保洁费', '物业费'],
          align: 'right',
          top: 10,
          right: 20
        },
        xAxis: [
          {
            type: 'category',
            name: '地区',
            data: ['新虹桥', '中山公园', '虹桥', '镇宁路', '天山古北']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '总价(万元)',
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: '包租费',
            type: 'bar',
            color: '#67e0e3',
            data: [20, 12, 31, 34, 31]
          },
          {
            name: '装修费',
            type: 'bar',
            color: '#ffdb5c',
            data: [10, 20, 5, 9, 3]
          },
          {
            name: '保洁费',
            type: 'bar',
            color: '#e690d1',
            data: [1, 1, 2, 3, 1]
          },
          {
            name: '物业费',
            type: 'bar',
            color: '#32c5e9',
            data: [0.1, 2, 3, 1, 0.5]
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
