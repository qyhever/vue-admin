<template>
  <div class="con-main">
    <el-button type="primary" @click="show">点击显示弹窗</el-button>
    <el-dialog
      v-dialogDrag
      title="添加"
      :visible.sync="visible"
      width="640px"
      :close-on-click-modal="false"
    >
      <h2>这是内容</h2>
      <h3>这是内容</h3>
      <h4>这是内容</h4>
      <h5>这是内容</h5>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'base_drag_modal',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    show() {
      this.visible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  width: 200px;
}
</style>
