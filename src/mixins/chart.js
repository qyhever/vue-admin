import echarts from 'echarts'
import macaronsConfig from '@/config/macarons.echarts.theme.json'
echarts.registerTheme(macaronsConfig.themeName, macaronsConfig.theme)

export default {
  data() {
    return {
      data: {}, // 数据
      list: [], // 数据
      chart: null, // 图表
      option: {}, // 图表参数
      isFirstRender: true // 是否为首次渲染
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
      this.refresh()
    })
  },
  methods: {
    init() {
      if (this.$refs.chart) {
        this.chart = echarts.init(this.$refs.chart, macaronsConfig.themeName)
        this.setOption()
      }
    },
    render(option) {
      this.$nextTick(() => {
        if (this.chart) {
          this.chart.setOption(option)
          this.events()
        }
      })
    },
    refresh() {
      // api query
    },
    events() {
      // ...
    },
    resize() {
      this.$nextTick(() => {
        if (this.chart) {
          this.chart.resize()
        }
      })
    },
    linearGradient(...rest) {
      return new echarts.graphic.LinearGradient(...rest)
    },
    genDays(n) {
      const rows = []
      for (let i = 0; i < n; i++) {
        const date = new Date()
        const y = date.getFullYear()
        const m = date.getMonth() + 1
        const d = date.getDate() - (n - 1 - i)
        rows.push(`${y}-${m}-${d}`)
      }
      return rows
    },
    genRandomData(n, max) {
      const rows = []
      for (let i = 0; i < n - 1; i++) {
        const count = Math.floor(Math.random() * max)
        rows.push(count)
      }
      return rows
    }
  }
}
