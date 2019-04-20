<template>
  <div class="wrapper">
    <div id="container"></div>
  </div>
</template>

<script>
const BMap = window.BMap
export default {
  name: 'bmap_marker',
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      // 先实例化 map
      const map = new BMap.Map('container')
      // 随便设置一个中心点
      const point = new BMap.Point(114.059763, 22.542182)
      map.centerAndZoom(point, 12)
      map.enableScrollWheelZoom() // 启用滚轮放大缩小
      map.addControl(new BMap.NavigationControl()) // 地图左上方，地图的平移和缩放
      map.addControl(new BMap.OverviewMapControl()) // 右下方，可折叠的缩略地图
      map.addControl(new BMap.MapTypeControl()) // 地图右上方，地图类型
      // 生成 marker 实例
      const marker = new BMap.Marker(point)
      // 将 marker 添加到地图上
      map.addOverlay(marker)
    }
  }
}
</script>

<style scoped>
.wrapper,
#container {
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
