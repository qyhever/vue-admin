<template>
  <div class="content">
    <VueTinymce v-model="content" />
    <el-row type="flex" justify="center">
      <el-button type="primary" @click="handleSubmit">确定</el-button>
    </el-row>
  </div>
</template>
<script>
import VueTinymce from '@/components/vue-tinymce'
export default {
  name: 'Tinymce',
  components: {
    VueTinymce
  },
  data () {
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
  .mce-panel {
    border-color: #e2e4e7;
  }
}
</style>
