<template>
  <div class="chart-wrapper">
    <el-row style="height: 100%">
      <el-col :span="12">
        <bar1 ref="bar1" />
      </el-col>
      <el-col :span="12">
        <bar2 ref="bar2" />
      </el-col>
      <el-col :span="12">
        <bar3 ref="bar3" />
      </el-col>
      <el-col :span="12">
        <bar4 ref="bar4" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Bar1 from './bar1'
import Bar2 from './bar2'
import Bar3 from './bar3'
import Bar4 from './bar4'
import bus from '@/bus'
export default {
  name: 'ChartBar',
  components: {
    Bar1,
    Bar2,
    Bar3,
    Bar4
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
      if (this.$refs.bar1) {
        this.$refs.bar1.resize()
      }
      if (this.$refs.bar2) {
        this.$refs.bar2.resize()
      }
      if (this.$refs.bar3) {
        this.$refs.bar3.resize()
      }
      if (this.$refs.bar4) {
        this.$refs.bar4.resize()
      }
    }
  }
}
</script>
