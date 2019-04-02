<template>
  <div class="con-main">
    <div class="form">
      <el-input id="suggestId" v-model="suggest" />
      <el-button class="btn" type="primary" @click="handleSubmit">确定</el-button>
    </div>
    <div id="container"></div>
  </div>
</template>

<script>
import BMap from 'BMap'
export default {
  name: 'suggest-render-map',
  data() {
    return {
      suggest: ''
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      const that = this
      const map = new BMap.Map('container')
      map.centerAndZoom('深圳', 12)
      map.enableScrollWheelZoom() // 启用滚轮放大缩小

      // 建立一个自动完成的对象
      const ac = new BMap.Autocomplete({
        input: 'suggestId',
        location: map
      })
      let result = ''
      ac.addEventListener('onconfirm', e => {
        const value = e.item.value
        result =
          value.province +
          value.city +
          value.district +
          value.street +
          value.business
        that.suggest = result
        // 清除地图上所有覆盖物
        map.clearOverlays()
        // 智能搜索
        const local = new BMap.LocalSearch(map, {
          onSearchComplete() {
            // 获取第一个智能搜索的结果
            const pp = local.getResults().getPoi(0).point
            map.centerAndZoom(pp, 18)
            // 添加标注
            map.addOverlay(new BMap.Marker(pp))
          }
        })
        local.search(result)
      })
    },
    handleSubmit() {
      this.$message.info('地址为：' + this.suggest)
    }
  }
}
</script>

<style scoped>
#container {
  position: absolute;
  top: 20px;
  left: 500px;
  right: 20px;
  bottom: 0;
}
.form {
  width: 440px;
}
.btn {
  margin-top: 15px;
}
</style>
