<template>
  <div ref="chart" class="chart" style="height: 400px"></div>
</template>

<script>
import chart from '@/mixins/chart'
export default {
  mixins: [chart],
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    setOption() {
      this.option = {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            detail: { formatter: '{value}%' },
            data: [{ value: 50, name: '完成率' }]
          }
        ]
      }
    },
    refresh() {
      const option = this.option
      this.render(option)
      this.timer = setInterval(() => {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
        this.render(option)
      }, 2000)
    }
  }
}
</script>
