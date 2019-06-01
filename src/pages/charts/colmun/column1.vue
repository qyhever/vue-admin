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
          trigger: 'item',
          formatter: '{b}：{c}件'
        },
        xAxis: {
          type: 'category',
          data: this.genDays(15),
          axisLabel: {
            rotate: 30
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter(value) {
              return `${value} 件`
            }
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            type: 'bar',
            color: '#3aa1ff',
            data: [ 24, 115, 155, 198, 178, 58, 31, 188, 161, 68, 34, 75, 58, 51, 137 ],
            label: {
              show: true,
              position: 'top'
            }
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
