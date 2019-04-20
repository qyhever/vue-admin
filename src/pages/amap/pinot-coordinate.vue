<template>
  <div class="wrapper">
    <div id="container"></div>
  </div>
</template>

<script>
const AMap = window.AMap
export default {
  name: 'APinotCoordinate',
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      const map = new AMap.Map('container', {
        zoom: 12
      })
      map.on('click', e => {
        console.log(e)
        const lng = e.lnglat.getLng()
        const lat = e.lnglat.getLat()
        const marker = new AMap.Marker({
          // icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
          position: [lng, lat]
        })
        map.clearMap()
        map.add(marker)
        const text = `当前坐标：${lng} , ${lat}`
        this.$message(text)
      })
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
