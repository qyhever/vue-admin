<template>
  <div class="con-main">
    <el-input class="input" v-model="text" placeholder="请输入"/>
    <el-button type="primary" class="ml15" @click="handleGen">生成</el-button>
    <div ref="qrcode" class="qrcode-wrapper mt15"></div>
  </div>
</template>

<script>
export default {
  name: 'base_qrcode',
  data() {
    return {
      text: 'https://qyhever.top'
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.qrcode = null
  },
  methods: {
    handleGen() {
      this.qrcode.clear()
      this.qrcode.makeCode(this.text)
    },
    init() {
      this.qrcode = new window.QRCode(this.$refs.qrcode, {
        text: this.text,
        width: 128,
        height: 128
      })
    }
  }
}
</script>

<style scoped lang="scss">
.qrcode-wrapper {
  width: 128px;
  height: 128px;
}
.input {
  width: 300px;
}
</style>
