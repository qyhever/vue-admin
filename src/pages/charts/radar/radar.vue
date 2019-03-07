<template>
  <div class="chart-wrapper">
    <el-row style="height: 100%">
      <el-col :span="12">
        <radar1 ref="radar1" />
      </el-col>
      <el-col :span="12">
        <radar2 ref="radar2" />
      </el-col>
      <el-col :span="12">
        <radar3 ref="radar3" />
      </el-col>
      <el-col :span="12">
        <radar4 ref="radar4" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Radar1 from './radar1'
import Radar2 from './radar2'
import Radar3 from './radar3'
import Radar4 from './radar4'
import bus from '@/bus'
export default {
  name: 'Radar',
  components: {
    Radar1,
    Radar2,
    Radar3,
    Radar4
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
      if (this.$refs.radar1) {
        this.$refs.radar1.resize()
      }
      if (this.$refs.radar2) {
        this.$refs.radar2.resize()
      }
      if (this.$refs.radar3) {
        this.$refs.radar3.resize()
      }
      if (this.$refs.radar4) {
        this.$refs.radar4.resize()
      }
    }
  }
}
</script>
