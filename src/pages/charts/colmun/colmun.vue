<template>
  <div class="wrapper">
    <el-row style="height: 100%">
      <el-col :span="12" class="col">
        <column1 ref="column1" />
      </el-col>
      <el-col :span="12" class="col">
        <column2 ref="column2" />
      </el-col>
      <el-col :span="12" class="col">
        <column3 ref="column3" />
      </el-col>
      <el-col :span="12" class="col">
        <column4 ref="column4" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Column1 from './column1'
import Column2 from './column2'
import Column3 from './column3'
import Column4 from './column4'
import bus from '@/bus'
export default {
  name: 'Colmun',
  components: {
    Column1,
    Column2,
    Column3,
    Column4
  },
  data() {
    return {
      charts: [],
      date: 'day',
      activeName: 'second'
    }
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
      if (this.$refs.column1) {
        this.$refs.column1.resize()
      }
      if (this.$refs.column2) {
        this.$refs.column2.resize()
      }
      if (this.$refs.column3) {
        this.$refs.column3.resize()
      }
      if (this.$refs.column4) {
        this.$refs.column4.resize()
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
  }
  .col {
    height: 50%;
  }
</style>
