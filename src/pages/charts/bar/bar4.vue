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
        yAxis: {
          data: ['用户撞车', 'SQL注入检测', '机器人登录',
            '账号盗用', 'web高频攻击', '端口扫描', '内网连接…',
            '邮件外发'
          ],
          axisTick: {
            show: false
          }
        },

        xAxis: [{
          axisTick: {
            show: false
          },
          type: 'value',
          // max: 100,
          splitNumber: 5,
          axisLabel: {
            formatter: '{value}%'
          }
        }],
        series: [{
          name: '销量',
          type: 'bar',
          barWidth: '55%',
          label: {
            normal: {
              show: true,
              position: 'right',
              formatter: '{c}%',
              textStyle: {
                color: 'black'
              }
            }
          },
          data: [45, 22, 33, 44, 55, 66, 77, 88]
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
