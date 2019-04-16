<template>
  <div class="chart-wrapper">
    <el-row style="height: 100%">
      <el-col :span="12">
        <pie1 ref="pie1" />
      </el-col>
      <el-col :span="12">
        <pie2 ref="pie2" />
      </el-col>
      <el-col :span="12">
        <pie3 ref="pie3" />
      </el-col>
      <el-col :span="12">
        <pie4 ref="pie4" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Pie1 from './pie1'
import Pie2 from './pie2'
import Pie3 from './pie3'
import Pie4 from './pie4'
import bus from '@/bus'
export default {
  name: 'charts_pie',
  components: {
    Pie1,
    Pie2,
    Pie3,
    Pie4
  },
  data() {
    return {}
  },
  mounted() {
    window.addEventListener('resize', this.resize)
    bus.$on('toggleMenu', () => {
      console.log('toggleMenu')
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    resize() {
      if (this.$refs.pie1) {
        this.$refs.pie1.resize()
      }
      if (this.$refs.pie2) {
        this.$refs.pie2.resize()
      }
      if (this.$refs.pie3) {
        this.$refs.pie3.resize()
      }
      if (this.$refs.pie4) {
        this.$refs.pie4.resize()
      }
    }
  }
}
</script>
