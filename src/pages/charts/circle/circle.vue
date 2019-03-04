<template>
  <div class="chart-wrapper">
    <el-row style="height: 100%">
      <el-col :span="12">
        <circle1 ref="circle1" />
      </el-col>
      <el-col :span="12">
        <circle2 ref="circle2" />
      </el-col>
      <el-col :span="12">
        <circle3 ref="circle3" />
      </el-col>
      <el-col :span="12">
        <circle4 ref="circle4" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Circle1 from './circle1'
import Circle2 from './circle2'
import Circle3 from './circle3'
import Circle4 from './circle4'
import bus from '@/bus'
export default {
  name: 'ChartCircle',
  components: {
    Circle1,
    Circle2,
    Circle3,
    Circle4
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
      if (this.$refs.circle1) {
        this.$refs.circle1.resize()
      }
      if (this.$refs.circle2) {
        this.$refs.circle2.resize()
      }
      if (this.$refs.circle3) {
        this.$refs.circle3.resize()
      }
      if (this.$refs.circle4) {
        this.$refs.circle4.resize()
      }
    }
  }
}
</script>
