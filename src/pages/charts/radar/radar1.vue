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
        radar: {
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: '销售（sales）', max: 6500 },
            { name: '管理（Administration）', max: 16000 },
            { name: '信息技术（Information Techology）', max: 30000 },
            { name: '客服（Customer Support）', max: 38000 },
            { name: '研发（Development）', max: 52000 }
          ]
        },
        series: [
          {
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            areaStyle: {},
            data: [
              {
                value: [4300, 10000, 28000, 26000, 42000],
                name: '预算分配（Allocated Budget）'
              }
            ]
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
