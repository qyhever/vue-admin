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
const BMap = window.BMap
export default {
  name: 'bmap_resolve_address',
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
      const geocoder = new BMap.Geocoder()
      this.loading1 = true
      geocoder.getPoint(this.address, point => {
        this.loading1 = false
        if (!point) {
          return this.$message.error('解析失败')
        }
        this.result1 = point.lng + ', ' + point.lat
      })
    },
    handleResolvePoint() {
      if (!this.point) {
        return this.$message.warning('请输入经纬度')
      }
      // 创建地址解析器实例
      const geocoder = new BMap.Geocoder()
      const point = this.point.split(',')
      const pt = new BMap.Point(point[0], point[1])
      this.loading2 = true
      geocoder.getLocation(pt, rs => {
        this.loading2 = false
        const addComp = rs.addressComponents
        let result = ''
        if (addComp.province) {
          result += addComp.province + ','
        }
        if (addComp.city) {
          result += addComp.city + ','
        }
        if (addComp.district) {
          result += addComp.district + ','
        }
        if (addComp.street) {
          result += addComp.street + ','
        }
        if (addComp.streetNumber) {
          result += addComp.streetNumber
        }
        console.log(result)
        this.result2 = result
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
