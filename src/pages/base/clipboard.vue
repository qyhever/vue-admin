<template>
  <div class="con-main">
    <el-input class="input" v-model="value" placeholder="请输入"/>
    <el-button type="primary" icon="document" @click="handleCopy">copy</el-button>
  </div>
</template>

<script>
import clip from '@/utils/clipboard'

export default {
  name: 'Clipboard',
  data() {
    return {
      value: '点击右侧按钮复制'
    }
  },
  methods: {
    handleCopy($event) {
      clip(this.value, $event)
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  width: 200px;
}
</style>
