<template>
  <div class="chart-wrapper">
    <el-row style="height: 100%">
      <el-col :span="12">
        <line1 ref="line1" />
      </el-col>
      <el-col :span="12">
        <line2 ref="line2" />
      </el-col>
      <el-col :span="12">
        <line3 ref="line3" />
      </el-col>
      <el-col :span="12">
        <line4 ref="line4" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Line1 from './line1'
import Line2 from './line2'
import Line3 from './line3'
import Line4 from './line4'
import bus from '@/bus'
export default {
  name: 'ChartBar',
  components: {
    Line1,
    Line2,
    Line3,
    Line4
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
      if (this.$refs.line1) {
        this.$refs.line1.resize()
      }
      if (this.$refs.line2) {
        this.$refs.line2.resize()
      }
      if (this.$refs.line3) {
        this.$refs.line3.resize()
      }
      if (this.$refs.line4) {
        this.$refs.line4.resize()
      }
    }
  }
}
</script>
