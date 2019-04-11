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
const AMap = window.AMap
export default {
  name: 'ASuggestRenderMap',
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
      const map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: 12
      })
      // 输入提示
      const auto = new AMap.Autocomplete({
        input: 'suggestId'
      })
      // 构造地点查询类
      const placeSearch = new AMap.PlaceSearch({
        map
      })
      // 注册监听，当选中某条记录时会触发
      AMap.event.addListener(auto, 'select', function(e) {
        that.suggest = e.poi.name
        placeSearch.setCity(e.poi.adcode)
        // 关键字查询
        placeSearch.search(e.poi.name)
      })
    },
    handleSubmit() {
      this.$message.info('地址为：' + this.suggest)
    }
  }
}
</script>

<style scoped lang="scss">
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
