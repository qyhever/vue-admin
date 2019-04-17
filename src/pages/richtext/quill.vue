<template>
  <div class="con-main">
    <vue-quill v-model="content"></vue-quill>
    <el-row type="flex" justify="center">
      <el-button type="primary" @click="handleSubmit">确定</el-button>
    </el-row>
  </div>
</template>

<script>
import VueQuill from '@/components/vue-quill'
export default {
  name: 'richtext_quill',
  components: {
    VueQuill
  },
  data() {
    return {
      content: '生命在于折腾'
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.content)
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ {
  .el-row {
    margin-top: 15px;
  }
}
</style>
