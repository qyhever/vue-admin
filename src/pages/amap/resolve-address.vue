<template>
  <div class="con-main">
    <el-input class="input" v-model="address" placeholder="请输入地址"/>
    <el-button type="primary" :loading="loading1" @click="handleResolveAddress">解析为经纬度</el-button>
    <div class="mt15">解析结果：{{result1}}</div>
    <el-input class="input mt15" v-model="point" placeholder="请输入经纬度，以逗号分隔"/>
    <el-button type="primary" :loading="loading2" @click="handleResolvePoint">解析为地址</el-button>
    <div class="mt15">解析结果：{{result2}}</div>
  </div>
</template>

<script>
const AMap = window.AMap
export default {
  name: 'amap_resolve_address',
  data() {
    return {
      address: '',
      loading1: false,
      result1: '',
      point: '',
      loading2: false,
      result2: ''
    }
  },
  methods: {
    handleResolveAddress() {
      if (!this.address) {
        return this.$message.warning('请输入地址')
      }
      // 创建地址解析器实例
      const geocoder = new AMap.Geocoder()
      this.loading1 = true
      geocoder.getLocation(this.address, (status, result) => {
        this.loading1 = false
        console.log(result)
        if (status === 'complete' && result.geocodes.length) {
          const lnglat = result.geocodes[0].location
          this.result1 = lnglat.lng + ', ' + lnglat.lat
        }
      })
    },
    handleResolvePoint() {
      if (!this.point) {
        return this.$message.warning('请输入经纬度')
      }
      // 创建地址解析器实例
      const geocoder = new AMap.Geocoder()
      const pt = this.point.split(',')
      this.loading2 = true
      geocoder.getAddress(pt, (status, result) => {
        this.loading2 = false
        console.log(result)
        if (status === 'complete' && result.regeocode) {
          const address = result.regeocode.formattedAddress
          this.result2 = address
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  width: 300px;
}
</style>
