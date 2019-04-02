<template>
  <div class="wrapper">
    <div id="container"></div>
  </div>
</template>

<script>
import AMap from 'AMap'

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
        const text = `当前坐标：${e.lnglat.getLng()} , ${e.lnglat.getLat()}`
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
