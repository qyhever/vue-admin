<template>
  <div
    class="wrapper"
    v-loading="geoLoading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div id="container"></div>
  </div>
</template>

<script>
import BMap from 'BMap'

export default {
  name: 'Pinot2Coordinate',
  data() {
    return {
      geoLoading: false
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      const that = this
      // 先实例化 map
      const map = new BMap.Map('container', {
        enableMapClick: false // 关闭底图可点功能
      })
      // 随便设置一个中心点
      const point = new BMap.Point(116.331398, 39.897445)
      map.centerAndZoom(point, 12)
      map.enableScrollWheelZoom() // 启用滚轮放大缩小
      map.addControl(new BMap.NavigationControl()) // 地图左上方，地图的平移和缩放
      map.addControl(new BMap.OverviewMapControl()) // 右下方，可折叠的缩略地图
      map.addControl(new BMap.MapTypeControl()) // 地图右上方，地图类型
      that.geoLoading = true
      const geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition(function (r) {
        that.geoLoading = false
        if (this.getStatus() === window.BMAP_STATUS_SUCCESS) {
          // 重置中心点
          map.panTo(r.point)
          map.setZoom(12)
        }
      }, {
        enableHighAccuracy: true
      })
      map.addEventListener('click', e => {
        const text = `当前坐标：${e.point.lng} , ${e.point.lat}`
        this.$message(text)
      })
    }
  }
}
</script>

<style scoped>
  .wrapper, #container {
    height: 100%;
  }

  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
